import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SetAlarmModal from "./SetAlarmModal/SetAlarmModal";
import SetColorModal from "./SetColorModal/SetColorModal";
import SetInfoModal from "./SetInfoModal/SetInfoModal";

const SettingsModal = ({ selected }) => {
  const renderModal = () => {
    switch (selected) {
      case 1:
        return <SetColorModal />;
      case 2:
        return <SetAlarmModal />;
      case 3:
        return <SetInfoModal />;
      default:
        return <View />;
    }
  };

  return <View>{renderModal()}</View>;
};

export default SettingsModal;

const styles = StyleSheet.create({});
