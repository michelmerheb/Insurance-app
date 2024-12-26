import { StyleSheet, Text, SafeAreaView, Dimensions, View } from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../redux/store";
import CustomPicker from "../../../components/CustomPicker";
import Button from "../../../components/Button";
import InsuranceHeader from "../../../components/InsuranceHeader";
import { handleSubmitUtility } from "../../../utility/handleSubmitUtility";

export default function CoveragePreferences({ navigation }: any) {
  const dispatch = useDispatch();
  const selectedType = useSelector(
    (state: RootState) => state.insurance.selectedLifeInsuranceType
  );

  const validationSchema = Yup.object({
    coverageAmount: Yup.string().required("Beneficiary Name is required"),
    policyDuration: Yup.string().required("Relationship is required"),
  });
  return (
    <Formik
      initialValues={{
        coverageAmount: "",
        policyDuration: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handleSubmitUtility({
          values,
          selectedType,
          dispatch,
          navigate: navigation.navigate,
          nextScreen: "TabScreens",
        });
      }}
    >
      {({ handleSubmit }) => (
        <SafeAreaView style={styles.container}>
          <InsuranceHeader
            title="Coverage Preferences"
            navigation={navigation}
          />
          <CustomPicker
            name="coverageAmount"
            placeholder="Enter your desired coverage amount"
            options={[
              { label: "$100,000", value: "100,000" },
              { label: "$200,000", value: "200,000" },
              { label: "$500,000", value: "300,000" },
              { label: "$1,000,000", value: "1,000,000" },
            ]}
          />
          <CustomPicker
            name="policyDuration"
            placeholder="Enter the policy duration"
            options={[
              { label: "10 years", value: "10" },
              { label: "20 years", value: "20" },
              { label: "30 years", value: "30" },
            ]}
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
