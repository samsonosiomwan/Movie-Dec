import React from 'react'
import {  SafeAreaView, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";
import Colors from "../../utils/themes/colors";
import {styles} from './styles'


const Navbar = ({navigation}) => {
    return (
      <SafeAreaView style={styles.container}>
       
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon name={"chevron-back"} size={40} color={Colors.white} />
            </TouchableOpacity>
          </View>
       
      </SafeAreaView>
    );
}



export default Navbar