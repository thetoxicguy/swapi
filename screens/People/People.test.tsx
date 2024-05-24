import { render, screen } from '@testing-library/react-native';
import People from '.';

describe('People screen', () => {
  it('renders successfully', () => {
    const { root } = render(<People />);
    expect(root).toBeTruthy();
  });
});
