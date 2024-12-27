import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import TabScreens from "./TabScreens";
import CarInsuranceScreen from "../screens/CarInsurance/CarInsuranceScreen";
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
import PetDetails from "../screens/PetInsuranceScreens/PetDetails";
import HomeInformation from "../screens/HomeInsurance/HomeInformation";
import HomeDetails from "../screens/HomeInsurance/HomeDetails";
import MedicalInformation from "../screens/MedicalInsurance/MedicalInformation";
import TravelInformation from "../screens/TravelInsurance/TravelInformation";
import CameraScreen from "../screens/CarInsurance/CameraScreen";
import CarInformation from "../screens/CarInsurance/CarInformation";

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
      <Stack.Screen name="PetDetails" component={PetDetails} />
      <Stack.Screen name="HomeInformation" component={HomeInformation} />
      <Stack.Screen name="HomeDetails" component={HomeDetails} />
      <Stack.Screen name="MedicalInformation" component={MedicalInformation} />
      <Stack.Screen name="TravelInformation" component={TravelInformation} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="CarInformation" component={CarInformation} />
    </Stack.Navigator>
  );
}
