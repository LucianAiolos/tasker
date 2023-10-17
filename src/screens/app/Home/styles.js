import { StyleSheet, Dimensions } from "react-native";
import colors from '../../../constants/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
  },
  title: {
    color: colors.purple,
    fontSize: 16,
  },
  subtitle: {
    fontSize: 12,
    marginTop: 8,
    color: 'rgba(64, 53,114,0.7)',
  },
  box: {
    backgroundColor: colors.lightGrey,
    borderRadius: 15,
    padding: 22,
    marginHorizontal: 24,
    marginVertical: 72,
  }
})

export default styles