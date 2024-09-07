import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from "../../constant/routes";
import HomeScreen from "../../screen/homeScreen";
type StackParamsList = {
  HomeScreen: undefined;
  HomeDetailsScreen: undefined;
};

const AuthorizedStack = createStackNavigator<StackParamsList>();

const AuthorizedNavigation = () => {
  return (
    <AuthorizedStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.HOME_SCREEN}
    >
      <AuthorizedStack.Screen
        name={ROUTES.HOME_SCREEN}
        component={HomeScreen}
      />
    </AuthorizedStack.Navigator>
  );
};
export default AuthorizedNavigation;
