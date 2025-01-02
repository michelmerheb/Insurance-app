import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  setCarInformation,
  resetCarInformation,
} from "../../redux/slices/carInsuranceSlice";
import InsuranceHeader from "../../components/InsuranceHeader";
import TextBox from "../../components/TextBox";
import CustomPicker from "../../components/CustomPicker";
import Button from "../../components/Button";

export default function CarInformation({ navigation }: any) {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    carMake: Yup.string().required("Required"),
    carModel: Yup.string().required("Required"),
    carYear: Yup.string().required("Required"),
    carCapacity: Yup.string().required("Required"),
    carPlate: Yup.string().required("Required"),
    carCode: Yup.string().required("Required"),
    carValue: Yup.string().required("Required"),
  });
  return (
    <Formik
      initialValues={{
        carMake: "",
        carModel: "",
        carYear: "",
        carCapacity: "",
        carPlate: "",
        carCode: "",
        carValue: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(setCarInformation(values));
        navigation.navigate("TabScreens");
      }}
    >
      {({ handleSubmit }) => (
        <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <InsuranceHeader
              title="Car Specifications"
              navigation={navigation}
            />

            <TextBox
              name="carMake"
              label="What brand is your car?"
              placeholder="Enter your car's make (eg. Toyota)"
            />

            <TextBox
              name="carModel"
              label="What model is your car?"
              placeholder="Enter your car's model (eg. Corolla)"
            />

            <TextBox
              name="carYear"
              label="What year is your car?"
              placeholder="Enter your car's year"
              keyboardType="numeric"
            />

            <CustomPicker
              name="carCapacity"
              placeholder="Select your car's capacity?"
              options={[
                { label: "2", value: "2" },
                { label: "4", value: "4" },
                { label: "5", value: "5" },
                { label: "6", value: "6" },
                { label: "7", value: "7" },
                { label: "8+", value: "8+" },
              ]}
            />

            <TextBox
              name="carPlate"
              label="Enter your car's plate?"
              placeholder="Enter your car's plate"
            />

            <TextBox
              name="carCode"
              label="What is your car's code?"
              placeholder="Enter your car's code (eg. M)"
            />

            <TextBox
              name="carValue"
              label="Vehicle Value in USD"
              placeholder="Enter your car's value in USD"
              keyboardType="numeric"
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
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
});
