import React, {useEffect, useState} from 'react'
import firestore from '@react-native-firebase/firestore';
import { Text, ScrollView, View, SafeAreaView } from 'react-native'
import styles from './styles'
import Header from '../../../components/Header'
import PlusIcon from '../../../components/PlusIcon'
import Title from '../../../components/Title'
import { useSelector, useDispatch } from 'react-redux'
import { setTasks, setToUpdate } from '../../../redux/tasksSlice';
import StatusCard from '../../../components/StatusCard';
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  const user = useSelector(state => state.user.data)
  const tasks = useSelector(state => state.tasks.data)
  const toUpdate = useSelector(state => state.tasks.toUpdate)
  const [counts, setCounts] = useState({})
  const dispatch = useDispatch()
  console.log('toUpdate HOME', toUpdate)

  useEffect(() => {
    firestore()
      .collection('Tasks')
      .where('userId', '==', user?.uid)
      .get()
      .then(querySnapshot => {
        const tasksList = []

        querySnapshot.forEach(documentSnapshot => {
          tasksList.push({
            uid: documentSnapshot.id, 
            ...(documentSnapshot.data() || {}),
          })
        });
        dispatch(setTasks(tasksList))
      });
  }, [user, dispatch, toUpdate]);

  useEffect (()=>  {
    if(tasks?.length) {
      console.log('tasks :>> IN HOME', tasks)
      const highPriority = tasks?.filter(
        task => task?.category === 'urgent' 
        || 
        task?.category === 'important'
      )
      const today = moment(new Date()).format('YYYY-MM-DD')
      const dueDeadline = tasks?.filter(task => {
        const deadline = task?.deadline?.seconds * 1000 // converting from milliseconds
        const deadlineFormatted = moment(deadline).format('YYYY-MM-DD')
        return moment(deadlineFormatted).isBefore(today)
      })
      const quickWin = tasks?.filter(
        task => task?.category === 'quick_task' 
      )

      setCounts({
        highPriority: highPriority?.length,
        dueDeadline: dueDeadline?.length,
        quickWin: quickWin?.length,
      })
    }
  },[tasks])
  
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home"/>

      <ScrollView >
        <Title type='thin'>Daily Tasks</Title>
        
        <View style={styles.row}>
          <StatusCard label="High Priority" count={counts?.highPriority} type='error' />
          <StatusCard label="Due Deadline" count={counts?.dueDeadline} />
          <StatusCard label="Quick Win" count={counts?.quickWin} />
        </View>

        <TouchableOpacity style={styles.box} onPress={()=> navigation.navigate('Tasks')} >
          <Text style={styles.title}>Check all my tasks</Text>
          <Text style={styles.subtitle}>
            See all tasks and filter them by categories you have selected
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <PlusIcon />
    </SafeAreaView>
  )
}

export default React.memo(Home)