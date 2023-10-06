/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Image, StyleSheet } from 'react-native';
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerContent from './components/DrawerContent/index'
import Onboarding from './screens/auth/Onboarding';
import Home from './screens/app/Home'
import Tasks from './screens/app/Tasks';
import AddTask from './screens/app/AddTask';
import Signin from './screens/auth/Signin';
import Signup from './screens/auth/Signup';
import auth from '@react-native-firebase/auth';
import { setUser } from './redux/userSlice';

const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function Routes() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.data)
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(user) {
    console.log('setting user ROUTES', user)
    dispatch (setUser(user))
    if (initializing) {setInitializing(false)}
  }

  useEffect(() => {
    console.log('subscribing ROUTES')
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {return null}

  console.log('user in routes', user)

  const Tabs = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLable: false,
          headerShown: false,
        }}>
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({focused})=> (
              <Image 
                style={styles.icon}
                source={
                  focused 
                    ? require('./assets/home-active.png') 
                    : require('./assets/home-inactive.png')
                } 
              />
            ),
          }}
        />
        <Tab.Screen 
          name="Tasks" 
          component={Tasks} 
          options={{
            tabBarIcon: ({focused})=> (
              <Image 
                style={styles.icon}
                source={
                  focused 
                    ? require('./assets/calendar-active.png') 
                    : require('./assets/calendar-inactive.png')
                } 
              />
            ),
          }}
        />
      </Tab.Navigator>
    )
  }

  if(user) {
    return(
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        drawerContent={(props) => <DrawerContent {...props}/>}
      >
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

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
  }
})

export default React.memo(Routes);
