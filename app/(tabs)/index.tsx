import { useEffect, useState } from "react";
import styles from "./styles";
import {
  ScrollView,
  TextInput,
  View,
  Text,
  Alert,
  AlertIOS,
  Pressable,
  Platform,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "@/components/TodoCategories";
import { FontAwesome } from "@expo/vector-icons";
import { Checkbox } from "expo-checkbox";
import { Ionicons } from "@expo/vector-icons";
import { allTodo, timeOfTheDay, TodoArray } from "./homePage/Example";
import uuid from "react-native-uuid";
import Past from "./homePage/TodoAlerts";
import TodoAlerts from "./homePage/TodoAlerts";

export default () => {
  const [todoArray, setTodoArray] = useState(allTodo);
  const [todoItem, setTodoItem] = useState("");

  const random: string | number[] = uuid.v4();

  const getAlert = () => {
    todoArray.map((todo) => {
      if (todo.reminderDate == "") {
        todo.alert = "NO ALERT";
      } else if (
        todo.reminderDate.valueOf() > new Date().toDateString().valueOf()
      ) {
        todo.alert = "SOON";
      } else if (
        todo.reminderDate.valueOf() < new Date().toDateString().valueOf()
      ) {
        todo.alert = "PAST";
      } else {
        todo.alert = "TODAY";
      }
    });
  };

  useEffect(() => getAlert(), []);

  // console.log();

  const addTodoItem = () => {
    const newTask: Array<TodoArray> = {
      id: random,
      title: todoItem,
      reminderDate: "",
      alert: getAlert(),
      completed: false,
      important: false,
    };
    const newArray = [...todoArray, newTask];
    if (todoItem !== "") {
      setTodoArray(newArray);
      console.log(newArray);
    } else {
      //instead of this alert we will later create a page for creating a todo with time and category.
      if (Platform.OS == "ios") {
        AlertIOS.alert(
          "Cannot create an empty task",
          "Please input a task to continue"
        );
      } else {
        Alert.alert(
          "Cannot create an empty task",
          "Please input a task to continue"
        );
      }
    }
    setTodoItem("");
  };

  function deleteItem() {
    const newArray = todoArray.filter((each) => each.completed == false);
    try {
      if (newArray.length == todoArray.length) {
        Alert.alert(
          "Select a todo first!",
          "You have to select a todo or more, before you can delete!"
        );
      } else {
        Alert.alert(
          "Delete todo(s)",
          "Are you sure you want to delete these items?",
          [
            { text: "YES", onPress: () => setTodoArray(newArray) },
            { text: "NO" },
          ]
        );
      }
    } catch (err) {
      console.error("handled err:", err);
    }
  }
  const getPastTodo = todoArray.filter((todo) => todo.alert === "PAST");
  const getTodayTodo = todoArray.filter((todo) => todo.alert === "TODAY");
  const getSoonTodo = todoArray.filter((todo) => todo.alert === "SOON");
  const getNoAlertTodo = todoArray.filter((todo) => todo.alert === "");

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.flexContainer, { marginBottom: 20 }]}>
        <Categories style={styles.hoverCategory} title={"All"} />
        {timeOfTheDay?.map((item) => {
          return (
            <Pressable
              key={item.title}
              style={styles.hoverCategory}
              // onHoverIn={() => setHoverBtn(true)}
            >
              <Text style={styles.categoryBtnTxt}>{item.title}</Text>
            </Pressable>
          );
        })}
      </View>

      <ScrollView style={styles.todoContainer}>
        <View>
          <TodoAlerts todoAlert={getNoAlertTodo} alertTitle={"NO ALERT"} />
          <TodoAlerts todoAlert={getPastTodo} alertTitle={"PAST"} />
          <TodoAlerts todoAlert={getTodayTodo} alertTitle={"TODAY"} />
          <TodoAlerts todoAlert={getSoonTodo} alertTitle={"SOON"} />
        </View>
      </ScrollView>
      <View style={[styles.addTodo, styles.flexContainer]}>
        <TextInput
          value={todoItem}
          // onPress={addTodoItem}
          onChangeText={setTodoItem}
          style={styles.todoInput}
          placeholder="enter your todo"
        />
        <Pressable onPress={addTodoItem} style={styles.addTodoBtn}>
          <Ionicons name="add-circle-outline" size={58} color="indigo" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
