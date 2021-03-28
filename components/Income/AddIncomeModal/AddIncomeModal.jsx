import React, { useState } from "react";
import Modal from "react-native-modal";
import { Input } from "react-native-elements";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
} from "react-native";
import {
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { ButtonGroup } from "react-native-elements";

const AddIncomeModal = ({ isAddIncomeModalOpen, setIsAddIncomeModalOpen }) => {
  const [stockName, setStockName] = useState("");
  const incomeMonthUpper = ["1월", "2월", "3월", "4월", "5월", "6월"];
  const incomeMonthLower = ["7월", "8월", "9월", "10월", "11월", "12월"];

  return (
    <View style={{ flex: 1 }}>
      <Modal
        isVisible={isAddIncomeModalOpen}
        onBackdropPress={() => setIsAddIncomeModalOpen(false)}
        backdropOpacity={0.2}
      >
        <View style={styles.incomeModal}>
          <Text style={styles.inputTitle}>정기 수입 입력</Text>
          <View style={styles.inputItem}>
            <Text style={styles.inputLabel}>제목</Text>
            <Input
              inputStyle={styles.modalInput}
              containerStyle={styles.inputContainer}
              placeholder="제목을 입력하세요"
              value={stockName}
              onChangeText={(e) => setStockName(e)}
            />
          </View>
          <View style={styles.inputItem}>
            <Text style={styles.inputLabel}>금액</Text>
            <Input
              style={styles.modalInput}
              containerStyle={styles.inputContainer}
              placeholder="금액을 입력하세요"
              value={stockName}
              onChangeText={(e) => setStockName(e)}
            />
          </View>
          <View style={styles.inputItem}>
            <Text style={styles.inputLabel}>수입 주기</Text>
            <ButtonGroup
              buttons={incomeMonthUpper}
              containerStyle={{ height: 30 }}
              buttonContainerStyle={styles.monthButton}
              selectMultiple={true}
              selectedButtonStyle={{ backgroundColor: "red" }}
            ></ButtonGroup>
            <ButtonGroup
              buttons={incomeMonthLower}
              containerStyle={{ height: 30 }}
              buttonContainerStyle={styles.monthButton}
            ></ButtonGroup>
          </View>
          <TouchableOpacity onPress={() => setIsAddIncomeModalOpen(false)}>
            <Text>취소</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsAddIncomeModalOpen(false)}>
            <Text>완료</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  incomeModal: {
    backgroundColor: "white",
    borderRadius: 10,
    minHeight: 500,
    borderColor: "#aaaaaa",
    borderWidth: 1,
    padding: 30,
  },
  monthButton: { borderRadius: 25 },
  inputTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#666666",
    marginBottom: 25,
  },

  inputItem: {
    marginTop: 5,
  },
  inputLabel: {
    marginBottom: 5,
  },
  modalInput: {
    color: "blue",
    fontSize: 14,
  },
  inputContainer: {
    width: "100%",
  },
});

export default AddIncomeModal;
