import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { setMedicalInformation } from "../../redux/slices/medicalInsuranceSlice";
import InsuranceHeader from "../../components/InsuranceHeader";
import TextBox from "../../components/TextBox";
import CustomPicker from "../../components/CustomPicker";
import Button from "../../components/Button";

export default function MedicalInformation({ navigation }: any) {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    hospitalizationClass: Yup.string().required("Field is required."),
    diagnosticTests: Yup.string().required("Field is required."),
    addFamily: Yup.string(),
  });
  return (
    <Formik
      initialValues={{
        hospitalizationClass: "",
        diagnosticTests: "",
        addFamily: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        {
          dispatch(setMedicalInformation(values));
          navigation.navigate("TabScreens");
        }
      }}
    >
      {({ handleSubmit }) => (
        <SafeAreaView style={styles.container}>
          <InsuranceHeader title="Medical Insurance" navigation={navigation} />
          <CustomPicker
            name="hospitalizationClass"
            placeholder="Hospitalization Class
"
            options={[
              { label: "First class (Private Room)", value: "First class" },
              {
                label: "Second class (Semi-private room)",
                value: "Second class",
              },
            ]}
          />
          <CustomPicker
            name="diagnosticTests"
            placeholder="Diagnostic Tests & Imaging
"
            options={[
              {
                label: "Yes, with a 0% co-pay",
                value: "Yes, with a 0% co-pay",
              },
              {
                label: "Yes, with a 15% co-pay",
                value: "Yes, with a 15% co-pay",
              },
              { label: "No", value: "No" },
            ]}
          />
          <TextBox
            name="addFamily"
            label="Add Family Member(s)"
            placeholder="Add family members (optional)"
          />
          <Button title="Get my quote" onPress={handleSubmit} />
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
