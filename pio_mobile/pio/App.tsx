import React from 'react';
import { StatusBar } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppNavigator from './navigation';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar backgroundColor={Colors.darker} />
      <AppNavigator />
    </QueryClientProvider>
  );
};

export default App;
