import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function CarInsuranceScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="back" size={24} color="white" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.headerText}>Car Insurance</Text>
        <Image source={require("../assets/sedan.png")} style={styles.image} />
        <Text style={styles.description}>
          To get started, we need you to scan the front of your driving license
          containing your photo ID
        </Text>
      </View>

      <View style={styles.licenseContainer}>
        <Image
          source={require("../assets/driving-license.png")}
          style={styles.licenseImage}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SCAN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: "absolute",
    top: height * 0.01,
    left: width * 0.01,
    zIndex: 1,
    backgroundColor: "#002B7F",
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: "#fff",
    fontSize: width * 0.06,
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "#002B7F",
    alignItems: "center",
    padding: height * 0.03,
  },
  headerText: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    color: "#fff",
  },
  image: {
    width: width * 0.15,
    height: width * 0.15,
    marginVertical: height * 0.02,
  },
  description: {
    color: "#fff",
    paddingHorizontal: width * 0.05,
    textAlign: "center",
    fontSize: width * 0.04,
  },
  licenseContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: height * 0.05,
  },
  licenseImage: {
    width: width * 0.9,
    height: height * 0.4,
    resizeMode: "contain",
  },
  button: {
    position: "absolute",
    bottom: height * 0.03,
    left: width * 0.1,
    right: width * 0.1,
    backgroundColor: "#002B7F",
    paddingVertical: height * 0.02,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: width * 0.045,
    fontWeight: "bold",
  },
});
