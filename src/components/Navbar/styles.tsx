import { StyleSheet } from "react-native";
import Colors from "../../utils/themes/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
  },
  iconContanier: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
  logo: {
    width: 30,
    height: 30,
    // position: "absolute",
  },
});
