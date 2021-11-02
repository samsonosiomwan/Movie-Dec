import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";

interface Props {
  errorText1: string;
  errorText2: string;
  errorText3: string;
}

const Error = ({ erroText1, erroText2, errorText3 }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{erroText1}</Text>
      <Text style={styles.text}>{erroText2}</Text>
      <Text style={styles.text}>{errorText3}</Text>
    </View>
  );
};

export default Error;
