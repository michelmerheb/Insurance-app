import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useFormikContext } from "formik";

interface FormValues {
  dateOfBirth: string;
}

export default function DateOfBirthPicker() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { values, setFieldValue, touched, errors } =
    useFormikContext<FormValues>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setShowDatePicker(true)}
        style={styles.datePicker}
      >
        <Text style={styles.datePickerText}>
          {values.dateOfBirth
            ? new Date(values.dateOfBirth).toLocaleDateString()
            : "Select date of birth"}
        </Text>
      </TouchableOpacity>

      {touched.dateOfBirth && errors.dateOfBirth && (
        <Text style={styles.errorText}>{errors.dateOfBirth}</Text>
      )}

      {showDatePicker && (
        <DateTimePicker
          value={values.dateOfBirth ? new Date(values.dateOfBirth) : new Date()}
          mode="date"
          display="default"
          maximumDate={new Date()}
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) {
              setFieldValue(
                "dateOfBirth",
                selectedDate.toISOString().split("T")[0]
              );
            }
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  datePicker: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
    padding: 15,
    backgroundColor: "#fff",
  },
  datePickerText: {
    fontSize: 16,
    color: "#555",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});
