import React, { useState, createContext } from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import { ListItem } from "react-native-elements";
import SettingsModal from "./SettingsModal";

const Settings = () => {
  const [selected, setSelected] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const settingList = [
    { id: 1, name: "테마 색상 지정", subtitle: "테마의 컬러 톤을 설정합니다." },
    {
      id: 2,
      name: "알림 설정",
      subtitle: "알림 수신 여부를 설정합니다.",
    },
    { id: 3, name: "버전 정보", subtitle: "현재 버전 정보 : 1.0.0" },
  ];

  return (
    <View>
      {settingList.map((l, i) => (
        <TouchableOpacity key={i} onPress={() => setSelected(l.id)}>
          <ListItem id={l.id} key={i} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle style={styles.subtitle}>
                {l.subtitle}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
      ))}
      <IsOpenContext.Provider
        value={{
          setSelected: setSelected,
          isModalOpen: isModalOpen,
          setIsModalOpen: setIsModalOpen,
        }}
      >
        <SettingsModal selected={selected} />
      </IsOpenContext.Provider>
    </View>
  );
};

export const IsOpenContext = createContext();
export default Settings;

const styles = StyleSheet.create({
  subtitle: {
    color: "#8c8e8f",
    marginVertical: 5,
  },
});
