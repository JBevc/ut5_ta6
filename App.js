import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { TaskElement } from "./componentes/TaskElement";

export default function App() {
  const initialTasks = [
    {
      id: 0,
      name: "Comer",
    },
    {
      id: 1,
      name: "Dormir",
    },
    {
      id: 2,
      name: "Volver a repetir",
    },
  ];

  const [tasks, setTasks] = React.useState(initialTasks);
  const [text, setText] = React.useState("");

  function handleChange(newText) {
    setText(newText);
  }

  function addTask() {
    const newTask = { id: tasks.length, name: text };
    setTasks([...tasks, newTask]);
    setText("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>Tareas</Text>
          <View style={styles.tareaInput}>
            <TextInput
              style={styles.input}
              value={text}
              onChangeText={handleChange}
            />
            <View style={styles.boton}>
              <Button title="Agregar" onPress={addTask} color="black" />
            </View>
          </View>

          <View style={styles.list}>
            {tasks.map((task) => (
              <TaskElement key={task.id} task={task} deleteTask={deleteTask} />
            ))}
          </View>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 60,
    margin: 40,
    marginBottom: 30,
    fontWeight: "bold",
  },
  text: {
    alignSelf: "flex-start",
    margin: 10,
    fontSize: 20,
  },
  input: {
    borderWidth: 1.2,
    width: "70%",
    height: 40,
    borderRadius: 12,
    padding: 10,
  },
  list: {
    marginTop: 40,
  },
  tareaInput: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
  },
  boton: {
    backgroundColor: "#89c2d9",
    borderWidth: 1.2,
    width: "30%",
    height: 40,
    borderRadius: 12,
    alignContent: "center",
    justifyContent: "center",
    marginLeft: 15,
  },
});
