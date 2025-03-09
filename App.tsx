import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Keyboard,
  ImageBackground,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./utils/colors";
import GameOverScreen from "./screens/GameOverScreen";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Inter_900Black,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";
// import AppLoading from "expo-app-loading";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    Inter_900Black,
    Inter_800ExtraBold,
  });
  const [userNumber, setUserNumber] = useState<number>(0);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  useEffect(() => {
    if (fontsLoaded || fontsError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  const gameOverHandler = (numberOfRounds: number) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  };

  const restartGame = () => {
    setUserNumber(0);
    setGuessRounds(0);
    setGameIsOver(false);
  };

  let screen = (
    <StartGameScreen
      setUserNumber={setUserNumber}
      setGameIsOver={setGameIsOver}
    />
  );

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={restartGame}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary500, Colors.secondary500]}
      style={styles.container}
      onTouchStart={() => Keyboard.dismiss()}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        {/* safeareaview ini untuk membuat padding top nya agak tidak tertimpa oleh poni hp yang didetek secara otomatis */}
      </ImageBackground>
      <StatusBar style="light" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //take as much space available in main axis (default column) flexbox
    // justifyContent: "flex-start", //default
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
