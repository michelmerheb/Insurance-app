import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";
import StepIndicator from "react-native-step-indicator";
import { labels, customStyles } from "./StepIndicator";

interface ClaimCardProps {
  image: any;
  date: string;
  title: string;
  type: string;
  policyNumber: string;
  status?: string;
  currentStep: number;
}

export default function ClaimCard({
  image,
  date,
  title,
  type,
  policyNumber,
  currentStep,
}: ClaimCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <Text style={styles.dateText}>{date}</Text>
        <Image source={image} style={styles.cardImage} />
      </View>

      <View style={styles.CardContent}>
        <View>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.policyType}>{type}</Text>
        </View>
        <View>
          <Text style={styles.policyNumber}>Policy Number</Text>
          <Text style={styles.policyNumber}>{policyNumber}</Text>
        </View>
      </View>

      <View style={styles.stepIndicatorContainer}>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={currentStep}
          labels={labels}
          stepCount={labels.length}
        />
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");
const imageWidth = width > 350 ? 70 : 75;
const imageHeight = height > 700 ? 70 : 75;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingBottom: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
    overflow: "hidden",
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateText: {
    color: "#266b87",
    fontWeight: "bold",
    fontSize: 16,
  },
  cardImage: {
    width: imageWidth,
    height: imageHeight,
  },
  CardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 15,
    color: "#444",
    marginTop: 5,
  },
  policyType: {
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
  },
  policyNumber: {
    textAlign: "right",
    fontSize: 14,
    color: "#222",
    marginTop: 5,
  },
  stepIndicatorContainer: {
    marginTop: 10,
  },
});
