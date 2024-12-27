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
    (state: RootState) => state.lifeInsurance.selectedLifeInsuranceType
  );

  const validationSchema = Yup.object({
    PermanentCoverageAmount: Yup.string().required(
      "Beneficiary Name is required"
    ),
    premiumPaymentPeriod: Yup.string().required("Relationship is required"),
  });
  return (
    <Formik
      initialValues={{
        PermanentCoverageAmount: "",
        premiumPaymentPeriod: "",
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
            name="PermanentCoverageAmount"
            placeholder="Enter your desired coverage amount"
            options={[
              { label: "$100,000", value: "100,000" },
              { label: "$250,000", value: "250,000" },
              { label: "$500,000", value: "300,000" },
              { label: "$1,000,000", value: "1,000,000" },
            ]}
          />

          <CustomPicker
            name="premiumPaymentPeriod"
            placeholder="Enter the premium payment period"
            options={[
              { label: "Lifetime", value: "Lifetime" },
              { label: "Limited Period- 10 years", value: "10 years" },
              { label: "Limited Period- 20 years", value: "20 years" },
            ]}
          />

          <CustomPicker
            name="cashValueGrowth"
            placeholder="Enter the cash value growth preference"
            options={[
              {
                label: "Guaranteed Growth (fixed interest)",
                value: "Guaranteed Growth",
              },
              {
                label: "Investment-Linked Growth (variable interest)",
                value: "Investment-Linked Growth",
              },
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
