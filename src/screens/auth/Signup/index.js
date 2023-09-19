import React from 'react'
import { Text, View } from 'react-native'
import Button from '../../../components/Button'
import styles from './styles'

const Signup = () => {
  return (
    <View style={styles.container}>
      <Button>Login</Button>
      <Text>sign up</Text>
    </View>
  )
}

export default React.memo(Signup)