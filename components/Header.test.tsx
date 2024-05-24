import { render, screen } from '@testing-library/react-native';
import Header from './Header';

describe('Header', () => {
  it('renders successfully', () => {
    const { root } = render(<Header topic='People' page={0} />);
    expect(root).toBeTruthy();
  });
  it('shows title', () => {
    const { getByText } = render(<Header topic='People' page={0} />);
    // const headerComp = getByText('title');
    expect(screen.getByText('People')).toBeTruthy();
  });
});
