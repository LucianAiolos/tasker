import React from 'react'
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {StyleSheet, Text, Linking} from 'react-native'
import colors from '../../constants/colors';
import auth from '@react-native-firebase/auth';

function DrawerContent(props) {
  const url1 = 'https://www.yonex.com/astrox-88-d-pro'
  const url2 = 'https://www.yonex.com/badminton/racquets/astrox/ax100zz'
  const {navigation} = props
  
  const logout = () => {
    auth()
      .signOut()
      .then(()=> console.log('loged out!'))
  }

  return (
    <DrawerContentScrollView {...props}>
      <Text style={styles.link} onPress={()=> navigation.navigate('Home')}>Home</Text>
      <Text style={styles.link} onPress={()=> navigation.navigate('Tasks')}>Tasks</Text>
      <Text style={styles.link} onPress={()=> Linking.openURL(url1)}>Privacy Policy</Text>
      <Text style={styles.link} onPress={()=> Linking.openURL(url2)}>Terms & Conditions</Text>
      <Text style={styles.link} onPress={logout}>LogOut</Text>
    </DrawerContentScrollView>
  );
}


const styles = StyleSheet.create({
  link: {
    color: colors.black,
    fontWeight: '500',
    fontSize: 13,
    margin: 8,
    marginHorizontal: 16,
  }
})
export default React.memo(DrawerContent)