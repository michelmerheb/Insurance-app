import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import TabScreens from "./TabScreens";
import CarInsuranceScreen from "../screens/CarInsuranceScreen";
import LifeInsuranceSelection from "../screens/LifeInsuranceScreens/LifeInsuranceSelection";
import EligibilityCriteriaScreen from "../screens/LifeInsuranceScreens/SharedLifeInsuranceScreens/EligibilityCriteriaScreen";
import UserDataScreen from "../screens/LifeInsuranceScreens/TermLifeInsurance/UserDataScreen";
import HealthLifestyle from "../screens/LifeInsuranceScreens/SharedLifeInsuranceScreens/HealthLifestyle";
import IdentificationMarital from "../screens/LifeInsuranceScreens/SharedLifeInsuranceScreens/IdentificationMaritalScreen";
import BeneficiaryDesignation from "../screens/LifeInsuranceScreens/SharedLifeInsuranceScreens/BeneficiaryDesignation";
import EmploymentOccupation from "../screens/LifeInsuranceScreens/SharedLifeInsuranceScreens/EmploymentOccupation";
import CoveragePreferences from "../screens/LifeInsuranceScreens/TermLifeInsurance/CoveragePreferences";
import PermanentCoveragePreferences from "../screens/LifeInsuranceScreens/PermanentLifeInsurance/PermanentCoveragePreferences";
import PetInformation from "../screens/PetInsuranceScreens/PetInformation";
import petDetails from "../screens/PetInsuranceScreens/petDetails";

const Stack = createStackNavigator();

export default function StackScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="TabScreens" component={TabScreens} />
      <Stack.Screen name="CarInsurance" component={CarInsuranceScreen} />
      <Stack.Screen
        name="LifeInsuranceSelection"
        component={LifeInsuranceSelection}
      />
      <Stack.Screen
        name="EligibilityCriteria"
        component={EligibilityCriteriaScreen}
      />
      <Stack.Screen name="UserData" component={UserDataScreen} />
      <Stack.Screen name="HealthLifestyle" component={HealthLifestyle} />
      <Stack.Screen
        name="IdentificationMarital"
        component={IdentificationMarital}
      />
      <Stack.Screen
        name="BeneficiaryDesignation"
        component={BeneficiaryDesignation}
      />
      <Stack.Screen
        name="EmploymentOccupation"
        component={EmploymentOccupation}
      />
      <Stack.Screen
        name="CoveragePreferences"
        component={CoveragePreferences}
      />
      <Stack.Screen
        name="PermanentCoveragePreferences"
        component={PermanentCoveragePreferences}
      />
      <Stack.Screen name="PetInformation" component={PetInformation} />
      <Stack.Screen name="PetDetails" component={petDetails} />
    </Stack.Navigator>
  );
}
