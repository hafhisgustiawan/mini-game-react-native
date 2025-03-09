import { useState, useEffect, useMemo } from "react";
import { View, StyleSheet, Alert, Text } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  userNumber: number;
  setGameIsOver: React.Dispatch<React.SetStateAction<boolean>>;
}

function generateRandomBetween(min: number, max: number, exclude?: number) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen: React.FC<Props> = ({ userNumber, setGameIsOver }) => {
  const initialGuess = useMemo(
    () => generateRandomBetween(minBoundary, maxBoundary, userNumber),
    []
  );

  const [guessNumber, setGuessNumber] = useState(initialGuess);

  useEffect(() => {
    if (userNumber === guessNumber) {
      setGameIsOver(true);
    }
  }, [guessNumber]);

  const nextGuessHandler = (direction: "lower" | "greater") => {
    if (
      (direction === "lower" && guessNumber < userNumber) ||
      (direction === "greater" && guessNumber > userNumber)
    ) {
      Alert.alert("Dont lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = guessNumber;
    } else {
      minBoundary = guessNumber + 1;
    }

    const newRandNumb = generateRandomBetween(
      minBoundary,
      maxBoundary,
      guessNumber
    );
    setGuessNumber(newRandNumb);
  };

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{guessNumber}</NumberContainer>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          style={{ flex: 1 }}
          onPress={nextGuessHandler.bind(this, "lower")}
        >
          <Ionicons name="remove" size={24} color="white" />
        </PrimaryButton>
        <PrimaryButton
          style={{ flex: 1 }}
          onPress={nextGuessHandler.bind(this, "greater")}
        >
          <Ionicons name="add-outline" size={24} color="white" />
        </PrimaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 16,
  },
});

export default GameScreen;
