import { Text, View, Platform } from "react-native";

import { globals, transactionStyle } from "../../styles";

const Transaction = () => {
  return (
    <View style={[globals.container]}>
      <Text
        style={{
          flex: 1,
          textAlign: "center",
          fontWeight: "500",
          color: "rgba(132, 132, 132, 1)",
        }}
      >
        No transactions history
      </Text>
    </View>
  );
};

export default Transaction;
