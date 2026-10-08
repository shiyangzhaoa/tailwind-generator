import { convertDeclaration as listStyleImage } from '../../convert-declaration.mjs';

describe('list-style-image', () => {
  test('base', () => {
    expect(listStyleImage(['list-style-image', 'none'])).toBe(
      'list-image-none',
    );
  });

  test('url with relative path', () => {
    expect(listStyleImage(['list-style-image', 'url(/images/icon.png)'])).toBe(
      'list-image-[url(/images/icon.png)]',
    );
  });

  test('url with data URI', () => {
    expect(
      listStyleImage(['list-style-image', 'url(data:image/png;base64,ABC123)']),
    ).toBe('list-image-[url(data:image/png;base64,ABC123)]');
  });

  test('url with simple path', () => {
    expect(listStyleImage(['list-style-image', 'url(icon.png)'])).toBe(
      'list-image-[url(icon.png)]',
    );
  });

  test('url with parent path', () => {
    expect(
      listStyleImage(['list-style-image', 'url(../images/icon.png)']),
    ).toBe('list-image-[url(../images/icon.png)]');
  });

  test('invalid url', () => {
    expect(listStyleImage(['list-style-image', 'url(invalid)'])).toBe(
      'list-image-[url(invalid)]',
    );
  });

  test('invalid value', () => {
    expect(listStyleImage(['list-style-image', 'invalid'])).toBe(
      'list-image-[invalid]',
    );
  });
});
