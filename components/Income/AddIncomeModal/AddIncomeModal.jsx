import React, { useState } from "react";
import Modal from "react-native-modal";
import { Input, Button } from "react-native-elements";
import { Pressable, StyleSheet, Text, View, Dimensions } from "react-native";
import {
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { ButtonGroup } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";
import { day, incomeMonthUpper, incomeMonthLower } from "../../../utils/data";

const AddIncomeModal = ({ isAddIncomeModalOpen, setIsAddIncomeModalOpen }) => {
  const [incomeName, setIncomeName] = useState("");
  const [incomeCost, setIncomeCost] = useState("");

  return (
    <View style={{ flex: 1 }}>
      <Modal
        isVisible={isAddIncomeModalOpen}
        onBackdropPress={() => setIsAddIncomeModalOpen(false)}
        backdropOpacity={0.2}
      >
        <View style={styles.incomeModal}>
          <Text style={styles.title}>정기 수입 입력</Text>
          <View style={styles.inputItem}>
            <Text style={styles.inputLabel}>제목</Text>
            <Input
              inputStyle={styles.inputTitle}
              containerStyle={styles.inputContainer}
              placeholder="제목을 입력하세요"
              value={incomeName}
              onChangeText={(e) => setIncomeName(e)}
            />
          </View>
          <View style={styles.inputTitle}>
            <Text style={styles.inputLabel}>금액</Text>
            <Input
              style={styles.inputCost}
              containerStyle={styles.inputContainer}
              placeholder="금액을 입력하세요"
              value={incomeCost}
              onChangeText={(e) => setIncomeCost(e)}
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
          <View style={[styles.inputItem, { marginTop: 20 }]}>
            <Text style={styles.inputLabel}>수입일</Text>
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              items={day}
              style={{ fontSize: 50 }}
              placeholder={{ label: "날짜를 선택하세요" }}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => setIsAddIncomeModalOpen(false)}
              title="취소"
              containerStyle={styles.cancelButton}
              buttonStyle={{ backgroundColor: "#db5858" }}
            />
            <Button
              onPress={() => setIsAddIncomeModalOpen(false)}
              title="추가"
              containerStyle={styles.confirmButton}
              buttonStyle={{ backgroundColor: "#70cfc5" }}
            />
          </View>
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
    padding: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  monthButton: { borderRadius: 25 },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#666666",
    marginBottom: 25,
  },

  inputItem: {
    marginTop: 5,
  },
  inputTitle: {
    fontSize: 14,
  },
  inputCost: {
    fontSize: 14,
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
  buttonContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  cancelButton: {
    width: 70,
    color: "#db5858",
    borderRadius: 6,
    marginRight: 15,
  },
  confirmButton: {
    width: 70,
    backgroundColor: "#a4c8e0",
    borderRadius: 6,
  },
});

export default AddIncomeModal;
