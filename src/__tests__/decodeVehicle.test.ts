import decodeVehicle from '../decodeVehicle';

describe('decodeVehicle', () => {
  test('return decoded vin', () => {
    const expected = [
      'Holden',
      'Kingswood',
      'Utility',
      '308 High Compression',
      '1978',
      'Melbourne',
      '42069',
      'HZ 10/77',
    ];

    expect(decodeVehicle('8WN80THJ142069Z')).toEqual(expected);
  });

  test('return null if section unrecognised', () => {
    expect(decodeVehicle('9WN80THJ142069Z')).toContain(null);
  });

  test('return error if incorrect length', () => {
    const expected = new Error();

    expect(decodeVehicle('8WN80THJ1420420Z')).toEqual(expected);
  });
});
