import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import TextBox from "../components/TextBox";
import PhoneNumber from "../components/PhoneInput";
import CustomPicker from "../components/CustomPicker";
import Button from "../components/Button";
import InsuranceHeader from "../components/InsuranceHeader";
import { Formik } from "formik";
import * as Yup from "yup";

const ProfileScreen = ({ navigation }: any) => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState("");

  const initialValues = {
    name: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "123-456-7890",
    maritalStatus: "Single",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    maritalStatus: Yup.string().required("Marital status is required"),
  });

  const handleImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert("Permission to access the gallery is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleSave = (values: any) => {
    Alert.alert("Profile Saved");
  };

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: () => navigation.replace("Login"),
      },
    ]);
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "This action is irreversible. Are you sure you want to delete your account?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => navigation.replace("Login"),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <InsuranceHeader title="Profile" navigation={navigation} />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.imageContainer}>
            {imageUri ? (
              <Image source={{ uri: imageUri }} style={styles.headerImage} />
            ) : (
              <View style={styles.defaultIconContainer}>
                <MaterialIcons name="person" size={100} color="#ccc" />
              </View>
            )}
            <TouchableOpacity
              style={styles.editButton}
              onPress={handleImagePicker}
            >
              <AntDesign name="edit" size={24} color="#1A2A6C" />
            </TouchableOpacity>
          </View>
        </View>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSave}
        >
          {({ handleSubmit }) => (
            <View style={styles.formContainer}>
              <Text style={styles.title}>Edit information</Text>
              <TextBox label="Name" placeholder="Enter your name" name="name" />
              <TextBox
                label="Email"
                placeholder="Enter your email"
                name="email"
                keyboardType="email-address"
              />
              <PhoneNumber
                value={initialValues.phoneNumber}
                onChange={setPhoneNumber}
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
              <Button title="Save Changes" onPress={handleSubmit} />

              <View style={styles.divider} />

              <TouchableOpacity>
                <Text style={styles.buttonText}>Terms & Conditions</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.buttonText}>Privacy Policy</Text>
              </TouchableOpacity>
              <Button
                title="Logout"
                onPress={handleLogout}
                buttonColor="#FF4C4C"
              />
              <Button
                title="Delete Account"
                onPress={handleDeleteAccount}
                buttonColor="#FF4C4C"
              />
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    padding: 20,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  imageContainer: {
    position: "relative",
    alignItems: "center",
  },
  headerImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  defaultIconContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  editButton: {
    position: "absolute",
    bottom: 5,
    right: 5,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formContainer: {
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1A2A6C",
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 20,
  },
  buttonText: {
    color: "#1A2A6C",
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },
});

export default ProfileScreen;
