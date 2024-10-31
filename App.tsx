import { TasksProvider } from "./src/contexts/TasksContext";
import { HomeScreen } from "./src/screens/HomeScreen";
export default function App() {
  return (
    <TasksProvider>
      <HomeScreen />
    </TasksProvider>
  );
}
