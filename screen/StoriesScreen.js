import React, { useState, useEffect } from "react";
import { Text, ScrollView, StyleSheet, FlatList } from "react-native";

import Color from "../constants/Colors";
import Stories from "../components/Stories";
import * as firebase from "firebase";
import "firebase/firestore";
import Card from "../components/Card";
var firebaseConfig = {
  apiKey: "AIzaSyBD2YW-JEIEkjnmZwWOvrU3DOmlNQ9JMEI",
  authDomain: "findhope-app.firebaseapp.com",
  databaseURL: "https://findhope-app.firebaseio.com",
  projectId: "findhope-app",
  storageBucket: "findhope-app.appspot.com",
  messagingSenderId: "375832780098",
  appId: "1:375832780098:web:4e1c5c4c8837eb9aaf7cdb",
  measurementId: "G-0PM14KBY5T"
};

firebase.initializeApp(firebaseConfig);
var flag = true;

function StoriesScreen(props) {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);

  function Item({ title, story, url }) {
    return (
      <Stories
        title={title}
        source={url}
        story={story}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "Story",
            params: {
              story: story,
              url: url
            }
          });
        }}
      />
    );
  }

  const ref = firebase.firestore().collection("stories");
  function tra(s) {
    props.trans(s);
  }
  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const { story, title, url } = doc.data();
        list.push({
          id: doc.id,
          story,
          title,
          url
        });
      });

      setStories(list);
      if (loading) {
        setLoading(false);
      }
    });
  }, []);
  return (
    <ScrollView style={styles.screen}>
      <FlatList
        data={stories}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Item title={item.title} story={item.story} url={item.url} />
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Color.background
  }
});

export default StoriesScreen;
