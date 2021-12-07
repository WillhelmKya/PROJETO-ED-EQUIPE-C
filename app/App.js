import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import RouterScreen from './src/pages/RouterScreen';

const App = () => {
  return (
    <NavigationContainer>
      <RouterScreen/>
    </NavigationContainer>
  );
}

export default App;