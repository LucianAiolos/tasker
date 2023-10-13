import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, Pressable } from 'react-native'
import getStyles from './styles'

const StatusCard = ({label, count, type}) => {
  const navigation = useNavigation()
  const styles = getStyles(type)

  const addTask = () => {
    navigation.navigate('AddTask')
  }
  
  return (
      <Pressable style={styles.container} hitSlop={8}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.count}>{count}</Text>
      </Pressable>
  )
}

export default React.memo(StatusCard)