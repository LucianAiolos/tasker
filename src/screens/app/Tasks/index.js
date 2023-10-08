import React, {useEffect, useState} from 'react'
import { FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Title from '../../../components/Title'
import PlusIcon from '../../../components/PlusIcon'
import Header from '../../../components/Header'
import Checkbox from '../../../components/Checkbox'
import Categories from '../../../components/Categories'
import { categories } from '../../../constants/categories'
import {useSelector, useDispatch} from 'react-redux'
import styles from './styles'

const Tasks = ({navigation}) => {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks.data)
  const [category, setCategory] = useState()
  const [filteredTasks, setFilteredTasks] = useState([])

  useEffect(()=> {
    if(category) {
      const filtered = tasks?.filter(task => task?.category === category)
      setFilteredTasks(filtered)
    } else {
      setFilteredTasks(tasks)
    }
  }, [category, tasks])

  const onTaskUpdate = (item) => {
    firestore()
      .collection('Tasks')
      .doc(item?.uid)
      .update({
        checked: item?.checked,
      })
      .then(()=> {
        dispatch(setToUpdate())
      })
  }

  const renderTask = ({item}) => {
    return (
      <View style={styles.row}>
        <Checkbox checked={item.checked} onPress={()=> onTaskUpdate(item)} />
        <Text style={[styles.taskText, item.checked? styles.checked : {}]}>{item.title}    {item.category}</Text>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Tasks"/>
      <FlatList 
        ListHeaderComponent={
          <>
            <Title type='thin'>To Do Tasks</Title>
            <Categories 
              categories={categories}   
              selectedCategory={category} 
              onCategoryPress={setCategory}
            />
          </>
        }
        data={tasks} 
        renderItem={renderTask}
        keyExtractor={(item => String(item?.uid))}
      />
      <PlusIcon />
    </SafeAreaView> 
  )
}

export default React.memo(Tasks) 