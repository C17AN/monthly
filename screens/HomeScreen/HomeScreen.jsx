import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Advertise from "../../components/Advertise/Advertise";
import CustomCalendar from "../../components/CustomCalendar/CustomCalendar";
import SpenditureList from "../../components/Spenditure/SpenditureList/SpenditureList";
import IncomeList from "../../components/Income/IncomeList/IncomeList";

const HomeScreen = () => {
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <CustomCalendar />
      <Advertise />
      <ScrollView>
        <IncomeList />
        <SpenditureList />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
