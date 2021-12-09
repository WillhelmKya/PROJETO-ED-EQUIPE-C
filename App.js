import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import RouterScreen from './src/pages/RouterScreen';
import RoutesTab from './src/pages/RoutesTab';

const App = () => {
  return (
    <NavigationContainer>
      <RouterScreen/>
    </NavigationContainer>
  );
}

export default App;