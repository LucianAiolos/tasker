import React from "react";
import {TextInput} from 'react-native'
import styles from './styles'
// import { TextInput } from "react-native-gesture-handler";
import colors from "../../constants/colors";

const Input = ({outlined, ...props}) => {
  return (
    <TextInput 
      style={[styles.input, outlined ? styles.outlined : null]} 
      placeholderTextColor={colors.grey} 
      {...props} 
    />
  )
}

export default React.memo(Input)