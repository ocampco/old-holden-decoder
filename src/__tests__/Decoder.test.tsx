import { fireEvent, render, screen } from '@testing-library/react';
import Decoder from '../components/Decoder';

describe('Decoder', () => {
  test('should decode vins', () => {
    render(<Decoder />);

    fireEvent.change(screen.getByPlaceholderText('VIN', { exact: false }), {
      target: { value: '8WN80THJ142069Z' },
    });
    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByText('Kingswood')).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText('VIN', { exact: false }), {
      target: { value: '8WM80THJ142069Z' },
    });
    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByText('Belmont')).toBeInTheDocument();
  });

  describe('given invalid vin', () => {
    test('should display error', () => {
      render(<Decoder />);

      fireEvent.change(screen.getByPlaceholderText('VIN', { exact: false }), {
        target: { value: 'invalid' },
      });
      fireEvent.click(screen.getByRole('button'));

      expect(
        screen.getByText('VIN is not valid or cannot be decoded'),
      ).toBeInTheDocument();
    });

    test('should hide error after decoding valid vin', () => {
      render(<Decoder />);

      fireEvent.change(screen.getByPlaceholderText('VIN', { exact: false }), {
        target: { value: 'invalid' },
      });
      fireEvent.click(screen.getByRole('button'));

      expect(
        screen.getByText('VIN is not valid or cannot be decoded'),
      ).toBeInTheDocument();

      fireEvent.change(screen.getByPlaceholderText('VIN', { exact: false }), {
        target: { value: '8WM80THJ142069Z' },
      });
      fireEvent.click(screen.getByRole('button'));

      expect(
        screen.queryByText('VIN is not valid or cannot be decoded'),
      ).not.toBeInTheDocument();
    });
  });
});
