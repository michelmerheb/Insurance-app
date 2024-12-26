import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import ClaimCard from "../components/ClaimCard";

export default function ClaimsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>My Claims</Text>

      <ClaimCard
        title="Car insurance"
        date="July 1, 2017"
        image={require("../assets/car.png")}
        type="BMW 320"
        policyNumber="123567889"
        currentStep={2}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 24,
    color: "#444",
  },
});
