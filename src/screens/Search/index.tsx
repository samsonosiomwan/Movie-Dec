import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import searchMovieTv from "../../services/api/movies/searchMovies";

import { styles } from "./styles";

import Icon from "react-native-vector-icons/Ionicons";
import Card from "../../components/Card";

const Search = ({ navigation }) => {
  const [text, onChangeText] = useState("");
  const [searchResults, setSearchResults] = useState();

  const [error, setError] = useState(null);

  const handlePress = (query: string) => {
    Promise.all([searchMovieTv(query, "movie"), searchMovieTv(query, "tv")])
      .then(([movies, tv]) => {
        const data: any = [...movies, ...tv];
        setSearchResults(data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder={"Search Movie or TV Show"}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            handlePress(text);
          }}
        >
          <Icon name={"search-outline"} size={25} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchItems}>
        {searchResults && [searchResults].length > 0 && (
          <FlatList
            numColumns={3}
            data={searchResults}
            renderItem={({ item }) => (
              <Card navigation={navigation} item={item} />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
        {/* When searched but no results */}
        {searchResults && [searchResults].length == 0 && (
          <View style={styles.noResults}>
            <Text style={styles.empty}>No results matching your criteria.</Text>
            <Text style={styles.empty}>Try different keywords.</Text>
          </View>
        )}

        {/* When nothing is searched */}
        {!searchResults && (
          <View style={styles.empty}>
            <Text style={styles.empty}>Type something to start searching</Text>
          </View>
        )}

        {error && (
          <Text style={styles.empty}>{JSON.stringify(error.message)}</Text>
        )}
      </View>
    </SafeAreaView>
  );
};
export default Search;
