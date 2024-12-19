import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff7ed"
        },
        headerTintColor: "black",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false
        }}
      />
      <Stack.Screen name="detail" />
    </Stack>
  );
}
