import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import TabScreens from "./TabScreens";

const Stack = createStackNavigator();

export default function StackScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="TabScreens" component={TabScreens} />
    </Stack.Navigator>
  );
}
