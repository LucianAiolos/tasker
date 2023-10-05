/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './src/Routes';
import store from './src/redux/store'
import { Provider } from 'react-redux'

function App(): JSX.Element {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff',
    },
  }

  return (
      <Provider store={store}>
        <NavigationContainer theme={theme}>
          <Routes />
        </NavigationContainer>
      </Provider>
  );
}

export default App;
