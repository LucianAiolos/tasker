import React from "react";
import { useNavigation } from "@react-navigation/native";
import {View, Text, Image, Pressable} from 'react-native'
import styles from './styles'

const Header = ({title}) => {
  const navigation = useNavigation()

  const openDrawer = () => {
    navigation.openDrawer()
  }
  
  return (
    <View style={styles.container}>
      <Pressable onPress={openDrawer} hitSlop={8}>
        <Image style={styles.icon} source={require('../../assets/menu.png')} />
      </Pressable>
      <Text>{title}</Text>
      <View  />
    </View>
  )
}

export default React.memo(Header)