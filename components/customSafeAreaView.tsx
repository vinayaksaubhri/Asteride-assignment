import { ReactNode } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  children?: ReactNode | null;
  backgroundColor?: string;
  barStyle?: StatusBarStyle | null | undefined;
};

const CustomSafeAreaView: React.FC<Props> = ({
  children,
  backgroundColor = "#fff",
  barStyle,
}) => {
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
