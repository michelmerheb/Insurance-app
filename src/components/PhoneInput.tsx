import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import PhoneInput, { ICountry } from "react-native-international-phone-number";
import { useFormikContext } from "formik";

interface PhoneNumberProps {
  value: string;
  onChange: (value: string) => void;
}
interface FormValues {
  phoneNumber: string;
}

export default function PhoneNumber({ value, onChange }: PhoneNumberProps) {
  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);
  const { touched, errors, setFieldValue } = useFormikContext<FormValues>();

  return (
    <View style={styles.container}>
      <PhoneInput
        value={value}
        onChangePhoneNumber={(number) => {
          onChange(number);
          setFieldValue("phoneNumber", number);
        }}
        selectedCountry={selectedCountry}
        onChangeSelectedCountry={setSelectedCountry}
        defaultCountry="LB"
        phoneInputStyles={{
          container: {
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 5,
          },
          flagContainer: {
            backgroundColor: "white",
          },
          callingCode: {
            color: "#555",
          },
        }}
      />
      {touched.phoneNumber && errors.phoneNumber && (
        <Text style={styles.errorText}>{errors.phoneNumber}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});
