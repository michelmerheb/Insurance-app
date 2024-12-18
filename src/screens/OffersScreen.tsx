import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import OfferCard from "../components/OfferCard";

export default function OffersScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>3 products more to be 100% covered</Text>

      <View style={styles.toggleContainer}>
        <TouchableOpacity style={styles.toggleButtonActive}>
          <Text style={styles.toggleTextActive}>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.toggleButton}>
          <Text style={styles.toggleText}>Premium</Text>
        </TouchableOpacity>
      </View>

      <OfferCard
        points={20}
        title="Health Insurance"
        image={require("../assets/health-insurance.jpg")}
        firstNumber="15%"
        firstLabel="Coverage"
        secondNumber="55%"
        secondLabel="Bought it"
        description="Health Insurance"
      />

      <OfferCard
        points={40}
        title="Car Insurance"
        image={require("../assets/car-insurance.jpg")}
        firstNumber="150$"
        firstLabel="starting/month"
        secondNumber="40%"
        secondLabel="Bought it"
        description="Car Insurance"
        onPress={() => navigation.navigate("GetQuote")}
      />

      <OfferCard
        points={75}
        title="Home Insurance"
        image={require("../assets/home-insurance.jpg")}
        firstNumber="TV"
        firstLabel="Gift"
        secondNumber="62%"
        secondLabel="Bought it"
        description="Home Insurance"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 18,
    fontFamily: "System",
    color: "#666",
    fontWeight: "bold",
    marginVertical: 15,
    textAlign: "center",
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
  },
  toggleButtonActive: {
    backgroundColor: "#66a9c4",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  toggleButton: {
    backgroundColor: "#e0e0e0",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  toggleTextActive: {
    color: "#fff",
    fontWeight: "bold",
  },
  toggleText: {
    color: "#000",
  },
});
