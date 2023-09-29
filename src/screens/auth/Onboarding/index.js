import React from 'react'
import { View, Image, Text } from 'react-native'
import Button from '../../../components/Button'
import styles from './styles'

const Onboarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Image 
          style={styles.image}
          source={require('../../../assets/onboarding.png')}
        />
        <View style={styles.footer}/>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Best Task management app</Text>
        <Text style={styles.subtitle}>
          Get organized by sorting out all your tasks and boost your productivity.
        </Text>
        <Button onPress={()=> navigation.navigate('Signin')} type={'blue'}>Log In</Button>
        <Button onPress={()=> navigation.navigate('Signup')}>Get Started</Button>
      </View>
    </View>
  )
}

export default React.memo(Onboarding)