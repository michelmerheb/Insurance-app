import { StyleSheet, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

interface QuoteCardProps {
  title: string;
  iconName: any;
  cardColor: string;
}

export default function QuoteCard({
  title,
  iconName,
  cardColor,
}: QuoteCardProps) {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: cardColor }]}>
      <FontAwesome5 name={iconName} size={40} color="white" />
      <Text style={styles.title}>{title}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginTop: 20,
  },
});
