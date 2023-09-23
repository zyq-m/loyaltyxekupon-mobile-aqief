import React from "react";
import { View, Text, StyleSheet } from "react-native";
import QRCode from "react-qr-code";

import { globals } from "../styles";

const MyQRGreenCampus = () => {
  // Data to be encoded in the QR code (e.g., a URL or text)
  const qrData = "https://www.facebook.com"; // Replace with your desired data

  return (
    <View
      style={[
        globals.container,
        {
          paddingHorizontal: 16,
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      <>
        <View style={QRStyles.QRWrapper}>
          <QRCode
            value={qrData} // Set the data to be encoded
            size={300}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          />
        </View>
        <Text style={QRStyles.cafeName}>Kafe Ali Baba</Text>
      </>
    </View>
  );
};

export default MyQRGreenCampus;

const QRStyles = StyleSheet.create({
  QRWrapper: {
    padding: 16,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 9,
    borderColor: "rgba(0, 0, 0, 0.08)",
  },
  cafeName: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "600",
  },
});
