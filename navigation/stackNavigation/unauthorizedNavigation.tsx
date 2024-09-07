import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from "../../constant/routes";
import EmailScreen from "../../screen/emailScreen";
import OtpScreen from "../../screen/otpScreen";
type StackParamsList = {
  EmailScreen: undefined;
  OTPScreen: undefined;
};

const UnAuthorizedStack = createStackNavigator<StackParamsList>();

const UnAuthorizedNavigation = () => {
  return (
    <UnAuthorizedStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.EMAIL_SCREEN}
    >
      <UnAuthorizedStack.Screen
        name={ROUTES.EMAIL_SCREEN}
        component={EmailScreen}
      />
      <UnAuthorizedStack.Screen
        name={ROUTES.OTP_SCREEN}
        component={OtpScreen}
      />
    </UnAuthorizedStack.Navigator>
  );
};
export default UnAuthorizedNavigation;
