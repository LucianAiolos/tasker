import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    // flex: 1,  this was making the flatlist super tall
  },
  backContainer: {
    padding: 24,
  },
  backIcon: {
    width: 32,
    height: 32,

  },
  label: {
    fontSize: 12,
    color: colors.black,
    marginHorizontal: 24,
    fontWeight: '500',
    marginTop: 12,
  },
})

export default styles