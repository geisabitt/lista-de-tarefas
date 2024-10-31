import { StyleSheet, View, FlatList } from "react-native";
import { colors } from "../theme/colors";
import { TaskItem } from "./TaskItem";
import { useTasksContext } from "../contexts/TasksContext";

export function TaskList() {
  const { tasks } = useTasksContext();

  return (
    <View style={styles.container}>
      <FlatList data={tasks} keyExtractor={(item) => item.id} renderItem={({ item }) => <TaskItem id={item.id} text={item.text} completed={item.completed} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  text: { flex: 1 },
  completed: { textDecorationLine: "line-through", color: colors.foreground },
});
