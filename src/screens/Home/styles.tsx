    // import { StyleSheet } from "react-native";
    // import Colors from "../../utils/themes/colors";

    // export const styles = StyleSheet.create({
    //   container: {
    //     backgroundColor: Colors.black,
    //   },
    //   offlineContainer: {
    //     backgroundColor: Colors.black,
    //     paddingTop:"10%"
    //   },
    // });

        import { StyleSheet } from "react-native";
        import Colors from "../../utils/themes/colors";

        export const styles = StyleSheet.create({
          container: {
            backgroundColor: Colors.black,
          },
          offlineContainer: {
            backgroundColor: Colors.black,
            // paddingTop:"10%"
          },
          favMovieText: {
            color: Colors.white,
            padding: "2%",
          },
          favMovieHeading: {
            fontSize: 20,
            fontWeight: "bold",
            textTransform: "capitalize",
            padding: "2%",
            color: Colors.white,
          },
        });