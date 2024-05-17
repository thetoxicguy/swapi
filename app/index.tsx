import Navigator from '@/components/Navigator';
import * as React from 'react';

import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <Navigator />
    </PaperProvider>
  );
}
