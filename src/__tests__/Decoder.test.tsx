import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Decoder from '../components/Decoder';

describe('Decoder', () => {
  describe('given vin from input', () => {
    test('should decode', () => {
      render(<Decoder />, { wrapper: MemoryRouter });

      fireEvent.change(screen.getByPlaceholderText('VIN', { exact: false }), {
        target: { value: '8WN80THJ142069Z' },
      });
      fireEvent.click(screen.getByRole('button'));

      expect(screen.getByText('Kingswood')).toBeInTheDocument();
    });

    describe('given invalid vin', () => {
      test('should display error', () => {
        render(<Decoder />, { wrapper: MemoryRouter });

        fireEvent.change(screen.getByPlaceholderText('VIN', { exact: false }), {
          target: { value: 'invalid' },
        });
        fireEvent.click(screen.getByRole('button'));

        expect(
          screen.getByText('VIN is not valid or cannot be decoded'),
        ).toBeInTheDocument();
      });

      test('should hide error after decoding valid vin', () => {
        render(<Decoder />, { wrapper: MemoryRouter });

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

  describe('given vin from url', () => {
    test('should decode', () => {
      render(
        <MemoryRouter
          initialEntries={['/old-holden-decoder/?vin=8WN80THJ142069Z']}
        >
          <Decoder />
        </MemoryRouter>,
      );

      expect(screen.getByText('Kingswood')).toBeInTheDocument();
    });

    describe('given invalid vin', () => {
      test('should display error', () => {
        render(
          <MemoryRouter initialEntries={['/old-holden-decoder/?vin=invalid']}>
            <Decoder />
          </MemoryRouter>,
        );

        expect(
          screen.getByText('VIN is not valid or cannot be decoded'),
        ).toBeInTheDocument();
      });

      test('should not decode if empty', () => {
        render(
          <MemoryRouter initialEntries={['/old-holden-decoder/?vin=']}>
            <Decoder />
          </MemoryRouter>,
        );

        expect(
          screen.queryByText('VIN is not valid or cannot be decoded'),
        ).not.toBeInTheDocument();
      });
    });
  });
});
