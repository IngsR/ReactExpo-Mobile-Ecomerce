import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        let iconComponent;
        let iconLabel;

        if (route.name === "Beranda") {
          iconComponent = (
            <MaterialCommunityIcons
              name="home"
              size={24}
              color={isFocused ? "#0891b2" : "#222"}
            />
          );
          iconLabel = "Beranda";
        } else if (route.name === "Produk") {
          iconComponent = (
            <MaterialCommunityIcons
              name="shopping"
              size={24}
              color={isFocused ? "#0891b2" : "#222"}
            />
          );
          iconLabel = "Produk";
        } else if (route.name === "Keranjang") {
          iconComponent = (
            <MaterialCommunityIcons
              name="cart"
              size={24}
              color={isFocused ? "#0891b2" : "#222"}
            />
          );
          iconLabel = "Keranjang";
        } else if (route.name === "Chat") {
          iconComponent = (
            <MaterialCommunityIcons
              name="forum"
              size={24}
              color={isFocused ? "#0891b2" : "#222"}
            />
          );
          iconLabel = "Chat";
        }

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tabButton}
          >
            {iconComponent}
            <Text style={{ color: isFocused ? "#0891b2" : "#222" }}>
              {iconLabel}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  tabButton: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TabBar;
