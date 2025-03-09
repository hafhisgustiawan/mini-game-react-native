import { View, StyleSheet, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.numberInput}
        keyboardType="number-pad"
        maxLength={2}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton style={{ flex: 1 }}>Reset</PrimaryButton>
        <PrimaryButton style={{ flex: 1 }}>Start</PrimaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#72063c",
    borderRadius: 6,
    padding: 16,
    gap: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 16,
    // width: "100%",
  },
  numberInput: {
    width: "30%",
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    textAlign: "center",
    color: "#ddb52f",
  },
});

export default StartGameScreen;
