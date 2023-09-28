import React from 'react'
import { View, Image, Text } from 'react-native'
import Button from '../../../components/Button'
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'

const AddTask = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Add Task</Text>
    </SafeAreaView>
  )
}

export default React.memo(AddTask)