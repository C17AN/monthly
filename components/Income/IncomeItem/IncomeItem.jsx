import React from "react";
import { StyleSheet, Text, View } from "react-native";

const IncomeItem = ({ item }) => {
  const { name, theme } = item;
  return (
    <View style={styles.IncomeItem}>
      <Text style={styles.text}>티커 : {name}</Text>
      <Text style={styles.theme}>{theme}</Text>
    </View>
  );
};

export default IncomeItem;

const styles = StyleSheet.create({
  IncomeItem: {
    borderWidth: 1,
    borderColor: "#999999",
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 10,
  },
});
