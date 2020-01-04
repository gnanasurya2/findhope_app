import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform
} from "react-native";

import Color from "../constants/Colors";

function Stories(props) {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <TouchableCmp onPress={props.onSelect}>
      <View style={styles.screen}>
        <View style={styles.image_box}>
          <Image
            source={{ uri: props.source }}
            resize="contain"
            style={styles.image}
          />
        </View>
      </View>
    </TouchableCmp>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: "90%",
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
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  image: {
    width: "100%",
    height: "100%"
  },
  scr: {
    flex: 1
  }
});

export default Stories;
