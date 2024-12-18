import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import TabScreens from "./TabScreens";
import GetQuoteScreen from "../screens/GetQuoteScreen";
import InjurySelectorScreen from "../screens/InjurySelectorScreen";

const Stack = createStackNavigator();

export default function StackScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="TabScreens" component={TabScreens} />
      <Stack.Screen name="GetQuote" component={GetQuoteScreen} />
      <Stack.Screen name="InjurySelector" component={InjurySelectorScreen} />
    </Stack.Navigator>
  );
}
