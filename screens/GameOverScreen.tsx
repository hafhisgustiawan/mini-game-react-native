import { View, Text, StyleSheet, Image } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../utils/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

interface Props {
  roundsNumber: number;
  userNumber: number;
  onStartNewGame: () => void;
}

const GameOverScreen: React.FC<Props> = ({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) => {
  return (
    <View style={styles.container}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 24,
  },
  imageContainer: {
    alignSelf: "center",
    width: 300,
    aspectRatio: 1 / 1,
    borderRadius: 150,
    borderWidth: 3,

    borderColor: Colors.primary300,
    overflow: "hidden", //ini penting, biar image nya mengikuti parent view
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "Inter_900Black",
    fontSize: 24,
    textAlign: "center",
  },
  highlight: {
    fontFamily: "Inter_800ExtraBold",
    color: "yellow",
  },
});

export default GameOverScreen;
