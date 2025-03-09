import { ReactNode } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import type { PressableProps, ViewStyle } from "react-native";
import Colors from "../../utils/colors";
import { Ionicons } from "@expo/vector-icons";

interface Props extends PressableProps {
  style?: ViewStyle;
  children?: ReactNode;
  Icon?: typeof Ionicons;
}

const PrimaryButton: React.FC<Props> = ({ Icon, ...props }) => {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        styles.container,
        props.style,
        pressed && { backgroundColor: Colors.gray300 },
      ]}
    >
      {Icon && <Icon />}
      <Text style={styles.textButton}>{props?.children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignSelf: "center", //ini untuk width: 'wrap-content'
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "purple",
    borderRadius: 4,
    elevation: 16, //ini untuk shadow di andro, miss android studio
    shadowColor: "black",
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 16,
    shadowOpacity: 0.25,
    minWidth: 120,
    alignItems: "center",
  },
  textButton: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Inter_900Black",
  },
});

export default PrimaryButton;
