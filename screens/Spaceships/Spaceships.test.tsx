import { render, screen } from '@testing-library/react-native';
import Spaceships from '.';

describe('Spaceships screen', () => {
  it('renders successfully', () => {
    const { root } = render(<Spaceships />);
    expect(root).toBeTruthy();
  });
});
