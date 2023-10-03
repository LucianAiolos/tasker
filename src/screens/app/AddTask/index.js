import React, {useState} from 'react'
import styles from './styles'
import { Pressable, Text, Image, Alert } from 'react-native'
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

const AddTask = ({navigation}) => {
  const [category, setCategory] = useState()
  const [title, setTitle] = useState()
  const [deadline, setDeadline] = useState(new Date())

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
    firestore()
      .collection('Tasks')
      .doc('ABC')
      .set({
        title,
        deadline,
        category,
      })
      .then(() => {
        console.log('Task added!');
      });
  }

  console.log(title, moment(deadline).isBefore(new Date()))

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

      <Button 
        style={styles.button} 
        type="blue" 
        onPress={onSubmit}
      >
        Add
      </Button>
    </SafeAreaView>
  )
}

export default React.memo(AddTask)

