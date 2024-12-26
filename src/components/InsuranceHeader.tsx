import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

interface InsuranceHeaderProps {
  navigation: any;
  title: string;
}
export default function InsuranceHeader({
  title,
  navigation,
}: InsuranceHeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="back" size={24} color="#002B7F" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: height * 0.1,
    backgroundColor: "#fff",
  },
  backButton: {
    marginRight: 16,
    padding: 8,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    color: "#1A2A6C",
    flex: 1,
  },
});
