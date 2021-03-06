import React from "react";
import { SafeAreaView, View, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../../utils/themes/colors";
import { styles } from "./styles";
import PropTypes from "prop-types";

const Navbar = ({ navigation, home = false }) => {
  return (
    <SafeAreaView style={styles.container}>
      {home ? (
        <View style={styles.iconContanier}>
          <Image
            style={styles.logo}
            source={require("../../Assets/png/decagonLogo.png")}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Search");
            }}
          >
            <Icon name={"search-outline"} size={30} color={Colors.white} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Settings");
            }}
          >
            <Icon name={"settings"} size={30} color={Colors.white} />
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <View style={styles.iconContanier}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon name={"chevron-back"} size={30} color={Colors.white} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Settings");
              }}
            >
              <Icon name={"settings"} size={30} color={Colors.white} />
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Navbar;
