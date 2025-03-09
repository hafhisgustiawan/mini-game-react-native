import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Keyboard } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      colors={["#72063c", "#ddb52f"]}
      style={styles.container}
      onTouchStart={() => Keyboard.dismiss()}
    >
      <StartGameScreen />
      <StatusBar style="light" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //take as much space available in main axis (default column) flexbox
    paddingTop: 80,
    // justifyContent: "flex-start", //default
    padding: 16,
  },
});
