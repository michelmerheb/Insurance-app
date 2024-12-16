import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { PieChart } from "react-native-gifted-charts";

export default function DonutChart() {
  const data = [
    {
      value: 950,
      color: "#F7B731",
      gradientCenterColor: "#F7B731",
      text: "Health insurance",
    },
    {
      value: 600,
      color: "#66a9c4",
      gradientCenterColor: "#66a9c4",
      text: "Car insurance",
    },
    {
      value: 500,
      color: "#4CAF50",
      gradientCenterColor: "#4CAF50",
      text: "Life insurance",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>YOUR FLOW PER MONTH 2017</Text>

      <View style={styles.chartContainer}>
        <PieChart
          data={data}
          radius={80}
          labelsPosition="outward"
          innerRadius={60}
          centerLabelComponent={() => (
            <Text style={styles.centerLabel}>$1,600</Text>
          )}
          showGradient
          focusOnPress
        />

        <View style={styles.legendContainer}>
          <View style={styles.legendItem}>
            <View
              style={[styles.legendColor, { backgroundColor: "#66a9c4" }]}
            />
            <Text style={styles.legendText}>Car insurance</Text>
          </View>
          <View style={styles.legendItem}>
            <View
              style={[styles.legendColor, { backgroundColor: "#F7B731" }]}
            />
            <Text style={styles.legendText}>Health insurance</Text>
          </View>
          <View style={styles.legendItem}>
            <View
              style={[styles.legendColor, { backgroundColor: "#4CAF50" }]}
            />
            <Text style={styles.legendText}>Life insurance</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  chartContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  centerLabel: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  legendContainer: {
    justifyContent: "center",
    marginTop: 10,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  legendColor: {
    width: 30,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  legendText: {
    fontSize: 16,
    color: "#555",
  },
});
