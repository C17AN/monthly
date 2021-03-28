import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Header } from "react-native-elements";
import SettingsScreen from "./screens/SettingsScreen/SettingsScreen";
import PortfolioScreen from "./screens/PortfolioScreen/PortfolioScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import CalculatorScreen from "./screens/CaculatorScreen/CalculatorScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import EntypoIcons from "react-native-vector-icons/Entypo";
import AntdIcons from "react-native-vector-icons/AntDesign";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{
          text: "Mon$ly",
          style: { color: "#fff" },
        }}
      />

      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
          shifting={true}
          barStyle={{ backgroundColor: "#afd4ed" }}
        >
          <Tab.Screen
            name="계산기"
            component={CalculatorScreen}
            options={{
              tabBarLabel: "계산기",
              tabBarIcon: ({ color }) => (
                <EntypoIcons name="calculator" color={color} size={24} />
              ),
              tabBarColor: "#f58b7d",
            }}
          />
          <Tab.Screen
            name="홈"
            component={HomeScreen}
            options={{
              tabBarLabel: "홈",
              tabBarIcon: ({ color }) => (
                <EntypoIcons name="home" color={color} size={24} />
              ),
              tabBarColor: "#afd4ed",
            }}
          />
          <Tab.Screen
            name="포트폴리오"
            component={PortfolioScreen}
            options={{
              tabBarLabel: "포트폴리오",
              tabBarIcon: ({ color }) => (
                <AntdIcons name="piechart" color={color} size={24} />
              ),
              tabBarColor: "#80d99c",
            }}
          />
          <Tab.Screen
            name="설정"
            component={SettingsScreen}
            options={{
              tabBarLabel: "설정",
              tabBarIcon: ({ color }) => (
                <AntdIcons name="setting" color={color} size={24} />
              ),
              tabBarColor: "#c4be47",
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
