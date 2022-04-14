import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { Home } from "screens";
import { BottomNavigation } from "navigations";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}