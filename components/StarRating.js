import React from "react";
import { StyleSheet, View, Text } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const StarRating = (props) => {
  let stars = [];
  for (var i = 1; i <= 5; i++) {
    let name = "star";
    if (i > props.ratings) {
      name = "star-outline";
    }

    stars.push(
      <MaterialCommunityIcons
        name={name}
        size={15}
        style={styles.star}
        key={i}
      />
    );
  }

  return (
    <View style={styles.container}>
      {stars}
      <Text style={styles.text}>({props.reviews})</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    color: "#FF8C00",
  },
  text: {
    fontSize: 12,
    marginLeft: 5,
    color: "#444",
  },
});

export default StarRating;
