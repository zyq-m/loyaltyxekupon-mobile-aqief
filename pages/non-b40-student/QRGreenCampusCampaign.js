import { View, Image, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import { Button } from "../../components";

import { QRScanStyle } from "../../styles";

const QRGreenCampusCampaign = () => {
  return (
    <View style={[{ flex: 1, paddingHorizontal: 16, backgroundColor: "#000" }]}>
      <BarCodeScanner style={StyleSheet.absoluteFill} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={QRScanStyle.scanner}>
          <View style={QRScanStyle.row}>
            <Image
              style={[QRScanStyle.square]}
              source={require("../../assets/icons/scanner-icon.png")}
            />
            <Image
              style={[
                QRScanStyle.square,
                { transform: [{ rotateY: "180deg" }] },
              ]}
              source={require("../../assets/icons/scanner-icon.png")}
            />
          </View>
          <View style={QRScanStyle.row}>
            <Image
              style={[
                QRScanStyle.square,
                { transform: [{ rotateX: "180deg" }] },
              ]}
              source={require("../../assets/icons/scanner-icon.png")}
            />
            <Image
              style={[
                QRScanStyle.square,
                { transform: [{ rotate: "-180deg" }] },
              ]}
              source={require("../../assets/icons/scanner-icon.png")}
            />
          </View>
        </View>
      </View>
      <View style={{ paddingBottom: 24 }}>
        <Button label={"Scan again"} />
      </View>
    </View>
  );
};

export default QRGreenCampusCampaign;
