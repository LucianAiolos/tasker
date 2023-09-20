import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import Title from '../../../components/Title'
import styles from './styles'

const Signup = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Title>Join the hub!</Title>
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Input placeholder="Confirm Password" />
      <Button type={'blue'}>Create new account</Button>
      <Text style={styles.footerText}>Not Registered?
        <Text 
          onPress={()=> navigation.navigate('Signin')} 
          style={styles.footerLink}
          >
          {' '}
          Sign In!
        </Text>
      </Text>
    </SafeAreaView>
  )
}

export default React.memo(Signup)