import React from "react";
import Home from "./src/screens/Home/Home";
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from './src/screens/Detail'
const Stack = createNativeStackNavigator();
const _APP = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default _APP;
