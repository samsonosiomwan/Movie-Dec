import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";
import { styles } from "./styles";
import { IMAGE_URI } from "../../utils/envConstants";
import { imagePlaceHolder } from "../../utils/ImagePlaceHolder";
import { useRecoilValue } from "recoil";
import { offlineState } from "../../recoilStore/Atoms";

interface Props {
  item: Record<string, any>;
  navigation: any;
}

const Card = ({ navigation, item }: Props) => {
  const offline = useRecoilValue(offlineState);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Detail", { movieId: item.id });
      }}
      style={offline ? styles.container : styles.offlineContainer}
    >
      <Image
        resizeMode="cover"
        style={offline ? styles.image : styles.offlineImage}
        source={
          item.poster_path
            ? { uri: IMAGE_URI + item.poster_path || item.backdrop_path }
            : imagePlaceHolder
        }
      />
      {!item.poster_path && <Text style={styles.movieName}>{item.title}</Text>}
    </TouchableOpacity>
  );
};

export default Card;
