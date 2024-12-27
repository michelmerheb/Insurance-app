import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { setLifeInsuranceType } from "../../redux/slices/lifeInsuranceSlice";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function LifeInsuranceSelection({ navigation }: any) {
  const dispatch = useDispatch();

  const handleSelection = (type: "term" | "permanent") => {
    dispatch(setLifeInsuranceType(type));
    navigation.navigate("EligibilityCriteria");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="back" size={30} color="#002B7F" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.title}>Life Insurance</Text>
      </View>

      <Text style={styles.description}>Choose the best option for you</Text>

      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => handleSelection("term")}
        >
          <Image
            source={require("../../assets/Temporary.png")}
            style={styles.cardIcon}
          />
          <Text style={styles.cardText}>Term Life Insurance</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => handleSelection("permanent")}
        >
          <Image
            source={require("../../assets/Permanent.png")}
            style={styles.cardIcon}
          />
          <Text style={styles.cardText}>Permanent Life Insurance</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.selectionDescriptionContainer}>
        <Text style={styles.selectionDescriptionText}>
          • Term life insurance lasts for a specific period of time or term.
        </Text>
        <Text style={styles.selectionDescriptionText}>
          • Permanent life insurance supplies coverage for a policyholder’s
          lifetime — as long as premiums get paid.{" "}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backButton: {
    top: 40,
    left: 10,
    padding: 8,
  },
  header: {
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1A2A6C",
  },
  description: {
    marginTop: 50,
    fontSize: 18,
    fontWeight: "bold",
    color: "#444",
    padding: 10,
  },
  selectionDescriptionContainer: {
    marginVertical: 80,
    marginHorizontal: 20,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    padding: 20,
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D6E4F0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    width: "45%",
  },
  cardIcon: {
    width: 70,
    height: 70,
  },
  cardText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1A2A6C",
    textAlign: "center",
    marginTop: 10,
  },
  selectionDescriptionText: {
    marginVertical: 15,
    fontSize: 15,
    color: "#666",
  },
});
