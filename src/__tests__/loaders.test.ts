import * as loaders from '../router/loaders';

describe('decodeFromParams', () => {
  test('should decode from vin', () => {
    const request = new Request(
      'http://localhost:5173/old-holden-decoder/?vin=8WN80THJ142069Z',
    );

    expect(loaders.decodeFromParams({ request })).toHaveProperty('vehicle');
  });

  describe('when invalid vin is given', () => {
    test('should return error', () => {
      const request = new Request(
        'http://localhost:5173/old-holden-decoder/?vin=invalid',
      );

      expect(loaders.decodeFromParams({ request })).toHaveProperty('error');
    });
  });

  describe('when no key in search params', () => {
    test('should return empty object', () => {
      const request = new Request('http://localhost:5173/old-holden-decoder/');

      expect(loaders.decodeFromParams({ request })).toEqual({});
    });
  });
});
