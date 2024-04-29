import decodeVehicle, { VehiclePropertyEnum } from '../decodeVehicle';

const expected: Vehicle = [
  [VehiclePropertyEnum.Division, 'Holden'],
  [VehiclePropertyEnum.Luxury, 'Kingswood'],
  [VehiclePropertyEnum.Body, 'Utility'],
  [VehiclePropertyEnum.Engine, '308 High Compression'],
  [VehiclePropertyEnum.Year, '1978'],
  [VehiclePropertyEnum.Assembly, 'Melbourne'],
  [VehiclePropertyEnum.Serial, '42069'],
  [VehiclePropertyEnum.Series, 'HZ 10/77'],
];

describe('decodeVehicle', () => {
  test('should decode vin', () => {
    expect(decodeVehicle('8WN80THJ142069Z')).toEqual(expected);
  });

  test('should not care about casing', () => {
    expect(decodeVehicle('8wn80thj142069z')).toEqual(expected);
  });

  test('should return null value if section is unrecognised', () => {
    expect(decodeVehicle('9WN80THJ142069Z')).toContainEqual([
      VehiclePropertyEnum.Division,
      null,
    ]);
  });

  test('should return error if incorrect length', () => {
    expect(decodeVehicle('8WN80THJ1420420Z')).toBeInstanceOf(Error);
  });
});
