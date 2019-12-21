import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import Card from "../components/Card";
import Color from "../constants/Colors";
import Button from "../components/Button";

function HomeScreen(props) {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.header}></View>
      <View style={styles.head_box}>
        <Text style={styles.title}>OPEN UP</Text>
      </View>
      <Card>
        <View style={styles.text_box}>
          <Text style={styles.text_heading}>LET'S GET INTRODUCTED</Text>
        </View>
        <View>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            et quis modi reprehenderit a beatae omnis in, quasi blanditiis.
            Temporibus adipisci natus veniam id, distinctio mollitia iure
            pariatur quidem quia.
          </Text>
        </View>
        <Button title="BUY THERAPY SESSION" />
      </Card>
      <View style={styles.head_box}>
        <Text style={styles.title}>OVERCOME</Text>
      </View>
      <Card>
        <View style={styles.text_box}>
          <Text style={styles.text_heading}>EMBRACE</Text>
        </View>
        <View>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            et quis modi reprehenderit a beatae omnis in, quasi blanditiis.
            Temporibus adipisci natus veniam id, distinctio mollitia iure
            pariatur quidem quia.
          </Text>
        </View>
        <Button title="FIX APPOINTMENT" />
      </Card>
      <View style={styles.head_box}>
        <Text style={styles.title}>ACHIEVE</Text>
      </View>
      <Card>
        <View style={styles.text_box}>
          <Text style={styles.text_heading}>ANXIETY TIMELINE</Text>
        </View>
        <View>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            et quis modi reprehenderit a beatae omnis in, quasi blanditiis.
            Temporibus adipisci natus veniam id, distinctio mollitia iure
            pariatur quidem quia.
          </Text>
        </View>
        <Button title="BUY THERAPY SESSION" />
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Color.background
  },
  header: {
    height: 200,
    width: "100%",
    backgroundColor: Color.primary
  },
  text_heading: {
    fontSize: 19,
    color: Color.text_heading,
    paddingTop: 10,
    paddingBottom: 10
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    padding: 10
  },
  text_box: {
    borderBottomWidth: 2,
    borderBottomColor: "#E0E0E0",
    marginLeft: 10,
    marginRight: 10
  },
  head_box: {
    textAlign: "left"
  },
  title: {
    fontSize: 20,
    width: "100%",
    color: Color.primary,
    textAlign: "left",
    paddingLeft: 10,
    paddingTop: 15
  }
});

export default HomeScreen;
