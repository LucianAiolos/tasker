import React, {useEffect, useState} from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import Title from '../../../components/Title'
import PlusIcon from '../../../components/PlusIcon'
import Header from '../../../components/Header'
import Checkbox from '../../../components/Checkbox'
import Categories from '../../../components/Categories'
import { categories } from '../../../constants/categories'
import {useSelector, useDispatch} from 'react-redux'
import { setToUpdate } from '../../../redux/tasksSlice'
import styles from './styles'

const Tasks = ({navigation}) => {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks.data)
  const [category, setCategory] = useState('all')
  const [filteredTasks, setFilteredTasks] = useState([])

  useEffect(()=> {
    if(category && category !== 'all') {
      const filtered = tasks?.filter(task => task?.category === category)
      setFilteredTasks(filtered)
    } else {
      setFilteredTasks(tasks)
    }
  }, [category, tasks])

  const onTaskUpdate = (item) => {
    console.log('TASKS')
    firestore()
      .collection('Tasks')  
      .doc(item?.uid)
      .update({
        checked: !item.checked,
      })
      .then(()=> {
        console.log('dispatching checked in TASKS')
        dispatch(setToUpdate())
      })
  }

  // useEffect(()=> {

  // }, [tasks])

  const deleteTask = (uid) => {
    firestore()
      .collection('Tasks')
      .doc(uid)
      .delete()
      .then(() => {
        console.log('Task deleted!');
        dispatch(setToUpdate())
      });
  }

  const renderTask = ({item}) => {
    return (
      <View style={styles.row}>
        <Checkbox checked={item.checked} onPress={()=> onTaskUpdate(item)} />
        <Text style={[styles.taskText, item.checked? styles.checked : {}]}>{item.title}</Text>
        <Text style={styles.delete} onPress={() => deleteTask(item.uid)}>X</Text>
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
              categories={[{label: 'All', value: 'all' }, ...categories]}   
              selectedCategory={category} 
              onCategoryPress={setCategory}
            />
          </>
        }
        data={filteredTasks} 
        renderItem={renderTask}
        keyExtractor={(item => String(item?.uid))}
      />
      <PlusIcon />
    </SafeAreaView> 
  )
}

export default React.memo(Tasks) 