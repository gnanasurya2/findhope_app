import React from "react";
import {
  TouchableNativeFeedback,
  TouchableHighlight,
  Platform,
  Text,
  StyleSheet,
  View
} from "react-native";

import Color from "../constants/Colors";

function Button(props) {
  if (Platform.OS === "android") {
    return (
      <TouchableNativeFeedback
        onPress={props.onPress}
        background={TouchableNativeFeedback.Ripple("white")}
      >
        <View style={styles.wrapper}>
          <View style={styles.button}>
            <Text style={styles.text}>{props.title}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
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
