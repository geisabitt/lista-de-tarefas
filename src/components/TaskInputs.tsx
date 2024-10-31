import { useState } from "react";
import { TextInput, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { colors } from "../theme/colors";
import { useTasksContext } from "../contexts/TasksContext";

export function TaskInputs() {
  const [taskText, setTaskText] = useState("");
  const { addTask } = useTasksContext();

  const handleAddTask = () => {
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Digite uma nova tarefa" placeholderTextColor={colors.light} value={taskText} onChangeText={setTaskText} />
      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Text style={styles.textButton}> + </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flexDirection: "row",
    maxWidth: "80%",
    justifyContent: "center",
    gap: 10,
  },
  input: {
    width: "100%",
    borderColor: colors.light,
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
    color: colors.light,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.accent,
  },
  textButton: {
    textAlign: "center",
    color: colors.light,
    fontWeight: "bold",
    fontSize: 24,
  },
});
