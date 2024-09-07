import { SafeAreaView, StyleSheet } from "react-native";
import { HomesProvider } from "./hooks/useHomeData";
import HomeScreen from "./screen/homeScreen";
import Navigation from "./navigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <HomesProvider>
        <SafeAreaView style={styles.container}>
          <Navigation />
        </SafeAreaView>
      </HomesProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
