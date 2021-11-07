import { StyleSheet } from "react-native";
import Colors from "../../utils/themes/colors";

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.black,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderRadius: 15,
    borderWidth: 0.5,
    padding: 8,
    backgroundColor: Colors.white,
  },
  form: {
    flexBasis: "auto",
    flexGrow: 1,
  },
  searchItems: {
    padding: 5,
  },

  noResults: {
    paddingTop: 20,
  },
  empty: {
    padding: 5,
    color:Colors.primary
  },
});
