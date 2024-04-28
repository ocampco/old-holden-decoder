import { render, screen } from '@testing-library/react';
import Time from '../Time';

describe('Time', () => {
  test('should render time', async () => {
    const time = '13:42:33 GMT+1100 (Australian Eastern Daylight Time)';
    render(<Time time={time} />);

    await screen.findByTestId('current-time');

    expect(screen.getByText(time, { exact: false })).toBeInTheDocument();
  });
});
