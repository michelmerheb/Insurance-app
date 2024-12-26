import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import TextBox from "../../../components/TextBox";
import PhoneNumber from "../../../components/PhoneInput";
import DateOfBirthPicker from "../../../components/DatePicker";
import InsuranceHeader from "../../../components/InsuranceHeader";
import CustomPicker from "../../../components/CustomPicker";
import Button from "../../../components/Button";

export default function UserDataScreen({ navigation }: any) {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    dateOfBirth: Yup.string().required("Date of Birth is required"),
    gender: Yup.string().required("Gender is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phoneNumber: "",
        dateOfBirth: "",
        gender: "",
        email: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => navigation.navigate("HealthLifestyle")}
    >
      {({ handleSubmit }) => (
        <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <InsuranceHeader
              title="Personal Information"
              navigation={navigation}
            />
            <TextBox
              name="firstName"
              label="First Name"
              placeholder="Enter your first name"
            />

            <TextBox
              name="lastName"
              label="Last Name"
              placeholder="Enter your last name"
            />
            <PhoneNumber value={phoneNumber} onChange={setPhoneNumber} />
            <DateOfBirthPicker />
            <CustomPicker
              name="gender"
              placeholder="Select your gender"
              options={[
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" },
              ]}
            />
            <TextBox
              name="email"
              label="Email"
              placeholder="Enter your email"
            />
            <Button title="Continue" onPress={handleSubmit} />
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
  title: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 20,
    color: "#1A2A6C",
  },
});
