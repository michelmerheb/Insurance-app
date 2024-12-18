import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  Pressable,
} from "react-native";
import React from "react";
import { Card } from "@rneui/themed";

interface OfferCardProps {
  points: number;
  title: string;
  image: ImageSourcePropType;
  firstNumber: string;
  firstLabel: string;
  secondNumber: string;
  secondLabel: string;
  description: string;
  onPress?: () => void;
}
export default function OfferCard({
  points,
  title,
  image,
  firstNumber,
  firstLabel,
  secondNumber,
  secondLabel,
  description,
  onPress,
}: OfferCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
    >
      <Card containerStyle={styles.card}>
        <View style={styles.pointsBadge}>
          <Text style={styles.pointsText}>{points}</Text>
          <Text style={styles.pointsText}>Pts</Text>
        </View>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{title}</Text>
        </View>

        <View style={styles.detailsContainer}>
          <Image source={image} style={styles.CardImage} />
          <View style={styles.detailItem}>
            <Text style={styles.percentageText}>{firstNumber}</Text>
            <Text style={styles.label}>{firstLabel}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.percentageText}>{secondNumber}</Text>
            <Text style={styles.label}>{secondLabel}</Text>
          </View>
        </View>

        <Text style={styles.description}>
          {description} is so important. For this reason the half of the
          population are most likely to...
        </Text>
        <Text style={styles.moreText}>More</Text>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 15,
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: "#666",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#666",
  },
  pointsBadge: {
    top: -30,
    right: -20,
    position: "absolute",
    backgroundColor: "#66a9c4",
    alignItems: "center",
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 50,
  },
  pointsText: {
    color: "#fff",
    fontWeight: "bold",
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  detailItem: {
    alignItems: "center",
  },

  percentageText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#de6b68",
  },
  label: {
    fontSize: 14,
    color: "#666",
  },
  CardImage: {
    width: 80,
    height: 80,
  },
  coverageText: {
    color: "#e53935",
    fontWeight: "bold",
    fontSize: 16,
  },
  priceText: {
    color: "#e53935",
    fontWeight: "bold",
    fontSize: 16,
  },
  boughtText: {
    color: "#ff7043",
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: "#616161",
  },
  moreText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold",
  },
});
