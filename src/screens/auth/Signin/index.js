import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import Button from '../../../components/Button'
import styles from './styles'
import Title from '../../../components/Title'
import Input from '../../../components/Input'

const Signin = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Title>Welcome back!</Title>
      <Button>Login</Button>
      <Input placeholder="email" />
      <Input placeholder="password" />
      <Text style={styles.footerText}>Not Registered?
        <Text 
          onPress={()=> navigation.navigate('Signup')} 
          style={styles.footerLink}
        >
          Sign Up!
        </Text>
      </Text>
    </SafeAreaView>
  )
}

export default React.memo(Signin)