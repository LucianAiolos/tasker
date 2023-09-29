import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../../../components/Button'
import Header from '../../../components/Header'

const Home = ({navigation}) => {
  console.log('home')
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home"/>
    </SafeAreaView>
  )
}

export default React.memo(Home)