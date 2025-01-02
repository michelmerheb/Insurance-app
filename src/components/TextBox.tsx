import { useFormikContext } from "formik";
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-paper";

interface TextBoxProps {
  label: string;
  placeholder: string;
  name: string;
  keyboardType?: "default" | "numeric" | "email-address";
}
export default function TextBox({
  label,
  placeholder,
  name,
  keyboardType = "default",
}: TextBoxProps) {
  const { values, setFieldValue, errors, touched } = useFormikContext<any>();
  return (
    <View style={styles.container}>
      <TextInput
        label={label}
        value={values[name]}
        onChangeText={(text) => setFieldValue(name, text)}
        style={styles.input}
        mode="outlined"
        textColor="#1A2A6C"
        theme={{ colors: { primary: "#1A2A6C" } }}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
      {touched[name] && typeof errors[name] === "string" && (
        <Text style={styles.errorText}>{errors[name]}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  input: {
    borderRadius: 10,
    backgroundColor: "white",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});
