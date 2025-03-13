import {
  View,
  StyleSheet,
  TextInput,
  Alert,
  Text,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../utils/colors";
import Title from "../components/ui/Title";

interface Props {
  setUserNumber: React.Dispatch<React.SetStateAction<number>>;
  setGameIsOver: React.Dispatch<React.SetStateAction<boolean>>;
}

const StartGameScreen: React.FC<Props> = ({ setUserNumber, setGameIsOver }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  //this hook will watch if screen size change
  const { width, height } = useWindowDimensions();

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const submitInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    setUserNumber(chosenNumber);
    setGameIsOver(false);
  };

  const marginContainer = height < 480 ? 0 : 16;

  return (
    <View style={styles.root}>
      <Title>Guess My Number</Title>
      <View style={[styles.container, { margin: marginContainer }]}>
        <Text style={styles.instructionText}>Enter a number</Text>
        <TextInput
          style={styles.numberInput}
          keyboardType="number-pad" //walaupun disini number, tapi tetap string
          maxLength={2}
          value={enteredNumber}
          onChangeText={(val) => setEnteredNumber(val)}
        />
        <View style={styles.buttonContainer}>
          <PrimaryButton
            style={{ flex: 1, backgroundColor: Colors.primary300 }}
            onPress={resetInputHandler}
          >
            Reset
          </PrimaryButton>
          <PrimaryButton style={{ flex: 1 }} onPress={submitInputHandler}>
            Start
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  root: {
    gap: 24,
  },
  container: {
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: Colors.primary500,
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
    fontSize: 32,
    borderBottomColor: Colors.secondary500,
    borderBottomWidth: 2,
    textAlign: "center",
    color: Colors.secondary500,
    alignSelf: "center",
  },
  instructionText: {
    color: Colors.secondary500,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default StartGameScreen;
