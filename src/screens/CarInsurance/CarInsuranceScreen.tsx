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
import InsuranceHeader from "../../components/InsuranceHeader";

export default function CarInsuranceScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <InsuranceHeader title="Car Insurance" navigation={navigation} />
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../../assets/sedan.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.description}>
        To get started, we need you to scan the front of your driving license
        containing your photo ID
      </Text>

      <View style={styles.licenseContainer}>
        <Image
          source={require("../../assets/driving-license.png")}
          style={styles.licenseImage}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Camera")}
      >
        <Text style={styles.buttonText}>SCAN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: width * 0.25,
    height: width * 0.25,
    marginVertical: height * 0.02,
  },
  description: {
    color: "#1A2A6C",
    fontWeight: "bold",
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
