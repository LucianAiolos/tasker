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
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Onboarding from './screens/auth/Onboarding';
import Home from './screens/app/Home'
import Tasks from './screens/app/Tasks';
import AddTask from './screens/app/AddTask';
import Signin from './screens/auth/Signin';
import Signup from './screens/auth/Signup';
import auth from '@react-native-firebase/auth';

const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function Routes() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  console.log(user)
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {setInitializing(false)}
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {return null}

 

  // if(user) {
  //   const logOut = () => {
  //     auth()
  //       .signOut()
  //       .then(()=> console.log("user signed out!"))
  //   }
  //   return (
  //     <>
  //       <Text style={{margin: 40, fontSize: 50}}>Welcome</Text>
  //       <Text onPress={logOut} style={{margin: 40, fontSize: 30}}>Log Out</Text>
  //     </>
  //     )
  // }
  const Tabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Tasks" component={Tasks} />
      </Tab.Navigator>
    )
  }

  if(user) {
    return(
      <Drawer.Navigator>
        <Drawer.Screen name="Tabs" component={Tabs} />
        <Drawer.Screen name="AddTask" component={AddTask} />
      </Drawer.Navigator>
    )
  }

  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Onboarding' component={Onboarding} />
        <Stack.Screen name='Signin' component={Signin} />
        <Stack.Screen name='Signup' component={Signup} />
      </Stack.Navigator>
  );
}

export default React.memo(Routes);
