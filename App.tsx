/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './src/Routes';

function App(): JSX.Element {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

export default App;
