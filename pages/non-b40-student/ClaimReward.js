import React from "react";
import { View, Text } from "react-native";
import { globals, loginStyle } from "../../styles";

const ClaimReward = () => {
  return (
    <View
      style={[
        globals.container,
        { justifyContent: "center", paddingHorizontal: 16 },
      ]}
    >
      <Text style={loginStyle.loginHeader}>Coming Soon</Text>
    </View>
  );
};

export default ClaimReward;
