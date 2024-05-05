import { render, screen } from '@testing-library/react';
import Results from '../components/Results';
import { VehicleProperty } from '../constants/vehicleCodes';

const vehicle: Vehicle = [
  [VehicleProperty.Division, null],
  [VehicleProperty.Luxury, 'Kingswood'],
  [VehicleProperty.Body, 'Panel Van'],
  [VehicleProperty.Engine, '308 High Compression'],
  [VehicleProperty.Year, '1978'],
  [VehicleProperty.Assembly, 'Melbourne'],
  [VehicleProperty.Serial, '42069'],
  [VehicleProperty.Series, 'HZ 10/77'],
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
