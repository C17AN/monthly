import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Header } from "react-native-elements";
import SettingsScreen from "./screens/SettingsScreen/SettingsScreen";
import LogsScreen from "./screens/LogsScreen/LogsScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "Mon$ly", style: { color: "#fff" } }}
      />

      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="홈" component={HomeScreen} />
          <Tab.Screen name="지출 기록" component={LogsScreen} />
          <Tab.Screen name="설정" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
