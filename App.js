import React, { Component } from "react";
import { Text, View } from "react-native";

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <Text>Hello, world!</Text>
        <Text>This is my first app</Text>
        <Text>Things are working fine</Text>
        <Text>things are super fast</Text>
        <Text>It's super cool to work in this environment</Text>
        <Text>Good bye for now...</Text>
      </View>
    );
  }
}
