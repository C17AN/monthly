import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorPalette from "react-native-color-palette";
import Modal from "react-native-modal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IsOpenContext } from "../Settings";
import { ThemeContext } from "../../../App";

const SetColorModal = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { setSelected, isModalOpen, setIsModalOpen } = useContext(
    IsOpenContext
  );

  const setThemeFromStorage = async (value) => {
    try {
      await AsyncStorage.setItem("theme", value);
      setTheme(value);
    } catch (e) {
      // saving error
    }
  };

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
          <Text style={styles.title}>테마 색상 설정</Text>
          <ColorPalette
            onChange={(color) => {
              alert(`Color selected: ${color}`);
              setThemeFromStorage(color);
            }}
            defaultColor={"#C0392B"}
            colors={[
              "#c0ebeb",
              "#cf97ba",
              "#de9a7c",
              "#f7e516",
              "#eb4334",
              "#68cc8e",
              "#85c72e",
              "#1bb568",
              "#1ba0b5",
              "#97b7cf",
              "#2a48b5",
              "#979bcf",
            ]}
            title={""}
          />
        </View>
      </Modal>
    </View>
  );
};

export default SetColorModal;

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
