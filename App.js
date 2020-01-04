import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import SplashScreen from "react-native-splash-screen";

import StoryNavigator from "./navigation/StoryNavigator";
export default function App() {
  return <StoryNavigator />;
}

const styles = StyleSheet.create({
  text: {
    color: "white"
  },
  screen: {
    flex: 1
  }
});
