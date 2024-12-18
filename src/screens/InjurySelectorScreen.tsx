import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

const InjurySelectorScreen = () => {
  const [selectedInjuries, setSelectedInjuries] = useState<string[]>([]);
  const navigation = useNavigation();

  const toggleInjury = (injury: string) => {
    setSelectedInjuries((prev) =>
      prev.includes(injury)
        ? prev.filter((item) => item !== injury)
        : [...prev, injury]
    );
  };

  const isSelected = (injury: string) => selectedInjuries.includes(injury);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select the damaged part in your body</Text>

      <View style={styles.bodyContainer}>
        <Svg height="400" width="200" viewBox="0 0 200 400">
          {/* Body Outline (simplified for demonstration purposes) */}
          <Path
            d="M100 10 C90 50, 90 70, 80 100 Q70 150, 70 180 L70 220 Q70 300, 80 340 L90 380 Q100 390, 110 380 L120 340 Q130 300, 130 220 L130 180 Q130 150, 120 100 C110 70, 110 50, 100 10 Z"
            fill="lightgray"
            stroke="black"
          />

          {/* Right Shoulder Injury Marker */}
          <TouchableOpacity onPress={() => toggleInjury("Right Shoulder")}>
            <Circle
              cx="80"
              cy="90"
              r="10"
              fill={isSelected("Right Shoulder") ? "red" : "gray"}
            />
          </TouchableOpacity>

          {/* Left Hand Injury Marker */}
          <TouchableOpacity onPress={() => toggleInjury("Left Hand")}>
            <Circle
              cx="140"
              cy="240"
              r="10"
              fill={isSelected("Left Hand") ? "red" : "gray"}
            />
          </TouchableOpacity>
        </Svg>

        {/* Injury Labels */}
        <Text style={[styles.label, { top: 80, left: 20 }]}>
          Right shoulder injury
        </Text>
        <Text style={[styles.label, { top: 220, right: 20 }]}>
          Left hand injury
        </Text>
      </View>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => console.log("Hi")}
      >
        <Text style={styles.nextText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InjurySelectorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  bodyContainer: {
    position: "relative",
    height: 400,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    position: "absolute",
    color: "red",
    fontSize: 12,
    fontWeight: "bold",
  },
  nextButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#007AFF",
    borderRadius: 5,
  },
  nextText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
