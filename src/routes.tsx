import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/Home";
import ResultsScreen from "./screens/Results";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "ENLIGHTEN",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Results"
          component={ResultsScreen}
          options={{
            title: "RESULTADOS",
            headerStyle: {
              backgroundColor: "#1F89DC",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
