import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Bar } from "react-native-progress";

interface HomeCardProps {
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

export default function HomeCard({
  iconName,
  title,
  detail,
  policyNumber,
  progress,
  daysRemaining,
  buttonText,
  progressColor = "#4CAF50",
  buttonColor = "#4CAF50",
}: HomeCardProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedProgress((prev) => {
        if (prev >= progress) {
          clearInterval(interval);
          return progress;
        }
        return prev + 0.05;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <Ionicons name={iconName} size={iconSize} color="#444" />
        <View style={styles.headerContent}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.policyDetail}>{detail}</Text>
          <Text style={styles.policyNumber}>Policy Number</Text>
          <Text style={styles.policyNumber}>{policyNumber}</Text>
        </View>
      </View>

      <View style={styles.progressButtonContainer}>
        <View
          style={[
            styles.progressBarContainer,
            { backgroundColor: "#E0E0E0", borderRadius: 5 },
          ]}
        >
          <Bar
            progress={animatedProgress}
            width={null}
            height={12}
            color={progressColor}
            borderRadius={5}
            borderWidth={0}
          />
        </View>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonColor }]}
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.remainingText}>{daysRemaining}</Text>
    </View>
  );
}

const { width } = Dimensions.get("window");
const iconSize = width > 350 ? 40 : 30;

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
  },
  headerContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingHorizontal: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  policyDetail: {
    fontSize: 18,
    fontWeight: 500,
    color: "#000",
  },
  policyNumber: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  progressButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  progressBarContainer: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 5,
    minWidth: 80,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  remainingText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
});
