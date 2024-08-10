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
  Keyboard,
  ToastAndroid,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "@/components/TodoCategories";
import { Ionicons } from "@expo/vector-icons";
import { allTodo, timeOfTheDay, TodoArray } from "./homePage/Example";
import uuid from "react-native-uuid";
import Checkbox from "expo-checkbox";
import * as Notifications from "expo-notifications";
import AllTodo from "./homePage/AllTodo";

export default () => {
  const [todoArray, setTodoArray] = useState<TodoArray>(allTodo);
  const [todoItem, setTodoItem] = useState("");
  const [showTrash, setShowTrash] = useState<Boolean>(false);
  const [check, setCheck] = useState<Boolean>(false);
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

  const addNoAlertTodoItem = () => {
    const newTask = {
      id: random,
      title: todoItem,
      reminderDate: "",
      alert: "",
      completed: false,
      important: false,
    };
    const newArray = [newTask, ...todoArray];

    if (todoItem !== "") {
      setTodoArray(newArray);
      getAlert();
      // console.log(newArray);
    } else {
      //instead of this alert we will later create a page for creating a todo with time and category.
      if (Platform.OS == "ios") {
        AlertIOS.alert("Empty task", "Please input a task to continue!");
      } else {
        Alert.alert("Empty task", "Please enter a task first, to continue!");
      }
    }
    setTodoItem("");
    Keyboard.dismiss();
    ToastAndroid.showWithGravity(
      `Todo created successfully - ${newTask.title}`,
      ToastAndroid.LONG,
      0
    );
  };

  function deleteItem() {
    const newArray = todoArray.filter((each) => each.completed == false);
    const count: number = todoArray.length - newArray.length;
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
            {
              text: "YES",
              onPress: () => {
                setTodoArray(newArray);
                setShowTrash(false);
                Alert.alert(`${count} item(s) successfully deleted!`);
              },
            },
            { text: "NO" },
          ]
        );
      }
    } catch (err) {
      console.error("handled err:", err);
    }
  }

  const markAsCompleted = (id: string | string[]) => {
    let marked = todoArray.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodoArray(marked);
  };
  useEffect(() => {
    let newArray = todoArray.filter((each) => each.completed == true);
    newArray.length ? setShowTrash(true) : setShowTrash(false);
  }, [todoArray]);

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
      {showTrash && (
        <Pressable
          style={{
            backgroundColor: "none",
            padding: 0,
            paddingHorizontal: 10,
            alignItems: "flex-end",
          }}
        >
          <Ionicons
            name="trash"
            size={24}
            color={"darkred"}
            onPress={deleteItem}
          />
        </Pressable>
      )}
      <ScrollView style={styles.todoContainer}>
        <View style={{ margin: 10 }}>
          <AllTodo todoArray={todoArray} markAsCompleted={markAsCompleted} />
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
        <Pressable onPress={addNoAlertTodoItem} style={styles.addTodoBtn}>
          <Ionicons name="add-circle-outline" size={58} color="indigo" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
