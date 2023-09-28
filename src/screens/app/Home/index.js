import React from 'react'
import { View, Image, Text } from 'react-native'
import Button from '../../../components/Button'
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = ({navigation}) => {
  console.log('home')
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{margin: 40, fontSize: 50}}>Home</Text>
    </SafeAreaView>
  )
}

export default React.memo(Home)