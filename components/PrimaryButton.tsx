import { ReactNode } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import type { PressableProps, ViewStyle } from "react-native";

interface Props extends PressableProps {
  style?: ViewStyle;
  children?: ReactNode;
}

const PrimaryButton: React.FC<Props> = (props) => {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        styles.container,
        props.style,
        pressed && { backgroundColor: "#cccccc" },
      ]}
    >
      <Text style={styles.colorWhite}>{props?.children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center", //ini untuk width: 'wrap-content'
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
  colorWhite: {
    color: "white",
  },
});

export default PrimaryButton;
