import { StyleSheet } from "react-native";
import Colors from "../../utils/themes/colors";

export const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sliderStyle: { height: 0 },
  favMovieText: {
    color: Colors.white,
    paddingLeft: "22%",
    paddingRight: "24%",
    paddingTop: "2%",
  },
  noFavMsgContainer: {
    //  justifyContent: "center",
    // alignItems: "center",
  },
  favMovieHeading: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
    padding: "2%",
    color: Colors.white,
  },
});
