import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View
      style={[
        styles.item,
        { alignSelf: props.isMe ? "flex-end" : "flex-start" }, 
      ]}
    >
      <View style={styles.itemLeft}>
        {!props.isMe && <View style={styles.square}></View>}
        <Text
          style={[
            styles.itemText,
            {
              color: props.isMe ? "#000" : "#000",
              textAlign: props.isMe ? "right" : "left",
            },
          ]}
        >
          {props.text}
        </Text>
      </View>
      <View
        style={[
          styles.circular,
          { borderColor: props.isMe ? "#4CAF50" : "#55BCF6" }, 
        ]}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    maxWidth: "80%",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  square: {
    width: 8,
    height: 8,
    backgroundColor: "#55BCF6",
    borderRadius: 2,
    marginRight: 8,
    alignSelf: "flex-end",
  },
  itemText: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
    fontSize: 16,
    maxWidth: "100%",
    marginBottom: 4,
  },
  circular: {
    width: 6,
    height: 6,
    borderRadius: 3,
    borderWidth: 2,
    alignSelf: "flex-end",
    marginTop: 10,
  },
});

export default Task;
