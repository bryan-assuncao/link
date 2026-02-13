import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import { colors } from "../../styles/colors";

type CategoryProps = PressableProps & {
  category: string;
  isSelected: boolean;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function Category(props: CategoryProps) {
  const color = props.isSelected ? colors.green[300] : colors.gray[400];
  return (
    <Pressable style={styles.container} {...props}>
      <MaterialIcons name={props.icon} size={16} color={color} />
      <Text style={[styles.name, { color }]}>{props.category}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
});
