import { StyleSheet } from "react-native";
import { HomesProvider } from "./hooks/useHomeData";
import HomeScreen from "./screen/homeScreen";

export default function App() {
  return (
    <HomesProvider>
      <HomeScreen />
    </HomesProvider>
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
