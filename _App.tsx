import React from "react";
import Home from "./src/screens/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "./src/screens/Detail";
import Navbar from "./src/components/Navbar";
const Stack = createNativeStackNavigator();
const _APP = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="."
          component={Home}
          options={{
            headerTransparent: true,
            // header: ({ navigation }) => (
            //   <Navbar navigation={navigation} main={true} />
            // ),
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerTransparent: true,
            header: ({ navigation }) => <Navbar navigation={navigation} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default _APP;
