import React from "react";
import { ScrollView, Text, Image, View, StyleSheet } from "react-native";

import Color from "../constants/Colors";

function StoryScreen(props) {
  const url = props.navigation.getParam("url");
  const story = props.navigation.getParam("story");
  console.log(story);
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.image_box}>
        <Image source={{ uri: url }} resize="contain" style={styles.image} />
      </View>
      <View style={styles.text_box}>
        <Text style={styles.text}>{story}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10
  },
  image_box: {
    width: "100%",
    height: 300,
    overflow: "hidden",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  image: {
    width: "100%",
    height: "100%"
  },
  text_box: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 50,
    paddingHorizontal: 5,
    paddingVertical: 15
  },
  text: {
    fontSize: 19,
    textAlign: "center",
    lineHeight: 40
  }
});
export default StoryScreen;
