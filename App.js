import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import RouterScreen from './src/pages/RouterScreen';

const App = () => {
  return (
    <NavigationContainer>
      <RouterScreen/>
    </NavigationContainer>
  );
}

export default App;
