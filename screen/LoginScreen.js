import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Button
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

function LoginScreen(props) {
  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require("../assests/login(1).png")}
        resize="contain"
        style={styles.image}
      >
        <View style={styles.screen}>
          <View style={styles.title}>
            <Text style={styles.title_text}>Login</Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputBox}>
              <AntDesign name="user" size={35} style={styles.icon} />
              <TextInput style={styles.input1} placeholder="Username" />
            </View>
            <View style={styles.inputBox}>
              <AntDesign name="lock" size={35} style={styles.icon1} />
              <TextInput style={styles.input2} placeholder="Password" />
            </View>
          </View>
          <TouchableOpacity style={styles.password}>
            <Text style={styles.password_text}>Forgotpassword?</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  image: {
    width: "100%",
    height: "100%"
  },
  title: {
    marginTop: "55%",
    alignItems: "center"
  },
  title_text: {
    fontSize: 40,
    fontWeight: "700",
    color: "#404040"
  },
  inputContainer: {
    flexDirection: "column"
  },
  inputBox: {
    flexDirection: "row"
  },
  icon: {
    marginTop: "5%",
    paddingVertical: 17,
    borderTopWidth: 2,
    borderBottomWidth: 1,
    borderColor: "#d3d3d3",
    paddingLeft: 40,
    paddingRight: 20
  },
  icon1: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderBottomWidth: 2,
    borderColor: "#d3d3d3",
    paddingLeft: 40,
    paddingRight: 20
  },
  input1: {
    marginTop: "5%",
    height: 70,
    width: width / 1.6,
    borderTopRightRadius: 70,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 1,
    borderColor: "#d3d3d3",
    color: "#404040",
    fontSize: 20
  },
  input2: {
    height: 70,
    width: width / 1.6,
    borderBottomRightRadius: 70,
    borderTopWidth: 1,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: "#d3d3d3",
    fontSize: 20
  },
  password: {
    width: "100%",
    paddingLeft: "45%",
    paddingTop: 20
  },
  password_text: {
    fontSize: 18,
    color: "#d5d5d5"
  },
  buttonBox: {
    marginTop: 50,
    width: 100
  },
  button: {
    backgroundColor: "white",
    color: "red"
  }
});

export default LoginScreen;
