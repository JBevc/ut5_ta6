import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";
// import { Swipeable } from "react-native-gesture-handler/ReanimatedSwipeable";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Icon from "react-native-vector-icons/FontAwesome";

export function TaskElement({ task, deleteTask }) {
  return (
    <View style={styles.task}>
      <Swipeable
        overshootRight={false}
        renderRightActions={() => (
          <Pressable
            style={styles.deleteButton}
            onPress={() => deleteTask(task.id)}
          >
            <Icon name="trash" size={15} color="white" />
          </Pressable>
        )}
      >
        <View style={styles.taskContainer}>
          <Text style={styles.text}> {task.name} </Text>
        </View>
      </Swipeable>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    margin: 5,
    textAlign: "center",
  },
  task: {
    display: "flex",
    flexDirection: "Column",
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: "Times New Roman",
    fontWeight: "bold",
  },
  taskItem: {
    backgroundColor: "#FFD7BA",
    margin: 10,
    borderRadius: 15,
    justifyContent: "center",
    minWidth: "90%",
    height: 40,
    marginBottom: 10,
  },
  deleteButton: {
    backgroundColor: "#F44336",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "left",
    minWidth: "90%",
    height: 40,
    borderRadius: 15,
    borderWidth: 1,
  },
  taskContainer: {
    backgroundColor: "#89c2d9",
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "center",
    minWidth: "90%",
    height: 40,
  },
});
