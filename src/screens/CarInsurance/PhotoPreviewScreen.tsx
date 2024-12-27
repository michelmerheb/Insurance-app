import { Fontisto } from "@expo/vector-icons";
import { CameraCapturedPicture } from "expo-camera";
import React from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
} from "react-native";
import Foundation from "@expo/vector-icons/Foundation";

interface PhotoPreviewSectionProps {
  photo: CameraCapturedPicture;
  handleRetakePhoto: () => void;
  navigation: any;
}
export default function PhotoPreviewSection({
  photo,
  handleRetakePhoto,
  navigation,
}: PhotoPreviewSectionProps) {
  const handleNext = () => {
    navigation.navigate("CarInformation");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Image
          style={styles.previewContainer}
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.circularButton}
          onPress={handleRetakePhoto}
          activeOpacity={0.8}
        >
          <Fontisto name="trash" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.circularButton}
          onPress={handleNext}
          activeOpacity={0.8}
        >
          <Foundation name="next" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  box: {
    borderRadius: 15,
    padding: 1,
    width: "95%",
    backgroundColor: "#1e1e1e",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  previewContainer: {
    width: "95%",
    height: "85%",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  buttonContainer: {
    marginTop: "4%",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  circularButton: {
    backgroundColor: "#6200ea",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
