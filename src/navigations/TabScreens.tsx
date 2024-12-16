import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Animated,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  Fontisto,
  Ionicons,
  AntDesign,
  Feather,
} from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import OffersScreen from "../screens/OffersScreen";
import ClaimsScreen from "../screens/ClaimsScreen";
import PaymentsScreen from "../screens/PaymentsScreen";

const Tab = createBottomTabNavigator();

const TabHeader = ({ title, navigation }: any) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <AntDesign name="user" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
        <Ionicons name="notifications-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default function TabScreens() {
  const [modalVisible, setModalVisible] = useState(false);
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(50)).current;

  const openModal = () => {
    setModalVisible(true);
    Animated.parallel([
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeModal = () => {
    Animated.parallel([
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(translateYAnim, {
        toValue: 50,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => setModalVisible(false));
  };
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            size = focused ? 25 : 20;

            if (route.name === "Home") {
              return <Entypo name="home" size={size} color={color} />;
            } else if (route.name === "Offers") {
              return (
                <Fontisto name="shopping-sale" size={size} color={color} />
              );
            } else if (route.name === "Claims") {
              return (
                <Ionicons name="megaphone-outline" size={size} color={color} />
              );
            } else if (route.name === "Payments") {
              return <AntDesign name="creditcard" size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: styles.tabBarStyle,
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            header: () => (
              <TabHeader title="My insurances" navigation={navigation} />
            ),
          })}
        />
        <Tab.Screen
          name="Offers"
          component={OffersScreen}
          options={({ navigation }) => ({
            header: () => <TabHeader title="Offers" navigation={navigation} />,
          })}
        />
        <Tab.Screen name="Claims" component={ClaimsScreen} />
        <Tab.Screen name="Payments" component={PaymentsScreen} />
      </Tab.Navigator>

      <TouchableOpacity style={styles.fab} onPress={openModal}>
        <AntDesign name="pluscircle" size={50} color="#007AFF" />
      </TouchableOpacity>

      <Modal transparent visible={modalVisible} onRequestClose={closeModal}>
        <Animated.View style={[styles.modalOverlay, { opacity: opacityAnim }]}>
          <Animated.View
            style={[
              styles.modalContent,
              { transform: [{ translateY: translateYAnim }] },
            ]}
          >
            <View style={styles.optionButtonContainer}>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={closeModal}
              >
                <Feather name="phone" size={30} color="#fff" />
              </TouchableOpacity>
              <Text style={styles.optionText}>Contact us</Text>
            </View>

            <View style={styles.optionButtonContainer}>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={closeModal}
              >
                <Ionicons name="megaphone-outline" size={30} color="#fff" />
              </TouchableOpacity>
              <Text style={styles.optionText}>Add a claim</Text>
            </View>

            <View style={styles.optionButtonContainer}>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={closeModal}
              >
                <Feather name="shopping-cart" size={30} color="#fff" />
              </TouchableOpacity>
              <Text style={styles.optionText}>Get a quote</Text>
            </View>
          </Animated.View>

          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <AntDesign name="close" size={30} color="#007AFF" />
          </TouchableOpacity>
        </Animated.View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#3691f5",
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  tabBarStyle: {
    height: 60,
    paddingBottom: 10,
  },
  fab: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    zIndex: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    position: "absolute",
    bottom: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  optionButtonContainer: {
    flexDirection: "column",
  },
  optionButton: {
    backgroundColor: "#1E90FF",
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    elevation: 5,
  },
  optionText: {
    marginTop: 10,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    bottom: 40,
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
});
