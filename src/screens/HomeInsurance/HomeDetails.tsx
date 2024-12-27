import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setHomeDetails } from "../../redux/slices/homeInsuranceSlice";
import InsuranceHeader from "../../components/InsuranceHeader";
import TextBox from "../../components/TextBox";
import Button from "../../components/Button";

export default function HomeDetails({ navigation }: any) {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    homeAddress: Yup.string().required("Field is required."),
    city: Yup.string().required("Field is required."),
    state: Yup.string().required("Field is required."),
    zipCode: Yup.string().required("Field is required."),
  });
  return (
    <Formik
      initialValues={{
        homeAddress: "",
        city: "",
        state: "",
        zipCode: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        {
          dispatch(setHomeDetails(values));
          navigation.navigate("TabScreens");
        }
      }}
    >
      {({ handleSubmit }) => (
        <SafeAreaView style={styles.container}>
          <InsuranceHeader title="Home Insurance" navigation={navigation} />
          <TextBox
            name="homeAddress"
            placeholder="Home Address"
            label="Home Address"
          />

          <TextBox name="city" placeholder="City" label="City" />
          <TextBox
            name="state"
            placeholder="State/Province"
            label="State/Province"
          />
          <TextBox
            name="zipCode"
            placeholder="Zip/Postal Code"
            label="Zip/Postal Code"
            keyboardType="numeric"
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
