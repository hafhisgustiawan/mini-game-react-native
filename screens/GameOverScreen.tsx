import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ViewStyle,
  ScrollView,
} from "react-native";
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
  const { width, height } = useWindowDimensions();
  const portrait = height > width;

  const imgStyleByOrientation: ViewStyle = {
    width: portrait ? "50%" : "20%",
    borderRadius: width / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <Title>Game Over!</Title>
        <View style={[styles.imageContainer, imgStyleByOrientation]}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    gap: 24,
  },
  imageContainer: {
    alignSelf: "center",
    // width: "50%",
    aspectRatio: 1 / 1,
    // borderRadius: 150,
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
