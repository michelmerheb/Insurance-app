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

export default function PetInformation({ navigation }: any) {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    petName: Yup.string().required("Your pet name is required."),
    petBreed: Yup.string().required("Your pet breed is required"),
    petGender: Yup.string().required("Your pet gender is required"),
    petAge: Yup.string().required("Your pet age is required"),
  });
  return (
    <Formik
      initialValues={{
        petName: "",
        petBreed: "",
        petGender: "",
        petAge: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        {
          dispatch(setPetInformation(values));
          navigation.navigate("PetDetails");
        }
      }}
    >
      {({ handleSubmit }) => (
        <SafeAreaView style={styles.container}>
          <InsuranceHeader
            title="Tell us about your furry friend"
            navigation={navigation}
          />

          <TextBox
            name="petName"
            label="Pet's Name"
            placeholder="Enter your pet's name"
          />

          <CustomPicker
            name="petBreed"
            placeholder="Are they a dog or cat?"
            options={[
              { label: "Dog", value: "Dog" },
              { label: "Cat", value: "Cat" },
            ]}
          />
          <CustomPicker
            name="petGender"
            placeholder="Is your pet a Male or Female?"
            options={[
              { label: "Male", value: "Male" },
              { label: "Female", value: "Female" },
            ]}
          />
          <CustomPicker
            name="petAge"
            placeholder="How old is your pet?"
            options={[
              { label: "0-7 weeks old", value: "0-7" },
              { label: "8 weeks to 12 months old", value: "8-12" },
              { label: "1 year old", value: "1" },
              { label: "2 years old", value: "2" },
              { label: "3 years old", value: "3" },
              { label: "4 years old", value: "4" },
              { label: "5 years old", value: "5" },
              { label: "6 years old", value: "6" },
              { label: "7 years old", value: "7" },
              { label: "8 years old", value: "8" },
              { label: "9 years old", value: "9" },
              { label: "10 years old", value: "10" },
              { label: "11 years old", value: "11" },
              { label: "12 years old", value: "12" },
              { label: "13 years old", value: "13" },
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
