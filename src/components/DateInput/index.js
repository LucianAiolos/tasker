import React, {useState} from "react";
import {Image, Text, TextInput, TouchableOpacity, } from 'react-native'
import styles from './styles'
import DatePicker from 'react-native-date-picker'
import moment from "moment";

const DateInput = ({value, onChange, ...props}) => {
  const [open, setOpen] = useState(false)

  const onDateOpen = () => {
    setOpen(true)
  }

  return (
    <>
      <TouchableOpacity onPress={onDateOpen} style={styles.outlined}>
        <Image 
          reseizeMode=''
          source={require('../../assets/calendar.png')} 
          style={styles.icon}  
          />
        <Text style={styles.text}>{moment(value).format('L') || "Select Date..."}</Text>
      </TouchableOpacity>
      <DatePicker
        mode='date'
        modal
        open={open}
        date={value}
        onConfirm={date => {
          setOpen(false)
          onChange(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </>
  )
}

export default React.memo(DateInput)