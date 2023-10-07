import React, {useState} from 'react'
import styles from './styles'
import { Pressable, Text, Image, Alert, ActivityIndicator } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Title from '../../../components/Title'
import Input from '../../../components/Input'
import Categories from '../../../components/Categories'
import {categories} from '../../../constants/categories'
import DateInput from '../../../components/DateInput'
import Button from '../../../components/Button'
import moment from 'moment'
import firestore from '@react-native-firebase/firestore';
import {useSelector, useDispatch} from 'react-redux'

const AddTask = ({navigation}) => {
  const user = useSelector(state => state.user.data)
  const [category, setCategory] = useState()
  const [title, setTitle] = useState()
  const [deadline, setDeadline] = useState(new Date())
  const [loading, setLoading] = useState(false)
  
  const handleBack = () => {
    navigation.goBack()
  }
  
  const onSubmit = () => {
    const today = moment(new Date()).format('YYYY-MM-DD')
    const deadlineFormated = moment(deadline).format('YYYY-MM-DD')
    
    if(!title) {
      Alert.alert("Please enter a task title!")
      return
    } 
    if(moment(deadlineFormated).isBefore(today)) {
      Alert.alert("Please enter future date!")
      return
    } 
    setLoading(true)
    firestore()
      .collection('Tasks')
      .add({
        title,
        deadline,
        category,
        checked: false,
        userId: user.uid,
      })
      .then(() => {
        setLoading(false)
        console.log('Task added!');
        navigation.navigate('Tasks')
        setTitle('')
        setDeadline(new Date())
        setCategory(null)
      })
      .catch(e => {
        console.log('Error adding task')
        setLoading(false)
        Alert.alert(e.message)
      })
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Pressable hitSlop={8} style={styles.backContainer} onPress={handleBack}>
        <Image 
          style={styles.backIcon}  
          source={require('../../../assets/back-arrow.png')} 
        />
      </Pressable>

      <Title type='thin'>Add New Task</Title>

      <Text style={styles.label}>Describe Task</Text>
      <Input 
        value={title}
        onChangeText={setTitle}
        outlined 
        placeholder="What to do? " 
      />
      <ScrollView>
        <Text style={styles.label}>Type</Text>
        <Categories 
          categories={categories}   
          selectedCategory={category} 
          onCategoryPress={setCategory}
        />
      </ScrollView>
      <Text style={styles.label}>Deadline</Text>
      <DateInput value={deadline} onChange={setDeadline} />
      {loading ? (
        <ActivityIndicator  />
      ) : (
        <Button 
          style={styles.button} 
          type="blue" 
          onPress={onSubmit}
        >
          Add Task
        </Button>
      )}      
    </SafeAreaView>
  )
}

export default React.memo(AddTask)

