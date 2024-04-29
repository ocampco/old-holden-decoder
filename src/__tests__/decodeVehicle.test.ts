import decodeVehicle, { VehiclePropertyEnum } from '../decodeVehicle';

describe('decodeVehicle', () => {
  test('return decoded vin', () => {
    const expected = [
      [VehiclePropertyEnum.Division, 'Holden'],
      [VehiclePropertyEnum.Luxury, 'Kingswood'],
      [VehiclePropertyEnum.Body, 'Utility'],
      [VehiclePropertyEnum.Engine, '308 High Compression'],
      [VehiclePropertyEnum.Year, '1978'],
      [VehiclePropertyEnum.Assembly, 'Melbourne'],
      [VehiclePropertyEnum.Serial, '42069'],
      [VehiclePropertyEnum.Series, 'HZ 10/77'],
    ];

    expect(decodeVehicle('8WN80THJ142069Z')).toEqual(expected);
  });

  test('return null if section unrecognised', () => {
    expect(decodeVehicle('9WN80THJ142069Z')).toContainEqual([
      VehiclePropertyEnum.Division,
      null,
    ]);
  });

  test('return error if incorrect length', () => {
    expect(decodeVehicle('8WN80THJ1420420Z')).toBeInstanceOf(Error);
  });
});
