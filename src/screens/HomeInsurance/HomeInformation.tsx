import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { setHomeInformation } from "../../redux/slices/homeInsuranceSlice";
import InsuranceHeader from "../../components/InsuranceHeader";
import TextBox from "../../components/TextBox";
import CustomPicker from "../../components/CustomPicker";
import Button from "../../components/Button";

export default function HomeInformation({ navigation }: any) {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    homeStatus: Yup.string().required("Field is required."),
    primaryHome: Yup.string().required("Field is required."),
    homeSurafaceArea: Yup.string().required("Field is required."),
    homeContents: Yup.string().required("Field is required."),
    buildingAge: Yup.string().required("Field is required."),
  });
  return (
    <Formik
      initialValues={{
        homeStatus: "",
        primaryHome: "",
        homeSurafaceArea: "",
        homeContents: "",
        buildingAge: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        {
          dispatch(setHomeInformation(values));
          navigation.navigate("HomeDetails");
        }
      }}
    >
      {({ handleSubmit }) => (
        <SafeAreaView style={styles.container}>
          <InsuranceHeader title="Home Insurance" navigation={navigation} />
          <CustomPicker
            name="homeStatus"
            placeholder="Status"
            options={[
              { label: "Owner", value: "Owner" },
              { label: "Rent", value: "Rent" },
            ]}
          />
          <CustomPicker
            name="primaryHome"
            placeholder="is this your primary residence?"
            options={[
              { label: "Yes", value: "Yes" },
              { label: "No", value: "No" },
            ]}
          />

          <CustomPicker
            name="homeSurafaceArea"
            placeholder="The surface area of your home (m2)"
            options={[
              { label: "50m2 - 100m2", value: "50m2 - 100m2" },
              { label: "100m2, 150m2", value: "100m2, 150m2" },
              { label: "150m2, 200m2", value: "150m2, 200m2" },
              { label: "200m2, 250m2", value: "200m2, 250m2" },
              { label: "250m2, 300m2", value: "250m2, 300m2" },
              { label: "300m2, 350m2", value: "300m2, 350m2" },
              { label: "350m2, 400m2", value: "350m2, 400m2" },
              { label: "400m2, 450m2", value: "400m2, 450m2" },
              { label: "above 500m2", value: "above 500m2" },
            ]}
          />
          <CustomPicker
            name="homeContents"
            placeholder="Estimated value of your contents ($)"
            options={[
              { label: "$0 - $50000", value: "$0 - $50000" },
              { label: "$50001 - $100000", value: "$50001 - $100000" },
              { label: "$100001 - $200000", value: "$100001 - $200000" },
              { label: "$200001 - $300000", value: "$200001 - $300000" },
              { label: "$300001 - $400000", value: "$300001 - $400000" },
              { label: "above $500000", value: "above $500000" },
            ]}
          />
          <CustomPicker
            name="buildingAge"
            placeholder="Building Age"
            options={[
              { label: "2010 - 2023", value: "2010 - 2023" },
              { label: "2000 - 2009", value: "2000 - 2009" },
              { label: "1990 - 1999", value: "1990 - 1999" },
              { label: "1980 - 1989", value: "1980 - 1989" },
              { label: "Before 1980", value: "Before 1980" },
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
