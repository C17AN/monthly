import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SpenditureItem = ({ item }) => {
  const { name, theme } = item;
  return (
    <View style={styles.SpenditureItem}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default SpenditureItem;

const styles = StyleSheet.create({
  SpenditureItem: {
    borderWidth: 1,
    borderColor: "#999999",
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 10,
  },
});
