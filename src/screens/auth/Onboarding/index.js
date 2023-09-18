import React from 'react'
const { View, Image } = require("react-native")
import styles from './styles'

const Onboarding = () => {
  return (
    <View>
      <Image 
        style={styles.image}
        source={require('../../../assets/onboarding.png')}
      />

      <View>
        <Text style={styles.title}>Best Task management app</Text>
        <Text style={styles.subtitle}>
          Get organized by sorting out all your tasks and boost your productivity.
        </Text>
      </View>
    </View>
  )
}

export default React.memo(Onboarding)