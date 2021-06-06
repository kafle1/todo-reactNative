import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

function AddTodo({submitHandler}) {
  const [text, setText] = useState("");

  function changeHandler(val) {
    setText(val);
  }

 
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter New Todo"
        onChangeText={changeHandler}
        value={text}
      />
      <Button
        color="coral"
        onPress={() => submitHandler(text)}
        title="Add Todo"
      />
    </View>
  );
}

export default AddTodo;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
