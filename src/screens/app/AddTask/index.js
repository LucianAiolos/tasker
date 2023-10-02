import React, {useState} from 'react'
import styles from './styles'
import { Pressable, Text, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Title from '../../../components/Title'
import Input from '../../../components/Input'
import Categories from '../../../components/Categories'
import {categories} from '../../../constants/categories'
import DateInput from '../../../components/DateInput'

const AddTask = ({navigation}) => {
  const [category, setCategory] = useState()
  const [deadline, setDeadline] = useState(new Date())

  const handleBack = () => {
    navigation.goBack()
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
      <Input outlined placeholder="Add task here " />
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
    </SafeAreaView>
  )
}

export default React.memo(AddTask)

