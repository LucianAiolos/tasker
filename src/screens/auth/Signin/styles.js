import { StyleSheet } from "react-native";
import colors from '../../../constants/colors'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: 24,
  },
  footerText: {
    color: colors.grey,
    fontSize: 15,
    textAlign: 'center',
    marginTop: 28,
  },
  footerLink: {
    // paddingLeft: 4,
    color: colors.purple,
    fontWeight: 'bold',
  }
})

export default styles