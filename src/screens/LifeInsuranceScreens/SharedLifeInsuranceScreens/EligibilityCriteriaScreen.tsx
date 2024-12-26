import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function EligibilityCriteriaScreen({ navigation, route }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="back" size={24} color="#002B7F" />
          </TouchableOpacity>
          <Text style={styles.title}>Eligibility Criteria</Text>
        </View>
        <Text
          style={[styles.description, { textAlign: "center", marginTop: 30 }]}
        >
          To get the right coverage, there are a few basic eligibility
          requirements you need to meet. These help us provide a policy that
          suits your needs. Here’s what you need to know:
        </Text>
        <Text style={styles.subTitle}>Age Restrictions</Text>
        <Text style={styles.description}>
          Age matters when applying for insurance coverage. You need to be at
          least 18 years old to qualify for our policies. While coverage is
          generally available up to age 70, securing a policy beyond that may
          become more challenging. After 80 years old, finding coverage might no
          longer be an option.
        </Text>

        <Text style={styles.subTitle}>Health Conditions</Text>
        <Text style={styles.description}>
          Your health plays a big role in qualifying for coverage. If you're
          generally in good health, your chances of approval are higher. If you
          have some medical conditions, you may still qualify depending on the
          details of your health history. However, for serious or multiple
          health issues, getting approved might be more difficult or require
          more specific coverage options.
        </Text>

        <Text style={styles.subTitle}>Lifestyle Choices</Text>
        <Text style={styles.description}>
          How you live your life impacts your eligibility. If you engage in
          high-risk activities, such as smoking, hazardous work, or extreme
          hobbies, your premiums may be higher. If multiple risk factors apply,
          getting coverage may be more challenging. A balanced lifestyle makes
          getting insured simpler and more affordable.
        </Text>

        <Text style={styles.subTitle}>Coverage Needs</Text>
        <Text style={styles.description}>
          Your coverage amount depends on your personal needs. If you’re only
          looking to cover basic expenses, a smaller policy may be enough.
          However, if you have dependents who rely on you financially or want to
          secure long-term protection, you may need a higher coverage plan.
          Choose the right level of coverage to give you and your loved ones
          peace of mind.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("HealthLifestyle")}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: height * 0.1,
  },
  backButton: {
    marginRight: 16,
    padding: 8,
    borderRadius: 5,
  },
  title: {
    fontSize: 30,
    color: "#1A2A6C",
    flex: 1,
  },
  description: {
    fontSize: 18,
    padding: 5,
    color: "#1A2A6C",
  },
  subTitle: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: "bold",
    textAlign: "left",
    color: "#1A2A6C",
    padding: 10,
  },
  button: {
    marginHorizontal: 50,
    marginVertical: 30,
    height: 50,
    backgroundColor: "#1A2A6C",
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    lineHeight: 50,
  },
});
