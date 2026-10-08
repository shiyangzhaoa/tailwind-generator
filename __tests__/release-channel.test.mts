import { releaseChannel } from '../scripts/release-channel.mjs';

describe('release channel', () => {
  test.each([
    ['1.2.0', undefined, 'latest'],
    ['1.2.0', '1.1.9', 'latest'],
    ['1.2.0', '1.2.0-beta.4', 'latest'],
    // A prerelease that currently occupies latest is replaced by a stable one.
    ['0.1.0', '0.0.2-beta.1', 'latest'],
    // Maintenance releases on an older line never take latest back.
    ['0.9.4', '1.0.0', 'latest-0'],
    ['1.2.1', '2.0.0', 'latest-1'],
  ])('%s with latest %s publishes to %s', (version, latest, tag) => {
    expect(releaseChannel(version, latest)).toEqual({
      tag,
      prerelease: false,
    });
  });

  test.each([
    ['1.3.0-beta.0', 'beta'],
    ['1.3.0-rc.2', 'rc'],
    ['1.3.0-alpha.1', 'alpha'],
    ['2.0.0-next.0', 'next'],
  ])('%s publishes to %s', (version, tag) => {
    expect(releaseChannel(version, '1.2.0')).toEqual({
      tag,
      prerelease: true,
    });
  });

  test.each(['1.2', 'v1.2.0', '1.2.0-0', '1.2.0-latest.1', '1.2.0+build'])(
    'rejects %s',
    (version) => {
      expect(() => releaseChannel(version, '1.0.0')).toThrow();
    },
  );
});
