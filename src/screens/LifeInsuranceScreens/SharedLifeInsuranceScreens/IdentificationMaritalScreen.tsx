import { SafeAreaView, StyleSheet, Text, View } from "react-native";
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

export default function IdentificationMarital({ navigation }: any) {
  const dispatch = useDispatch();
  const selectedType = useSelector(
    (state: RootState) => state.insurance.selectedLifeInsuranceType
  );

  const validationSchema = Yup.object({
    idNumber: Yup.string().required("ID Number is required"),
    maritalStatus: Yup.string().required("Marital Status is required"),
  });

  return (
    <Formik
      initialValues={{
        idNumber: "",
        maritalStatus: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handleSubmitUtility({
          values,
          selectedType,
          dispatch,
          navigate: navigation.navigate,
          nextScreen: "BeneficiaryDesignation",
        });
      }}
    >
      {({ handleSubmit }) => (
        <SafeAreaView style={styles.container}>
          <InsuranceHeader
            title="Identification and Marital Status"
            navigation={navigation}
          />
          <TextBox
            name="idNumber"
            label="Identification Number"
            placeholder="Enter your identification number"
            keyboardType="numeric"
          />
          <CustomPicker
            name="maritalStatus"
            placeholder="Select your marital status"
            options={[
              { label: "Single", value: "Single" },
              { label: "Married", value: "Married" },
              { label: "Divorced", value: "Divorced" },
              { label: "Widowed", value: "Widowed" },
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
  title: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 20,
    color: "#1A2A6C",
  },
});
