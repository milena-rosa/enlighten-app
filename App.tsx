import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Routes from "./src/routes";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [city, setCity] = useState("");

  return <Routes />;
  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.tsx to start working on your app!</Text>
  //     <TextInput onChangeText={(e) => setCity(e.)} />
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
