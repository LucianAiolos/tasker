import { StyleSheet, Dimensions } from "react-native";
import colors from '../../../constants/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
    marginVertical: 8,
  },
  taskText: {
    color: colors.black,  
    marginLeft: 8,
  },
  checked: {
    textDecorationLine: 'line-through',
  },
  delete: {
    backgroundColor: colors.red,
    width: 18,
    height: 18,
    color: colors.white,
    borderRadius: 15,
    textAlign: 'center',
    fontWeight: '700',
  },
})

export default styles