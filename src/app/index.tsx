import { MaterialIcons } from "@expo/vector-icons";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Category } from "../components/category";
import { colors } from "../styles/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Category category="Projetos" icon="code" isSelected={true} />
      <Category category="Sites" icon="language" isSelected={false} />
      <Category category="Vídeos" icon="movie" isSelected={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,
  },
  header: {
    paddingHorizontal: 24,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  logo: {
    height: 32,
    width: 38,
  },
});
