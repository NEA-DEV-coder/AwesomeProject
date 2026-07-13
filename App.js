import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigation from './screens/Home/navigation/MainNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { horizontalScale } from './assets/styles/scaling';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider style={{ marginHorizontal: horizontalScale(2) }}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
