import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface TasksContextData {
  tasks: Task[];
  addTask: (text: string) => void;
  toggleTaskCompletion: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TasksContext = createContext<TasksContextData | undefined>(undefined);

export function TasksProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem("@tasks");
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error("Erro ao carregar tarefas:", error);
      }
    };
    loadTasks();
  }, []);

  const saveTasks = async (updatedTasks: Task[]) => {
    try {
      await AsyncStorage.setItem("@tasks", JSON.stringify(updatedTasks));
    } catch (error) {
      console.error("Erro ao salvar tarefas:", error);
    }
  };

  const addTask = (text: string) => {
    const newTask = { id: Date.now().toString(), text, completed: false };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const toggleTaskCompletion = (id: string) => {
    const updatedTasks = tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task));
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  return <TasksContext.Provider value={{ tasks, addTask, toggleTaskCompletion, deleteTask }}>{children}</TasksContext.Provider>;
}

export function useTasksContext() {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasksContext deve ser usado dentro de TasksProvider");
  }
  return context;
}
