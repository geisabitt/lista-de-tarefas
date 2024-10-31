import { View, StyleSheet, Text } from "react-native";
import { TaskList } from "../components/TaskList";
import { TaskInputs } from "../components/TaskInputs";
import { colors } from "../theme/colors";

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <TaskInputs />
      <TaskList />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: colors.gray,
    backgroundColor: colors.accent,
    marginTop: -40,
    paddingTop: 70,
    padding: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
});
