import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import SplashScreen from "react-native-splash-screen";

import HomeScreen from "./screen/HomeScreen";
import StoriesScreen from "./screen/StoriesScreen";

export default function App() {
  return <StoriesScreen />;
}

const styles = StyleSheet.create({
  text: {
    color: "white"
  },
  screen: {
    flex: 1
  }
});
