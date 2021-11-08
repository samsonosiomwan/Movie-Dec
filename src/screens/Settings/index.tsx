import React from "react";
import {
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  View,
  Text,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./styles";
import { favoriteMovieState } from "../../recoilStore/Atoms";
import { useRecoilState } from "recoil";

const Settings = () => {
  const [favoritMovie, setFavoriteMovie] = useRecoilState(favoriteMovieState);
  const clearAllFavoriteMovie = () => {
    setFavoriteMovie([]);
    AsyncStorage.removeItem("key").then((value) => {
      alert("favorite movies cleared");
    });
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={clearAllFavoriteMovie}
            style={styles.clearFavorite}
          >
            <Text> clear favorites</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
