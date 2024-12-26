import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { handleSubmitUtility } from "../../../utility/handleSubmitUtility";
import type { RootState } from "../../../redux/store";
import InsuranceHeader from "../../../components/InsuranceHeader";
import TextBox from "../../../components/TextBox";
import Button from "../../../components/Button";
import DateOfBirthPicker from "../../../components/DatePicker";

export default function BeneficiaryDesignation({ navigation }: any) {
  const dispatch = useDispatch();
  const selectedType = useSelector(
    (state: RootState) => state.insurance.selectedLifeInsuranceType
  );

  const validationSchema = Yup.object({
    beneficiaryName: Yup.string().required("Beneficiary Name is required"),
    relationship: Yup.string().required("Relationship is required"),
    dateOfBirth: Yup.string().required("Date of Birth is required"),
    beneficiaryNumber: Yup.string().required("Beneficiary Number is required"),
  });
  return (
    <Formik
      initialValues={{
        beneficiaryName: "",
        relationship: "",
        dateOfBirth: "",
        beneficiaryNumber: "",
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
      }}
    >
      {({ handleSubmit }) => (
        <SafeAreaView style={styles.container}>
          <InsuranceHeader
            title="Beneficiary Designation"
            navigation={navigation}
          />
          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => navigation.navigate("EmploymentOccupation")}
          >
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <TextBox
            name="beneficiaryName"
            label="Beneficiary Name"
            placeholder="Enter the beneficiary name"
          />
          <TextBox
            name="relationship"
            label="Relationship to Policyholder"
            placeholder="Enter the relationship to the policyholder"
          />
          <DateOfBirthPicker />

          <TextBox
            name="beneficiaryNumber"
            label="Beneficiary Phone Number"
            placeholder="Enter the beneficiary phone number"
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
  title: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 20,
    color: "#1A2A6C",
  },
  skipButton: {
    alignSelf: "flex-end",
    padding: 10,
    backgroundColor: "#1A2A6C",
    borderRadius: 10,
  },
  skipText: {
    color: "#fff",
  },
});
