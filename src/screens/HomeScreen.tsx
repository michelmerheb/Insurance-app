import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CardComponent from "../components/CardComponent";
import DonutChart from "../components/PieChart";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <CardComponent
        iconName="car-outline"
        title="MY CAR INSURANCE"
        detail="BMW 320"
        policyNumber="123567889"
        progress={0.8}
        progressColor="#3498DB"
        daysRemaining="265 Days remaining"
        buttonText="Upgrade"
        buttonColor="#3498DB"
      />

      <CardComponent
        iconName="heart-outline"
        title="MY HEALTH INSURANCE"
        detail="Class B"
        policyNumber="353R3T5TT"
        progress={0.1}
        progressColor="#F7B731"
        daysRemaining="20 Days remaining"
        buttonText="Renew"
        buttonColor="#F7B731"
      />

      <CardComponent
        iconName="heart-circle-outline"
        title="MY LIFE INSURANCE"
        detail="Class B"
        policyNumber="584624693"
        progress={0.8}
        daysRemaining="300 Days remaining"
        buttonText="Upgrade"
      />

      <DonutChart />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 15,
    paddingTop: 20,
  },

  flowChartContainer: {
    marginVertical: 30,
    alignItems: "center",
  },
  flowChartTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  pieChartPlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#EEE",
    justifyContent: "center",
    alignItems: "center",
  },
  pieChartText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
