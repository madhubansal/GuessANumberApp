import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over!</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default GameOver;
