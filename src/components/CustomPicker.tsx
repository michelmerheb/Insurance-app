import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { useFormikContext } from "formik";

interface CustomPickerProps {
  name: string;
  options: Array<{ label: string; value: any }>;
  placeholder?: string;
}

export default function CustomPicker({
  name,
  options,
  placeholder = "Select an option",
}: CustomPickerProps) {
  const { values, touched, errors, setFieldValue } = useFormikContext<any>();

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Picker
          selectedValue={values[name]}
          onValueChange={(itemValue) => setFieldValue(name, itemValue)}
          style={styles.picker}
        >
          <Picker.Item label={placeholder} value={null} />
          {options.map((option, index) => (
            <Picker.Item
              key={index}
              label={option.label}
              value={option.value}
            />
          ))}
        </Picker>
      </View>
      {touched[name] && errors[name] && typeof errors[name] === "string" && (
        <Text style={styles.errorText}>{errors[name]}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 20,
  },
  container: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
  },
  picker: {
    color: "#555",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});
