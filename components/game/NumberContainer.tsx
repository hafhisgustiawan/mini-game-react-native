import { View, Text, StyleSheet } from "react-native";
import Colors from "../../utils/colors";
import { PropsWithChildren } from "react";

const NumberContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 4,
    borderRadius: 8,
    borderColor: Colors.secondary500,
    padding: 24,
    margin: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    color: Colors.secondary500,
    fontSize: 36,
    fontWeight: "bold",
  },
});

export default NumberContainer;
