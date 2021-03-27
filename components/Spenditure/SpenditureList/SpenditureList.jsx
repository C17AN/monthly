import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import SpenditureItem from "../SpenditureItem/SpenditureItem";

const DATA = [
  {
    id: "bd7acaea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "쿠팡 로켓배송",
  },
  {
    id: "3ac68cfc-c605-48d3-a4f8-fbd91aa97f63",
    name: "네이버 프라임",
  },
  {
    id: "58694b0f-3da1-471f-bd96-145571e29d72",
    name: "유튜브 프리미엄",
  },
  {
    id: "58694g0f-3da1-471f-bd96-145571e29d72",
    name: "Netflix",
  },
];

const SpenditureList = () => {
  const renderSpenditureItem = ({ item }) => <SpenditureItem item={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.spenditure__label}>
        <Text style={styles.text__list}>정기구독 목록</Text>
        <Text style={styles.text__sort}>정렬</Text>
      </View>
      <SafeAreaView style={{ marginTop: 10 }}>
        <FlatList
          data={DATA}
          renderItem={renderSpenditureItem}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </SafeAreaView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addSpenditure}>
          <Icon
            name="pluscircleo"
            size={16}
            color="#999999"
            style={{ marginRight: 10 }}
          />
          <Text style={{ color: "#999999" }}>새로운 정기구독 지출 추가</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SpenditureList;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  spenditure__label: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  text__list: {
    fontSize: 18,
    fontWeight: "600",
    color: "#666666",
    marginLeft: 20,
  },
  text__sort: { fontSize: 14, marginRight: 20 },
  buttonContainer: {},
  addSpenditure: {
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
