import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

import { useUser } from "../hooks/useUser";
import OtpInput from "../components/otpInput";
import ROUTES from "../constant/routes";

const OTP = () => {
  const navigation = useNavigation();
  const { setUser } = useUser();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.backButtonContainer}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <FontAwesome name="angle-left" size={24} color="black" />
      </Pressable>
      <Text style={styles.headingTextStyle}>Verification</Text>
      <Text style={styles.subHeadingTextStyle}>
        Please type the verification code sent to your phone
      </Text>
      <View style={{ marginVertical: 60 }}>
        <OtpInput
          onOtpSubmit={(otp) => {
            setUser(true);
          }}
        />
      </View>
      <Text style={styles.resendTextStyle}>
        Resend code in
        <Text style={styles.timerStyle}> 00:30</Text>
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Verify Phone"
          onPress={() => {
            console.log("Verify Phone");
            setUser(true);
          }}
        />
      </View>
    </View>
  );
};
export default OTP;
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
    lineHeight: 24,
  },
  resendTextStyle: {
    alignSelf: "center",
    fontSize: 13,
    marginBottom: 16,
    lineHeight: 24,
  },
  timerStyle: {},
});
