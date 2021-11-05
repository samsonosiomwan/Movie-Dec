import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../utils/themes/colors";

const height = Dimensions.get('screen').height

export const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.black,
  },
  container: {
    padding: 5,
    position: "relative",
    alignItems: "center",
    // justifyContent:"flex-start",
    height: 200,
    // backgroundColor: Colors.black,
  },
  image: {
    height: height / 2.5,
  },
  overview: {
    padding: 15,
    color: Colors.white,
  },
  popularity: {
    fontWeight: "bold",
    color: Colors.white,
  },
  addToFavorite: {
    borderWidth:1,
    borderRadius:4,
    borderColor: Colors.primary,
    fontWeight: "bold",
    color: Colors.primary,
    marginTop:"2%",
    padding:2
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 10,
    color: Colors.white,
  },
  languageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  language: {
    marginRight: 10,
    color: Colors.white,
  },
  playbutton: {
    position: "absolute",
    top: -30,
  },
  videoModal: {
    flex: 1,
    //   justifyContent:"center",
    //   alignItems:"center"
    marginTop: "20%",
    height: "100%",
    backgroundColor: Colors.black,
  },
});
