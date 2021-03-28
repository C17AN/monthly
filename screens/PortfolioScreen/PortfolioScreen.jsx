import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IncomeList from "../../components/Income/IncomeList/IncomeList";
import SpenditureList from "../../components/Spenditure/SpenditureList/SpenditureList";

const PortfolioScreen = () => {
  return (
    <View>
      <IncomeList />
      <SpenditureList />
    </View>
  );
};

export default PortfolioScreen;

const styles = StyleSheet.create({});
