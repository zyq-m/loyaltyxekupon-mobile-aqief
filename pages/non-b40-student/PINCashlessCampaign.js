import React from "react";
import { View, Text, Image } from "react-native";
import { Button, Input } from "../../components";
import { globals, insertPINstyle } from "../../styles";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

const PINCashlessCampaign = () => {
  const navigation = useNavigation();

  const toDashboard = () => {
    // You can add your authentication logic here
    // If authentication is successful, navigate to the "Dashboard" screen
    navigation.navigate("Dashboard"); // Replace "Dashboard" with your route name
  };

  return (
    <View
      style={[
        globals.container,
        { justifyContent: "center", paddingHorizontal: 16 },
      ]}
    >
      <View>
        <Text style={insertPINstyle.textHeader}>Please Insert PIN Code</Text>
        <Input label={"Insert PIN code here"} />
        <View style={{ marginTop: 30 }}>
          <Button label={"Submit PIN"} onPress={toDashboard} />
        </View>
      </View>
    </View>
  );
};

export default PINCashlessCampaign;
