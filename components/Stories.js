import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableNativeFeedback,
  Modal
} from "react-native";

import Color from "../constants/Colors";
function displayStoryHandler(story) {
  return (
    <Modal animationType="slide">
      <View>{story}</View>
    </Modal>
  );
}
function Stories(props) {
  return (
    <TouchableNativeFeedback>
      <View style={styles.screen}>
        <View style={styles.image_box}>
          <Image
            source={{ uri: props.source }}
            resize="contain"
            style={styles.image}
          />
        </View>
        <View>
          <Text style={styles.text}>{props.title}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: "90%",
    height: 400,
    elevation: 10,
    backgroundColor: "white",
    alignSelf: "center",
    justifyContent: "flex-start",
    marginTop: 50,
    borderRadius: 10,
    marginBottom: 25,
    overflow: "hidden"
  },
  image_box: {
    width: "100%",
    height: 300,
    overflow: "hidden",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  image: {
    width: "100%",
    height: "100%"
  },
  text: {
    color: Color.text,
    fontSize: 20,
    textAlign: "center"
  },
  scr: {
    flex: 1
  }
});

export default Stories;
