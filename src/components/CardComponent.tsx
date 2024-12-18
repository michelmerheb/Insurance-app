import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import React from "react";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { ProgressBar } from "react-native-paper";

interface CardComponentProps {
  iconName: keyof typeof Ionicons.glyphMap;
  title: string;
  detail: string;
  policyNumber: string;
  progress: number;
  daysRemaining: string;
  buttonText: string;
  progressColor?: string;
  buttonColor?: string;
}

export default function CardComponent({
  iconName,
  title,
  detail,
  policyNumber,
  progress,
  daysRemaining,
  buttonText,
  progressColor = "#4CAF50",
  buttonColor = "#4CAF50",
}: CardComponentProps) {
  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <Ionicons name={iconName} size={40} color="#444" />
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.policyDetail}>{detail}</Text>
        <Text style={styles.policyNumber}>Policy Number</Text>
        <Text style={styles.policyNumber}>{policyNumber}</Text>
      </View>
      <ProgressBar
        animatedValue={progress}
        color={progressColor}
        style={styles.progressBar}
      />
      <Text style={styles.remainingText}>{daysRemaining}</Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: buttonColor }]}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
    overflow: "hidden",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "100%",
    paddingHorizontal: 10,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  policyDetail: {
    fontSize: 16,
    color: "#000",
    marginTop: 5,
  },
  policyNumber: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  remainingText: {
    fontSize: 14,
    color: "#000",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
