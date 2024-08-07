import { Stack } from "expo-router";

export default function layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "indigo",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "TodoApp",
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          title: "Welcome, save your time...",
        }}
      />
    </Stack>
  );
}
