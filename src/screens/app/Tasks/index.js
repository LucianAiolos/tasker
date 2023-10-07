import React from 'react'
import { FlatList, Text, View } from 'react-native'
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import Title from '../../../components/Title'
import PlusIcon from '../../../components/PlusIcon'
import Header from '../../../components/Header'
import {useSelector} from 'react-redux'
import Checkbox from '../../../components/Checkbox'

const Tasks = ({navigation}) => {
  const tasks = useSelector(state => state.tasks.data)

  const renderTask = ({item}) => {
    return (
      <View style={styles.row}>
        <Checkbox checked={item.checked} />
        <Text style={styles.taskText}>{item.title}</Text>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Tasks"/>
      <FlatList 
        ListHeaderComponent={<Title type='thin'>To Do Tasks</Title>}
        data={tasks} 
        renderItem={renderTask}
        keyExtractor={(item => String(item?.uid))}
      />
      <PlusIcon />
    </SafeAreaView> 
  )
}

export default React.memo(Tasks) 