import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
// import { AppLoading } from "expo";
// import * as Font from "expo-font";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";

// const fetchFonts = () => {
//   return Font.loadAsync({
//     // "open-sans-light": require("./assets/fonts/OpenSans-Light.ttf"),
//     // "open-sans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
//     // "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
//   });
// };

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRounds] = useState(0);

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };
  // const [dataLoaded, setDataLoaded] = useState(false);

  // if (!dataLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setDataLoaded(true)}
  //       onError={(err) => console.log(err)}
  //     />
  //   );
  // }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRound <= 0) {
    content = (
      <GameScreen
        userChoice={userNumber}
        onGameOver={gameOverHandler}
        onRestart={configureNewGameHandler}
      />
    );
  } else if (guessRound > 0) {
    content = <GameOver />;
  }

  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />

      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
