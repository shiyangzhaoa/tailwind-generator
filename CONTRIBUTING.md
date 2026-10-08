# Contributing

## Setup

The toolchain is pinned in `mise.toml` (Node.js 24.21.0, pnpm 12.10.1) and enforced by `devEngines` and `packageManager` in `package.json`. Install [mise](https://mise.jdx.dev/), then:

```sh
mise trust
mise install
mise exec -- pnpm install --frozen-lockfile
```

Activate mise in your shell, or prefix the commands below with `mise exec --`.

## Checks

CI runs all of these:

```sh
pnpm check:mappings      # generated files match data/tailwind-4.1.json
pnpm verify:mappings     # every mapped class compiles with Tailwind 4.1.18
pnpm typecheck
pnpm test
pnpm build
pnpm test:package        # installs the packed tarball, loads it with import and require()
pnpm exec playwright install chromium
pnpm test:browser        # compares computed styles in Chromium
```

Set `CHROME_PATH` to use an installed Chrome for `test:browser`. Set `CONSUMER_NODE` to a Node.js binary to run the `test:package` consumers on another version; CI does this for Node.js 20.19 and 22.12, the oldest versions in `engines`. `pnpm benchmark` reports matching and conversion throughput.

## Mappings

Mappings and default tokens come from `data/tailwind-4.1.json`. After changing it, run `pnpm generate:mappings`; never edit `src/generated/` or `src/tokens.mts` by hand. [docs/architecture.md](docs/architecture.md) covers module boundaries, rule registration, mapping generation, and verification limits.

## Changesets

A pull request that changes published behavior needs a changeset:

```sh
pnpm changeset
```

Pick patch, minor, or major, describe the change for users, and commit the generated `.changeset/*.md` file. It becomes the `CHANGELOG.md` entry and the GitHub release notes.

## Releasing

`.github/workflows/release.yml` runs on pushes to `main` and `next`:

1. While changesets are pending, it opens or updates a "chore: version packages" pull request that bumps `package.json` and writes `CHANGELOG.md`.
2. Merging that pull request publishes: full CI, then the packed tarball to npm with trusted publishing and provenance (in the `npm` environment), then the `v<version>` tag and GitHub release.

| Branch | Mode                       | Versions       | npm dist-tag |
| ------ | -------------------------- | -------------- | ------------ |
| `main` | normal                     | `0.1.0`        | `latest`     |
| `next` | pre mode (`changeset pre`) | `0.2.0-beta.0` | `beta`       |

`scripts/release-channel.mts` derives the dist-tag from the version: `<x.y.z>-<channel>.<n>` goes to `<channel>`, and a stable version lower than the current `latest` goes to `latest-<major>`. Stable versions are only published from `main`.

Betas:

```sh
git switch -c next main
pnpm changeset pre enter beta   # commit .changeset/pre.json and push next
# Merge changesets into next; each version pull request on next publishes 0.2.0-beta.N.
pnpm changeset pre exit         # before merging next into main for 0.2.0
```

The version pull request is opened with the workflow token, so CI does not run on it; the release workflow runs CI before publishing.

Repository setup, already done for this repository: a trusted publisher on npmjs.com (repository `shiyangzhaoa/tailwind-generator`, workflow `release.yml`, environment `npm`, "Allow npm publish"), a GitHub `npm` environment, and "Allow GitHub Actions to create and approve pull requests" under Actions > General.
