import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IncomeList from "../../components/Income/IncomeList/IncomeList";
import SpenditureList from "../../components/Spenditure/SpenditureList/SpenditureList";

const PortfolioScreen = () => {
  return (
    <View style={styles.container}>
      <IncomeList />
      <SpenditureList />
    </View>
  );
};

export default PortfolioScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },
});
