import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Profile from "../../components/Profile";
import Amount from "../../components/Amount";
import TransactionContainer from "../../components/TransactionContainer";
import Button from "../../components/Button";
import { globals, dashboardStyle } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import FeatherIcon from "react-native-vector-icons/Feather";

const Dashboard = () => {
  const navigation = useNavigation();

  const handleCP = () => {
    navigation.navigate("CollectPoint"); // Replace route name
  };
  const handleCR = () => {
    navigation.navigate("ClaimReward"); // Replace route name
  };

  return (
    <View style={globals.container}>
      <View style={[dashboardStyle.logoutContainer, { marginTop: 16 }]}>
        <Profile textField1={"Muhammad Ali"} textField2={"012345"} />
      </View>
      <View style={{ marginTop: 24 }}>
        <Amount amount={"20.00"} />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button label={"Collect Point"} onPress={handleCP} />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button label={"Claim Reward"} onPress={handleCR} />
      </View>
      <View style={{ marginTop: 40, marginBottom: 24 }}>
        <View style={[dashboardStyle.transactionHeaderWrap]}>
          <Text style={dashboardStyle.transactionHeader}>
            Recent transaction
          </Text>
          <FeatherIcon
            name="more-horizontal"
            size={25}
            onPress={() => navigation.navigate("Transactions")}
          />
        </View>
        <TransactionContainer>
          <Text
            style={[
              dashboardStyle.transactionHeader,
              { marginTop: 24, marginBottom: 24 },
            ]}
          >
            No recent transactions
          </Text>
        </TransactionContainer>
      </View>
    </View>
  );
};

export default Dashboard;
