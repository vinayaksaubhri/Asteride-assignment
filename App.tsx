import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet } from "react-native";
import { HomesProvider } from "./hooks/useHomeData";
import { UserProvider } from "./hooks/useUser";
import Navigation from "./navigation";

export default function App() {
  return (
    <NavigationContainer>
      <UserProvider>
        <HomesProvider>
          <SafeAreaView style={styles.container}>
            <Navigation />
          </SafeAreaView>
        </HomesProvider>
      </UserProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
