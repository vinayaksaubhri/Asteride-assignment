import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import ROUTES from "../constant/routes";

export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState("");

  const handleLogin = () => {
    if (phone === "") {
      Alert.alert("Phone number is required");
      return;
    }
    navigation.navigate(ROUTES.OTP_SCREEN);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
        keyboardType="number-pad"
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});
