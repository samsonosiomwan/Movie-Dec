import { StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get('screen').height

export const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: "relative",
    alignItems: "center",
    // justifyContent:"flex-start",
    height: 200,
  },
  image: {
    height: height / 2.5,
  },
  overview: {
    padding: 15,
  },
  popularity: {
    fontWeight: "bold",
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 10,
  },
  languageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  language: {
    marginRight: 10,
  },
  playbutton: {
    position: "absolute",
    top: -30,
  },
  videoModal:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
  }
});
