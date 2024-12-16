import { NavigationContainer } from "@react-navigation/native";
import StackScreens from "./StackScreens";

export default function NavigationContainerScreen() {
  return (
    <NavigationContainer>
      <StackScreens />
    </NavigationContainer>
  );
}
