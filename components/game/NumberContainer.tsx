import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../utils/colors";
import { PropsWithChildren } from "react";

const NumberContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

//you can control size compare to device size
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 4,
    borderRadius: 8,
    borderColor: Colors.secondary500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
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
