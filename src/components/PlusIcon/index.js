import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, Pressable} from 'react-native'
import styles from './styles'

const PlusIcon = () => {
  const navigation = useNavigation()

  const addTask = () => {
    navigation.navigate('AddTask')
  }
  
  return (
      <Pressable style={styles.container} onPress={addTask} hitSlop={8}>
        <Text style={styles.plus}>+</Text>
      </Pressable>
  )
}

export default React.memo(PlusIcon)