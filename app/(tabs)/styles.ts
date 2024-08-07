import AddTodoBtn from "@/components/AddTodoBtn";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 10,
    letterSpacing: 0.1,
    flex: 1,
    backgroundColor: "white",
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hoverCategory: {
    backgroundColor: "lavender",
    paddingTop: 2,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 20,
    margin: 5,
  },
  categoryBtnTxt: {
    padding: 3,
    textTransform: "capitalize",
  },
  button: {
    alignItems: "center",
    paddingVertical: 3,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
  },
  todoContainer: {
    marginTop: 10,
    bottom: '1%',
    textAlign: "left",
    width:'100%',
  },
  alertTodos : {
    padding: 5,
  },
  eachTodo: {
    justifyContent: "flex-start",

  },
  todoText: {
    alignSelf: "center",
    fontSize: 16,
    textTransform: "capitalize",
    letterSpacing: 1,
    color: "dark-indigo",
    fontWeight: "400",
    // marginBottom: 12,
    margin: 12,
  },
  todoAlertTitle: {
    // marginTop: 20,
    fontSize: 18,
    fontWeight: '800',
    textTransform: 'capitalize',
    letterSpacing: 1,
    marginBottom: 10
  },
  addTodo: {
    width: '100%',
    padding: 10,
  },
  todoInput: {
    width: "78%",
    height: 38,
    alignSelf: "center",
    borderWidth: 2,
    paddingLeft: 20,
    borderRadius: 20,
    zIndex: 1,
  },
  AddTodoBtn: {
    
  },
  todoAlerts: {
    position: 'absolute',
    left: 20,
  }
});

export default styles;
