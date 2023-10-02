  import { StyleSheet } from "react-native";
  import colors from "../../constants/colors";

  const styles = StyleSheet.create({
    item: {
      fontSize: 12,
      color: colors.blue,
      fontWeight: 'bold',
      padding: 8,
      paddingHorizontal: 12,
      textTransform: 'capitalize',
    },
    selectedItem: {
      color: colors.blue,
    },
    itemContainer: {
      marginRight: 8,
      marginBottom: 14,
      borderWidth: 1,
      borderColor: colors.blue,
      borderRadius: 8,
    },
    selectedItemContainer: {
      backgroundColor: colors.lightGrey,
      borderColor: colors.lightGrey,
    },
  })

  export default styles