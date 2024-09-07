import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet } from "react-native";
import { HomesProvider } from "./hooks/useHomeData";
import { UserProvider } from "./hooks/useUser";
import Navigation from "./navigation";
import CustomSafeAreaView from "./components/customSafeAreaView";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <UserProvider>
          <HomesProvider>
            <CustomSafeAreaView>
              <Navigation />
            </CustomSafeAreaView>
          </HomesProvider>
        </UserProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
