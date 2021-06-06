import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Welcome to Niraj Todo app", key: "1" },
    { text: "Add Todo Items", key: "2" },
  ]);

  const pressHandler = (key) => {
    setTodos(() => {
      return todos.filter((todo) => todo.key != key);
    });
  };

  function submitHandler(text) {
    if (text.length > 3) {
      setTodos(() => {
        return [{ text: text, key: Math.random().toString() }, ...todos];
      });
    } else {
      Alert.alert("OOPS!", "Todos must be over 3 characters long", [
        {
          text: "OK",
          onPress: () => {
            console.log("Alert Closed");
          },
        },
      ]);
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler}></TodoItem>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
