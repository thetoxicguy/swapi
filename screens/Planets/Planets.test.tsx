import { render, screen } from '@testing-library/react-native';
import Planets from '.';

describe('Planets screen', () => {
  it('renders successfully', () => {
    const { root } = render(<Planets />);
    expect(root).toBeTruthy();
  });
});
