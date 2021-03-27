import React from "react";
import Modal from "react-native-modal";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
} from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

const AddIncomeModal = ({ isAddIncomeModalOpen, setIsAddIncomeModalOpen }) => {
  return (
    <View style={{ flex: 1 }}>
      <Modal
        isVisible={isAddIncomeModalOpen}
        onBackdropPress={() => setIsAddIncomeModalOpen(false)}
        backdropOpacity={0.2}
      >
        <View style={styles.incomeModal}>
          <Text style={styles.inputText}>배당 정보 입력</Text>
          <Button
            title="Hide modal"
            onPress={() => setIsAddIncomeModalOpen(false)}
          />
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
  },
  inputText: {
    fontSize: 24,
    margin: 30,
  },
});

export default AddIncomeModal;
