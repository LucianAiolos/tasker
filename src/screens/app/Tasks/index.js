import React from 'react'
import { Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import Title from '../../../components/Title'
import PlusIcon from '../../../components/PlusIcon'
import Header from '../../../components/Header'

const Tasks = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Tasks"/>
      <ScrollView >
      <Title type='thin'>To Do Tasks</Title>
      </ScrollView>

      <PlusIcon />
    </SafeAreaView> 
  )
}

export default React.memo(Tasks) 