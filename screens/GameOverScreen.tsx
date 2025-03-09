import { View, Text, StyleSheet, Image } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../utils/colors";

const GameOverScreen = () => {
  return (
    <View style={styles.container}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    alignSelf: "center",
    width: 300,
    aspectRatio: 1 / 1,
    borderRadius: 150,
    borderWidth: 3,
    margin: 24,
    borderColor: Colors.primary300,
    overflow: "hidden", //ini penting, biar image nya mengikuti parent view
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
