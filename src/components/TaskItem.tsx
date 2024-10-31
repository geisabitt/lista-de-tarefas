import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { colors } from "../theme/colors";
import { Task, useTasksContext } from "../contexts/TasksContext";
import Checkbox from "expo-checkbox";

export function TaskItem(props: Readonly<Task>) {
  const { toggleTaskCompletion, deleteTask } = useTasksContext();

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Checkbox value={props.completed} onValueChange={() => toggleTaskCompletion(props.id)} color={colors.accent} />
        <Text style={[styles.text, props.completed && styles.completed]}>{props.text}</Text>
      </View>
      <TouchableOpacity onPress={() => deleteTask(props.id)}>
        <Image style={styles.image} source={require("../../assets/close.png")} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: colors.accent,
    borderRadius: 10,
  },
  leftContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  text: {
    color: colors.light,
    fontWeight: "bold",
  },
  completed: {
    textDecorationLine: "line-through",
    color: colors.gray,
  },
  image: {
    width: 30,
    height: 30,
  },
});
