import { Platform, StyleSheet, ViewProps } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
const CustomSafeAreaView: React.FC<ViewProps> = ({ children, ...rest }) => {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? top : 0,
        paddingBottom: Platform.OS === "android" ? bottom : 0,
        flex: 1,
      }}
      {...rest}
    >
      {children}
    </SafeAreaView>
  );
};
export default CustomSafeAreaView;
const styles = StyleSheet.create({});
