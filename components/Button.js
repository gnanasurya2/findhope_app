import React from "react";
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  Text,
  StyleSheet,
  View
} from "react-native";

import Color from "../constants/Colors";

function Button(props) {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <TouchableCmp
      onPress={props.onPress}
      background={TouchableNativeFeedback.Ripple("white")}
    >
      <View style={styles.wrapper}>
        <View style={styles.button}>
          <Text style={styles.text}>{props.title}</Text>
        </View>
      </View>
    </TouchableCmp>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.button,
    padding: 8,
    alignItems: "center",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginLeft: 10,
    marginRight: 10
  },
  text: {
    color: "white",
    fontSize: 15
  },
  wrapper: {
    flex: 1,
    justifyContent: "flex-end"
  }
});

export default Button;
