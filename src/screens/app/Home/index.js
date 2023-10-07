import React, {useEffect} from 'react'
import firestore from '@react-native-firebase/firestore';
import { Text } from 'react-native'
import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header'
import PlusIcon from '../../../components/PlusIcon'
import Title from '../../../components/Title'
import { useSelector, useDispatch } from 'react-redux'
import { setTasks } from '../../../redux/tasksSlice';

const Home = ({navigation}) => {
  const user = useSelector(state => state.user.data)
  const tasks = useSelector(state => state.tasks.data)
  const dispatch = useDispatch()

  useEffect(() => {
    firestore()
      .collection('Tasks')
      .where('userId', '==', user?.uid)
      .get()
      .then(querySnapshot => {
        const tasksList = []

        querySnapshot.forEach(documentSnapshot => {
          console.log('Task ID: ', documentSnapshot.id, documentSnapshot.data());
          tasksList.push({
            uid: documentSnapshot.id, 
            ...(documentSnapshot.data() || {}),
          })
        });
        dispatch(setTasks(tasksList))
      });
  }, [user, dispatch]);
  
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home"/>

      <ScrollView >
        <Title type='thin'>Daily Tasks</Title>
        
      </ScrollView>

      <PlusIcon />
    </SafeAreaView>
  )
}

export default React.memo(Home)