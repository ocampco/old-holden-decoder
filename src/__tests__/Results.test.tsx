import { render, screen } from '@testing-library/react';
import Results from '../components/Results';
import { VehiclePropertyEnum } from '../decodeVehicle';

const vehicle: Vehicle = [
  [VehiclePropertyEnum.Division, null],
  [VehiclePropertyEnum.Luxury, 'Kingswood'],
  [VehiclePropertyEnum.Body, 'Panel Van'],
  [VehiclePropertyEnum.Engine, '308 High Compression'],
  [VehiclePropertyEnum.Year, '1978'],
  [VehiclePropertyEnum.Assembly, 'Melbourne'],
  [VehiclePropertyEnum.Serial, '42069'],
  [VehiclePropertyEnum.Series, 'HZ 10/77'],
];

describe('Results', () => {
  test('should display results', () => {
    render(<Results vehicle={vehicle} />);

    expect(screen.getByText('Melbourne')).toBeInTheDocument();
  });

  test('should display unknown for undecoded values', () => {
    render(<Results vehicle={vehicle} />);

    expect(screen.getByText('Unknown')).toBeInTheDocument();
  });
});
