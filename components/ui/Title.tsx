import { PropsWithChildren } from "react";
import { Text, StyleSheet } from "react-native";

const Title: React.FC<PropsWithChildren> = ({ children }) => {
  return <Text style={styles.container}>{children}</Text>;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    borderBottomWidth: 2,
    fontFamily: "Inter_900Black",
    textAlign: "center",
    paddingBottom: 16,
    borderBottomColor: "white",
    marginTop: 16,
  },
});

export default Title;
