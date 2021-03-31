import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import { IsOpenContext } from "../Settings";

const SetAlarmModal = () => {
  const { setSelected, isModalOpen, setIsModalOpen } = useContext(
    IsOpenContext
  );

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <View style={styles.container}>
      <Modal
        isVisible={isModalOpen}
        onBackdropPress={() => {
          setSelected(null);
          setIsModalOpen(false);
        }}
        backdropOpacity={0.2}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.title}>알람 수신여부 설정</Text>
          <View
            style={{ alignSelf: "flex-start", marginTop: 30, marginLeft: 30 }}
          >
            <Text>정기 수입 알림</Text>
            <Text>정기 지출 알림</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SetAlarmModal;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    alignItems: "center",
    height: "40%",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  title: {
    alignSelf: "flex-start",
    fontSize: 20,
    fontWeight: "600",
    color: "#666666",
    marginTop: 30,
    marginLeft: 30,
  },
});
