import React from 'react'
import {TouchableOpacity} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import {styles} from './styles'

const PlayButton = ({handlePress}) => {
    return (
      <TouchableOpacity onPress={()=>handlePress()} style={styles.button}>
        <Icon name="caret-forward-outline" size={30} color="white" />
      </TouchableOpacity>
    );
}

export default PlayButton