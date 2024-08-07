import { Text, View } from "react-native";
import { Checkbox } from "expo-checkbox";
import styles from "../styles";
import { useState } from "react";
// import { TodoArray } from "./Example";

export default ({ alertTitle, todoAlert }) => {
  const [alertArray, setAlertArray] = useState(todoAlert);

  const markAsCompleted = (id: string) => {
    let marked = alertArray.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setAlertArray(marked);
  };
  return (
    <View style={{ margin: 20, marginTop: 0 }}>
      <Text style={styles.todoAlertTitle}>{alertTitle}</Text>
      <View>
        {alertArray?.map((todo) => {
          return (
            <View
              key={todo?.id}
              style={[styles.flexContainer, styles.eachTodo]}
            >
              <Checkbox
                color={`${todo?.completed ? "indigo" : ""}`}
                value={todo.completed}
                onValueChange={() => markAsCompleted(todo?.id)}
                style={{
                  borderRadius: 10,
                  margin: 0,
                  marginBottom: 10,
                  marginTop: 10,
                }}
              />
              <Text
                style={[
                  styles.todoText,
                  {
                    textDecorationLine: todo?.completed
                      ? "line-through"
                      : "none",
                  },
                ]}
              >
                {todo?.title}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};
