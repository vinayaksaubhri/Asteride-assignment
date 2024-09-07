import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from "../../constant/routes";
import HomeScreen from "../../screen/homeScreen";
import HomeDetailsScreens from "../../screen/homeDetailsScreens";
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
      <AuthorizedStack.Screen
        name={ROUTES.HOME_DETAILS_SCREEN}
        component={HomeDetailsScreens}
        options={{
          headerShown: true,
          title: "Home Details",
        }}
      />
    </AuthorizedStack.Navigator>
  );
};
export default AuthorizedNavigation;
