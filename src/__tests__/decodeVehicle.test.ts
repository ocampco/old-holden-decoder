import decodeVehicle from '../decoders/decodeVehicle';
import { VehicleProperty } from '../constants/vehicleCodes';

const expected: Vehicle = [
  [VehicleProperty.Division, 'Holden'],
  [VehicleProperty.Luxury, 'Kingswood'],
  [VehicleProperty.Body, 'Utility'],
  [VehicleProperty.Engine, '308 High Compression'],
  [VehicleProperty.Year, '1978'],
  [VehicleProperty.Assembly, 'Melbourne'],
  [VehicleProperty.Serial, '42069'],
  [VehicleProperty.Series, 'HZ 10/77'],
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
      VehicleProperty.Division,
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
