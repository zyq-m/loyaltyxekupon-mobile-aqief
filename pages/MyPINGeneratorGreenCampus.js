import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { Button, Input } from "../components";
import { globals, insertPINstyle } from "../styles";

const MyPINGeneratorGreenCampus = () => {
  const [validationCode, setValidationCode] = useState(""); // Initialize validationCode state

  const generateCode = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+"; // Define the set of characters to use
    const codeLength = 7; // Define the length of the code
    let newValidationCode = "";
    for (let i = 0; i < codeLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length); // Generate a random index within the range of characters
      newValidationCode += characters.charAt(randomIndex); // Add the character at the random index to the code
    }
    setValidationCode(newValidationCode); // Update validationCode state with the new code
  };

  return (
    <View
      style={[
        globals.container,
        { justifyContent: "center", paddingHorizontal: 16 },
      ]}
    >
      <View>
        <Text style={[insertPINstyle.textHeader, insertPINstyle.textCenter]}>
          One-Time PIN:
        </Text>
        <Text style={[insertPINstyle.textPIN, insertPINstyle.textCenter]}>
          {validationCode}
        </Text>
        <Text style={[insertPINstyle.textNote, insertPINstyle.textCenter]}>
          PLEASE NOTE : This unique code is valid for 20 minutes
        </Text>
        <View style={{ marginTop: 30 }}>
          <Button label={"Regenerate PIN"} onPress={generateCode} />
        </View>
      </View>
    </View>
  );
};

export default MyPINGeneratorGreenCampus;
