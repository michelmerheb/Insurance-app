import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import QuoteCard from "../components/QuoteCard";

export default function GetQuoteScreen({ navigation }: any) {
  const categories = [
    {
      title: "Life",
      iconName: "hand-holding-medical",
      cardColor: "#2A9D8F",
      screen: "LifeInsuranceSelection",
    },
    {
      title: "Pet",
      iconName: "paw",
      cardColor: "#0d51a3",
      screen: "PetInformation",
    },
    {
      title: "Medical",
      iconName: "stethoscope",
      cardColor: "#66a9c4",
      screen: "MedicalInformation",
    },
    {
      title: "Travel",
      iconName: "plane-departure",
      cardColor: "#14c7c7",
      screen: "TravelInformation",
    },
    {
      title: "Home",
      iconName: "home",
      cardColor: "#3691f5",
      screen: "HomeInformation",
    },
    {
      title: "Car",
      iconName: "car",
      cardColor: "#002B7F",
      screen: "CarInsurance",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.descriptionText}>
        Choose one from the below insurance categories to get start
      </Text>
      <View style={styles.grid}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cardWrapper}
            onPress={() => navigation.navigate(category.screen)}
          >
            <QuoteCard
              title={category.title}
              iconName={category.iconName}
              cardColor={category.cardColor}
            />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  descriptionText: {
    fontSize: 18,
    textAlign: "center",
    color: "#666",
    marginBottom: 40,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  cardWrapper: {
    width: "45%",
    aspectRatio: 1,
    margin: 8,
  },
});
