import { StyleSheet, Dimensions } from "react-native";
import colors from '../../../constants/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    flex: 1,
  },
  content: {
    padding: 46,
    paddingTop: 0,
    backgroundColor: colors.white,
    // borderTopRightRadius: 30,
    // borderTopLeftRadius: 30,
  },
  title: {
    color: colors.black,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
  },
  subtitle: {
    fontSize: 15,
    marginVertical: 16,
    color: colors.grey,
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    height: 40,
    width: '100%',
    backgroundColor: colors.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  }
})

export default styles