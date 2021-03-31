import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Settings from "../../components/Settings/Settings";
import Container from "../../components/Container";
import { ScrollView } from "react-native-gesture-handler";

const SettingsScreen = () => {
  return (
    <Container>
      <ScrollView>
        <Settings />
      </ScrollView>
    </Container>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
