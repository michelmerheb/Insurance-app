import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../redux/store";
import InsuranceHeader from "../../../components/InsuranceHeader";
import TextBox from "../../../components/TextBox";
import Button from "../../../components/Button";
import { handleSubmitUtility } from "../../../utility/handleSubmitUtility";

export default function EmploymentOccupation({ navigation }: any) {
  const dispatch = useDispatch();
  const selectedType = useSelector(
    (state: RootState) => state.insurance.selectedLifeInsuranceType
  );

  const validationSchema = Yup.object({
    occupation: Yup.string().required("Occupation is required"),
    employerName: Yup.string().required("Employer Name is required"),
  });

  return (
    <Formik
      initialValues={{
        occupation: "",
        employerName: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handleSubmitUtility({
          values,
          selectedType,
          dispatch,
          navigate: navigation.navigate,
          nextScreen: "EmploymentOccupation",
        });

        if (selectedType === "term") {
          navigation.navigate("CoveragePreferences");
        } else if (selectedType === "permanent") {
          navigation.navigate("PermanentCoveragePreferences");
        }
      }}
    >
      {({ handleSubmit }) => (
        <SafeAreaView style={styles.container}>
          <InsuranceHeader
            title="Employment and occupation"
            navigation={navigation}
          />
          <TextBox
            name="occupation"
            label="Occupation"
            placeholder="Enter your occupation"
          />

          <TextBox
            name="employerName"
            label="Employer Name "
            placeholder="Enter your employer name"
          />
          <Button title="Continue" onPress={handleSubmit} />
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
});
