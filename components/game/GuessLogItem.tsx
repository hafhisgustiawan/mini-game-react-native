import { View, Text, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

interface IProps {
  roundNumber: number;
  guess: number;
}

const GuessLogItem: React.FC<IProps> = ({ roundNumber, guess }) => {
  return (
    <View style={styles.container}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent's Guess {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 6,
    padding: 12,
    backgroundColor: Colors.secondary500,
    width: "100%",
  },
});

export default GuessLogItem;
