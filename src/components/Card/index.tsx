import React from 'react'
import {TouchableOpacity, Image, Text} from 'react-native'
import {styles} from './styles'
import {IMAGE_URI} from '../../utils/envConstants'
import {imagePlaceHolder} from '../../utils/ImagePlaceHolder'

interface Props {
  item: Record<string, any>;
  navigation:any
}

const Card = ({ navigation,item }: Props) => {
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate("Detail",{movieId: item.id})}} style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={
          item.poster_path
            ? { uri: IMAGE_URI + item.poster_path }
            : imagePlaceHolder
        }
      />
      {!item.poster_path && <Text style={styles.movieName}>{item.title}</Text>}
    </TouchableOpacity>
  );
};

export default Card