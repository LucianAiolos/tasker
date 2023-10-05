import React from 'react'
import { Text } from 'react-native'
import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header'
import PlusIcon from '../../../components/PlusIcon'
import Title from '../../../components/Title'
import { useSelector } from 'react-redux'

const Home = ({navigation}) => {
  const user = useSelector(state => state.user.data)
  
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home"/>

      <ScrollView >
        <Title type='thin'>Daily Tasks</Title>
        
      </ScrollView>

      <PlusIcon />
    </SafeAreaView>
  )
}

export default React.memo(Home)