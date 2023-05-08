import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Login from "./src/components/Login";
import { Provider as PaperProvider } from "react-native-paper";
export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Login />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
