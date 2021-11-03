import React from 'react'
import {TouchableOpacity} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import {styles} from './styles'
import Colors from "../../utils/themes/colors";


const PlayButton = ({handlePress}) => {
    return (
      <TouchableOpacity onPress={() => handlePress()} style={styles.button}>
        <Icon name="caret-forward-outline" size={30} color={Colors.white} />
      </TouchableOpacity>
    );
}

export default PlayButton