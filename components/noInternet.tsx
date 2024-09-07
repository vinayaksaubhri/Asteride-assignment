import {
  Button,
  GestureResponderEvent,
  StyleSheet,
  Text,
  View,
} from "react-native";

type NoInternetProps = {
  onPressReload?: (event: GestureResponderEvent) => void;
};

const NoInternet: React.FC<NoInternetProps> = ({ onPressReload }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingTextStyle}>Oops! No connection</Text>

      <Button title="Reload" onPress={onPressReload} />
    </View>
  );
};
export default NoInternet;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    gap: 10,
  },

  headingTextStyle: {
    textAlign: "center",
    fontSize: 32,
  },
});
