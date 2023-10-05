import React, {useState} from 'react'
import { Text, SafeAreaView, View, Alert } from 'react-native'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import Title from '../../../components/Title'
import Checkbox from '../../../components/Checkbox'
import styles from './styles'
import auth from '@react-native-firebase/auth'
import { ScrollView } from 'react-native-gesture-handler'

const Signup = ({navigation}) => {
  const [agreed, setAgreed] = useState(false)
  const [values, setValues] = useState({

  })

  const onChange = (value, key) => {
    setValues(vals => ({
      ...vals,
      [key] : value,
    }))
  }

  const onCheckboxPress = () => {
    setAgreed(value => !value)
  }

  const onSubmit = () => {
    //Validate inputs before creating user.
    const email = values.email
    const password = values.password

    if(!values.first_name || !values.last_name){
      Alert.alert('Please enter first name and last name')
      return
    }
    if(password !== values.confirm_password) {
      Alert.alert('Passwords do not match')
      return
    }
    if(!agreed) {
      Alert.alert('You must agree to the terms')
      return
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        auth().currentUser.updateProfile({displayName: `${values.first_name} ${values.last_name}`})
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        console.error(error);
      });
  }

  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} />
        <Title>Join the hub!</Title>
        <Input 
          onChangeText={(val) => onChange(val, 'first_name')} 
          placeholder="First Name" 
        />
        <Input 
          onChangeText={(val) => onChange(val, 'last_name')} 
          placeholder="Last Name" 
        />
        <Input 
          onChangeText={(val) => onChange(val, 'email')} 
          keyboardType='email-address' 
          placeholder="Email" 
        />
        <Input 
          onChangeText={(val) => onChange(val, 'password')} 
          secureTextEntry 
          placeholder="Password" 
        />
        <Input 
          onChangeText={(val) => onChange(val, 'confirm_password')} 
          secureTextEntry 
          placeholder="Confirm Password" />
        <View style={styles.row}>
          <Checkbox checked={agreed} onPress={onCheckboxPress}/>
          <Text style={styles.agreeText}>
            I agree to
            <Text style={styles.link}> Terms and Conditions</Text>
            {' '}and
            <Text style={styles.link}> Privacy Policy</Text>
          </Text>

        </View>
        <Button 
          type={'blue'}
          onPress={onSubmit}
        >Create new account</Button>
        <Text style={styles.footerText}>Already Registered?
          <Text 
            onPress={()=> navigation.navigate('Signin')} 
            style={styles.footerLink}
          >
            {' '}Sign In!
          </Text>
        </Text>
      <ScrollView />
    </SafeAreaView>
  )
}

export default React.memo(Signup)