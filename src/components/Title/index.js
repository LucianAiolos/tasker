import React from "react";
import { Text } from 'react-native'
import styles from './styles'

const Title = ({ type, children}) => {
  return (
    <Text style={[styles.title, type === 'thin' ? styles.thin : null]}>{children}</Text>
  )
}

export default React.memo(Title)