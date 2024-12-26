import { StyleSheet } from "react-native";

export const textInputStyles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
  },
  inputBox: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    backgroundColor: "#fff",
    padding: 15,
    fontSize: 16,
    color: "#333",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});
