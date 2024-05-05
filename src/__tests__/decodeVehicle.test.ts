import decodeVehicle, { VehiclePropertyEnum } from '../decoders/decodeVehicle';

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
    expect(decodeVehicle('8WN80THJ142069Z')).toEqual({ vehicle: expected });
  });

  test('should not care about casing', () => {
    expect(decodeVehicle('8wn80thj142069z')).toEqual({ vehicle: expected });
  });

  test('should return null value if section is unrecognised', () => {
    expect(decodeVehicle('9WN80THJ142069Z').vehicle).toContainEqual([
      VehiclePropertyEnum.Division,
      null,
    ]);
  });

  test('should return error if incorrect length', () => {
    const result = decodeVehicle('8WN80THJ1420420Z');

    expect(result).not.toHaveProperty('vehicle');
    expect(result.error).toBeInstanceOf(Error);
  });

  test('should return error if cannot decode', () => {
    const result = decodeVehicle('invalid');

    expect(result).not.toHaveProperty('vehicle');
    expect(result.error).toBeInstanceOf(Error);
  });
});
