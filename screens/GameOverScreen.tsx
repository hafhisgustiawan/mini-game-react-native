import { View, Text, StyleSheet } from "react-native";

const GameOverScreen = () => {
  return (
    <View style={styles.container}>
      <Text>GameOverScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
