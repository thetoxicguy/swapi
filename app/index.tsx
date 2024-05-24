import Navigator from '@/components/Navigator';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { PaperProvider } from 'react-native-paper';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // The time that the cache will remain valid
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <Navigator />
      </PaperProvider>
    </QueryClientProvider>
  );
}
