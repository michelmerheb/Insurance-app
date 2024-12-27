import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  setPetDetails,
  setPetInformation,
} from "../../redux/slices/petInsuranceSlice";
import InsuranceHeader from "../../components/InsuranceHeader";
import TextBox from "../../components/TextBox";
import CustomPicker from "../../components/CustomPicker";
import Button from "../../components/Button";

export default function PetDetails({ navigation }: any) {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    petTypeBreed: Yup.string().required("Your pet name is required."),
    dogSpayed: Yup.string().required("Your pet breed is required"),
    petRole: Yup.string().required("Your pet gender is required"),
  });
  return (
    <Formik
      initialValues={{
        petTypeBreed: "",
        dogSpayed: "",
        petRole: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(setPetDetails(values));
        navigation.navigate("TabScreens");
      }}
    >
      {({ handleSubmit }) => (
        <SafeAreaView style={styles.container}>
          <InsuranceHeader
            title="Tell us more about your pet"
            navigation={navigation}
          />

          <TextBox
            name="petTypeBreed"
            label="What type of breed is your pet?"
            placeholder="Enter your pet's type of breed"
          />
          <CustomPicker
            name="dogSpayed"
            placeholder="Is your pet spayed?"
            options={[
              { label: "Yes", value: "Yes" },
              { label: "No", value: "No" },
            ]}
          />
          <CustomPicker
            name="petRole"
            placeholder="Is your pet an assistance animal or therapy pet?"
            options={[
              { label: "Yes", value: "Yes" },
              { label: "No", value: "No" },
            ]}
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
