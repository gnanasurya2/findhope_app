import React from "react";
import { View, StyleSheet } from "react-native";

function Card(props) {
  return <View style={styles.screen}>{props.children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    width: "90%",
    maxWidth: 450,
    height: 220,
    backgroundColor: "white",
    elevation: 13,
    justifyContent: "flex-start",
    alignContent: "center",
    borderRadius: 10,
    borderTopRightRadius: 50,
    marginTop: 30,
    alignSelf: "center"
  }
});

export default Card;
