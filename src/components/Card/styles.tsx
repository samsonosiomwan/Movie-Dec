import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: "relative",
    alignItems: "center",
    // justifyContent:"flex-start",
    height: 200,
  },
  offlineContainer: {
    marginBottom: "30%",
    position: "relative",
    alignItems: "center",
    // justifyContent:"flex-start",
    height: "10%",
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
  offlineImage: {
    height: 200,
    width: 320,
    borderRadius: 20,
  },
  movieName: {
    position: "absolute",
    width: 80,
    textAlign: "center",
    color: "white",
    top: 10,
  },
});