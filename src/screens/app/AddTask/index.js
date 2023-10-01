import React from 'react'
import { Pressable, Text, Image } from 'react-native'
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import Title from '../../../components/Title'
import Input from '../../../components/Input'

const AddTask = ({navigation}) => {
  const handleBack = () => {
    navigation.goBack()
  }
  return (
    <SafeAreaView style={styles.container}>
      <Pressable hitSlop={8} style={styles.backContainer} onPress={handleBack}>
        <Image 
          style={styles.backIcon}  
          source={require('../../../assets/back-arrow.png')} 
        />
      </Pressable>

      <Title type='thin'>Add New Task</Title>

      <Text style={styles.label}>Describge task</Text>
      <Input outlined placeholder="Add task here " />
    </SafeAreaView>
  )
}

export default React.memo(AddTask)