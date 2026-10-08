// Decides the npm dist-tag for a release so that it never depends on someone
// remembering `--tag`. Runs directly on Node 24 (type stripping) in the
// release workflow, and is imported by tests.
import { execFileSync } from 'node:child_process';
import { appendFileSync, readFileSync } from 'node:fs';

const pattern =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-([a-z][a-z-]*)\.(0|[1-9]\d*))?$/i;

function parse(version: string) {
  const match = pattern.exec(version);
  if (!match)
    throw new Error(
      `Unsupported version ${version}: use 1.2.3 or 1.2.3-<channel>.<n>`,
    );
  const [, major, minor, patch, channel] = match;
  return { core: [major, minor, patch].map(Number), channel };
}

/** Positive when a is newer than b; a stable version is newer than its prereleases. */
function compare(a: string, b: string) {
  const x = parse(a);
  const y = parse(b);
  for (let i = 0; i < 3; i++)
    if (x.core[i] !== y.core[i]) return x.core[i] - y.core[i];
  if (!x.channel || !y.channel) return Number(!x.channel) - Number(!y.channel);
  return 0;
}

export function releaseChannel(
  version: string,
  currentLatest: string | undefined,
): { tag: string; prerelease: boolean } {
  const { core, channel } = parse(version);
  if (channel) {
    if (channel.toLowerCase().startsWith('latest'))
      throw new Error(`Prerelease channel ${channel} would shadow latest`);
    return { tag: channel.toLowerCase(), prerelease: true };
  }
  // An older line (for example a 0.x patch after 1.0.0) keeps its own tag.
  const older =
    currentLatest !== undefined &&
    pattern.test(currentLatest) &&
    compare(version, currentLatest) < 0;
  return { tag: older ? `latest-${core[0]}` : 'latest', prerelease: false };
}

if (import.meta.main) {
  const pkg = JSON.parse(readFileSync('package.json', 'utf8')) as {
    name: string;
    version: string;
  };
  const ref = process.env.GITHUB_REF_NAME;
  if (ref !== undefined && ref !== `v${pkg.version}`)
    throw new Error(`Tag ${ref} does not match package version ${pkg.version}`);
  let latest: string | undefined;
  try {
    latest = execFileSync('npm', ['view', pkg.name, 'dist-tags.latest'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    }).trim();
  } catch (error) {
    // Only a missing package means "first release"; a registry outage must
    // not let an older line take latest.
    if (!String((error as { stderr?: unknown }).stderr).includes('E404'))
      throw error;
    latest = undefined;
  }
  const { tag, prerelease } = releaseChannel(pkg.version, latest || undefined);
  const output = `version=${pkg.version}\ntag=${tag}\nprerelease=${prerelease}\n`;
  if (process.env.GITHUB_OUTPUT)
    appendFileSync(process.env.GITHUB_OUTPUT, output);
  process.stdout.write(output);
}
