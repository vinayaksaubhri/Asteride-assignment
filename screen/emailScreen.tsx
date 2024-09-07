import React, { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import ROUTES from "../constant/routes";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { Pressable, Text } from "react-native";

const Phone = () => {
  const [Phone, setPhone] = useState("");
  const handleLogin = () => {
    if (Phone === "") {
      Alert.alert("Phone number is required");
      return;
    }
    navigation.navigate(ROUTES.OTP_SCREEN);
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.headingTextStyle}>Phone</Text>
      <Text style={styles.subHeadingTextStyle}>Please enter your Phone.</Text>
      <TextInput
        placeholder="Phone"
        value={Phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        style={styles.input}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Send Code"
          onPress={() => {
            handleLogin();
          }}
        />
      </View>
    </View>
  );
};
export default Phone;
const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    justifyContent: "flex-end",
    flex: 1,
  },
  backButtonContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
  },
  container: {
    padding: 24,
    paddingBottom: 36,
    flex: 1,
    flexDirection: "column",
  },
  headingTextStyle: {
    alignSelf: "flex-start",
    fontSize: 34,
    marginBottom: 16,
    marginTop: 30,
  },

  subHeadingTextStyle: {
    alignSelf: "flex-start",
    fontSize: 18,
    marginBottom: 16,
    lineHeight: 24,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 18,
  },
});
