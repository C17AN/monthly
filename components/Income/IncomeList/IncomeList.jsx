import React, { useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import AddIncomeModal from "../AddIncomeModal/AddIncomeModal";
import IncomeItem from "../IncomeItem/IncomeItem";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "AT&T",
    theme: "통신",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "O",
    theme: "부동산",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    name: "SPHD",
    theme: "ETF",
  },
];

const IncomeList = () => {
  const renderIncomeItem = ({ item }) => <IncomeItem item={item} />;
  const [isAddIncomeModalOpen, setIsAddIncomeModalOpen] = useState(false);
  const [sortByDate, setSortByDate] = useState(true);

  const onPressAddIncome = () => {
    setIsAddIncomeModalOpen(true);
  };

  const toggleSortMode = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.income__label}>
        <Text style={styles.text__list}>배당수익 목록</Text>
        <View style={styles.container__sort}>
          <TouchableOpacity onPress={() => setSortByDate((prev) => !prev)}>
            <Text>{sortByDate ? "배당일순" : "금액순"}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <SafeAreaView style={{ marginTop: 10 }}>
        <FlatList
          data={DATA}
          renderItem={renderIncomeItem}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </SafeAreaView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addIncome} onPress={onPressAddIncome}>
          <Icon
            name="pluscircleo"
            size={16}
            color="#cdcdcd"
            style={{ marginRight: 10 }}
          />
          <Text style={{ color: "#999999" }}>새로운 배당수익 추가</Text>
        </TouchableOpacity>
      </View>
      <AddIncomeModal
        isAddIncomeModalOpen={isAddIncomeModalOpen}
        setIsAddIncomeModalOpen={setIsAddIncomeModalOpen}
      />
    </View>
  );
};

export default IncomeList;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  income__label: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  text__list: {
    fontSize: 18,
    marginLeft: 20,
    fontWeight: "600",
    color: "#666666",
  },
  text__sort: { fontSize: 14, marginRight: 20 },
  container__sort: {
    flexDirection: "row",
    marginRight: 20,
  },
  addIncome: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#cdcdcd",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    padding: 10,
  },
});
