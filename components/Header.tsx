import { FC } from 'react';
import { Appbar, HelperText } from 'react-native-paper';

type HeaderProps = {
  topic: string;
  page: number;
};

const Header: FC<HeaderProps> = ({ topic, page }) => {
  return (
    <Appbar.Header>
      <Appbar.Content title={`🌌 StarWars 👥 ${topic}`} />
      <HelperText testID='title' type='info'>
        Page {page + 1}
      </HelperText>
    </Appbar.Header>
  );
};

export default Header;
