import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import SplashScreen from "react-native-splash-screen";

import StoryNavigator from "./navigation/StoryNavigator";
import LoginScreen from "./screen/LoginScreen";

export default function App() {
  return <LoginScreen />;
}

const styles = StyleSheet.create({
  text: {
    color: "white"
  },
  screen: {
    flex: 1
  }
});
