import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useFormikContext } from "formik";

interface FutureDatePickerProps {
  name: string;
  title?: string;
  label?: string;
}

export default function FutureDatePicker({
  name,
  title = "Select date",
  label = "Selected Date",
}: FutureDatePickerProps) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { values, setFieldValue, touched, errors } = useFormikContext<any>();

  const selectedDateText = values[name]
    ? `${label}: ${new Date(values[name]).toLocaleDateString()}`
    : title;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setShowDatePicker(true)}
        style={styles.datePicker}
      >
        <Text style={styles.datePickerText}>{selectedDateText}</Text>
      </TouchableOpacity>

      {touched[name] && errors[name] && (
        <Text style={styles.errorText}>
          {typeof errors[name] === "string" ? errors[name] : ""}
        </Text>
      )}

      {showDatePicker && (
        <DateTimePicker
          value={values[name] ? new Date(values[name]) : new Date()}
          mode="date"
          display="default"
          minimumDate={new Date()}
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (event.type === "set" && selectedDate) {
              setFieldValue(name, selectedDate.toISOString().split("T")[0]);
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
