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
import { setTasks, setToUpdate } from '../../../redux/tasksSlice';

const Home = ({navigation}) => {
  const user = useSelector(state => state.user.data)
  const tasks = useSelector(state => state.tasks.data)
  const toUpdate = useSelector(state => state.tasks.toUpdate)
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