import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Advertise = () => {
  return (
    <View style={styles.Advertise}>
      <Text>광고 컴포넌트</Text>
    </View>
  );
};

export default Advertise;

const styles = StyleSheet.create({
  Advertise: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderColor: "#cdcdcd",
    marginVertical: 10,
    borderWidth: 1,
  },
});
