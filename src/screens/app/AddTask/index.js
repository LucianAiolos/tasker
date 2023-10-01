import React from 'react'
import styles from './styles'
import { Pressable, Text, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
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
      <ScrollView
        horizontal={true}
        style={{height: 100}}
      >
        <Text style={{backgroundColor: 'green', height: 50, width: 100, marginHorizontal: 10}}>OPTIMUS</Text>
        <Text style={{backgroundColor: 'green', height: 50, width: 100, marginHorizontal: 10}}>OPTIMUS</Text>
        <Text style={{backgroundColor: 'green', height: 50, width: 100, marginHorizontal: 10}}>OPTIMUS</Text>
        <Text style={{backgroundColor: 'green', height: 50, width: 100, marginHorizontal: 10}}>OPTIMUS</Text>
        <Text style={{backgroundColor: 'green', height: 50, width: 100, marginHorizontal: 10}}>OPTIMUS</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default React.memo(AddTask)