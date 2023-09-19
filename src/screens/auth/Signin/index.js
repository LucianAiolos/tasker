import React from 'react'
import { Text, View } from 'react-native'
import Button from '../../../components/Button'
import styles from './styles'

const Signin = () => {
  return (
    <View style={styles.container}>
      <Button>Login</Button>
      <Text>Sign in</Text>
    </View>
  )
}

export default React.memo(Signin)