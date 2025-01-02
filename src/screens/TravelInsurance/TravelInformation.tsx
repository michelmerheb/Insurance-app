import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setTravelInformation } from "../../redux/slices/travelInsuranceSlice";
import InsuranceHeader from "../../components/InsuranceHeader";
import TextBox from "../../components/TextBox";
import Button from "../../components/Button";
import FutureDatePicker from "../../components/FutureDatePicker";

export default function TravelInformation({ navigation }: any) {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    residenceCountry: Yup.string().required("This field is required"),
    destinationCountry: Yup.string().required("This field is required"),
    departureDate: Yup.string().required("This field is required"),
    returnDate: Yup.string().required("This field is required"),
    addFamily: Yup.string(),
  });
  return (
    <Formik
      initialValues={{
        residenceCountry: "",
        destinationCountry: "",
        departureDate: "",
        returnDate: "",
        addFamily: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(setTravelInformation(values));
        navigation.navigate("TabScreens");
      }}
    >
      {({ handleSubmit }) => (
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <InsuranceHeader title="Travel Insurance" navigation={navigation} />

            <TextBox
              name="residenceCountry"
              label="Country of Residence"
              placeholder="The country where you spend more than 6 months a year"
            />
            <TextBox
              name="destinationCountry"
              label="Destination Country(s)"
              placeholder="The country(s) you are traveling to."
            />
            <FutureDatePicker
              name="departureDate"
              title="Date of Departure"
              label="Date of Departure"
            />
            <FutureDatePicker
              name="returnDate"
              title="Date of Return"
              label="Date of Return"
            />

            <TextBox
              name="addFamily"
              label="Add Family Member(s)"
              placeholder="Add family members (optional)"
            />
            <Button title="Get my quote" onPress={handleSubmit} />
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
});
