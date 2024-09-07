import { ReactNode } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
} from "react-native";

type Props = {
  children?: ReactNode | null;
};

const CustomSafeAreaView: React.FC<Props> = ({ children }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <StatusBar />
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </KeyboardAvoidingView>
  );
};
export default CustomSafeAreaView;
