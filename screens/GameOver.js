import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over!</Text>
      <Image
        style={styles.imageStyle}
        source={require("../assets/gameover.png")}
      />
      <Button title="Start Game" onPress={props.onRestart} />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageStyle: {
    margin: 40,
    width: "50%",
    height: "50%",
  },
});

export default GameOver;
