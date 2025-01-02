import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { handleSubmitUtility } from "../../../utility/handleSubmitUtility";
import type { RootState } from "../../../redux/store";
import TextBox from "../../../components/TextBox";
import CustomPicker from "../../../components/CustomPicker";
import Button from "../../../components/Button";
import InsuranceHeader from "../../../components/InsuranceHeader";

export default function HealthLifestyle({ navigation }: any) {
  const dispatch = useDispatch();
  const selectedType = useSelector(
    (state: RootState) => state.lifeInsurance.selectedLifeInsuranceType
  );

  const validationSchema = Yup.object({
    height: Yup.string().required("Height is required"),
    weight: Yup.string().required("Weight is required"),
    smoking: Yup.string().required("Smoking is required"),
    alcohol: Yup.string().required("Alcohol consumption is required"),
    lifestyle: Yup.string().required("Lifestyle is required"),
  });

  return (
    <Formik
      initialValues={{
        height: "",
        weight: "",
        smoking: "",
        alcohol: "",
        medicalHistory: "",
        medications: "",
        lifestyle: "",
        highRiskActivities: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handleSubmitUtility({
          values,
          selectedType,
          dispatch,
          navigate: navigation.navigate,
          nextScreen: "IdentificationMarital",
        });
      }}
    >
      {({ handleSubmit }) => (
        <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <InsuranceHeader
              title="Health and Lifestyle Questionnaire"
              navigation={navigation}
            />
            <TextBox
              name="height"
              label="Height (cm)"
              placeholder="Enter your height"
              keyboardType="numeric"
            />
            <TextBox
              name="weight"
              label="Weight (kg)"
              placeholder="Enter your weight"
              keyboardType="numeric"
            />
            <CustomPicker
              name="smoking"
              placeholder="Choose your smoking status"
              options={[
                { label: "Yes", value: "Yes" },
                { label: "No", value: "no" },
              ]}
            />
            <TextBox
              name="alcohol"
              label="Alcohol Consumption"
              placeholder="e.g., once a week, never)"
            />
            <TextBox
              name="medicalHistory"
              label="Medical History (if any)"
              placeholder="e.g., chronic illnesses, surgeries)"
            />
            <TextBox
              name="medications"
              label="Current Medications (if any)"
              placeholder="Enter your current medications"
            />
            <TextBox
              name="lifestyle"
              label="Lifestyle Habits"
              placeholder="e.g., exercise frequency"
            />
            <TextBox
              name="highRiskActivities"
              label="Participation in High-Risk Activities (if any)"
              placeholder="e.g., skydiving"
            />
            <Button title="Continue" onPress={handleSubmit} />
          </ScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 20,
    color: "#1A2A6C",
  },
});
