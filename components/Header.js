import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const Header = (props) => {
  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    width: "100%",
    paddingTop: 20,
    paddingBottom: 20,

    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    color: "black",
    fontSize: 20,
  },
});

export default Header;
