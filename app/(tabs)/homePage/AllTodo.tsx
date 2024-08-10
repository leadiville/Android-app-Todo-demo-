import Checkbox from "expo-checkbox";
import { Text, View } from "react-native";
import styles from "../styles";

export default ({todoArray, markAsCompleted}) => {
  return (
    <>
      {todoArray.map((todo) => {
        return (
          <View key={todo?.id} style={[styles.flexContainer, styles.eachTodo]}>
            <Checkbox
              color={`${todo?.completed ? "green" : "indigo"}`}
              value={todo.completed}
              onValueChange={() => markAsCompleted(todo.id)}
              style={styles.todoCheckbox}
            />
            <Text
              style={[
                styles.todoText,
                {
                  textDecorationLine: todo?.completed ? "line-through" : "none",
                },
              ]}
            >
              {todo?.title}
            </Text>
          </View>
        );
      })}
    </>
  );
};
