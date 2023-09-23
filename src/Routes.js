/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './screens/auth/Onboarding';
import Signin from './screens/auth/Signin';
import Signup from './screens/auth/Signup';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator()

function Routes() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  console.log(user)
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text style={{fontSize: 50}}>Login</Text>
      </View>
    );
  }

  if(user) {
    reutrn (
      <Text style={{fontSize: 50}}>Welcome</Text>
    )
  }

  // return (
  //     <Stack.Navigator screenOptions={{headerShown: false}}>
  //       <Stack.Screen name='Onboarding' component={Onboarding} />
  //       <Stack.Screen name='Signin' component={Signin} />
  //       <Stack.Screen name='Signup' component={Signup} />
  //     </Stack.Navigator>
  // );
}

export default React.memo(Routes);
