import React, {useState} from 'react'
import { Text, SafeAreaView, View } from 'react-native'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import Title from '../../../components/Title'
import Checkbox from '../../../components/Checkbox'
import styles from './styles'

const Signup = ({navigation}) => {
  const [agreed, setAgreed] = useState(false)

  const onCheckboxPress = () => {
    setAgreed(value => !value)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Title>Join the hub!</Title>
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Input placeholder="Confirm Password" />
      <View style={styles.row}>
        <Checkbox checked={agreed} onPress={onCheckboxPress}/>
        <Text style={styles.agreeText}>
          I agree to
          <Text style={styles.link}> Terms and Conditions</Text>
          {' '}and
          <Text style={styles.link}> Privacy Policy</Text>
        </Text>

      </View>
      <Button type={'blue'}>Create new account</Button>
      <Text style={styles.footerText}>Not Registered?
        <Text 
          onPress={()=> navigation.navigate('Signin')} 
          style={styles.footerLink}
        >
          Sign In!
        </Text>
      </Text>
    </SafeAreaView>
  )
}

export default React.memo(Signup)