import { Text, View, Platform } from "react-native";

import { globals, transactionStyle } from "../../styles";
import TransactionContainer from "../../components/TransactionContainer";
import B40TransactionList from "../../components/B40TransactionList";
import B40dummyData from "../../components/B40dummyData";
import { useEffect, useState } from "react";
import { api } from "../../services/axiosInstance";
import { useUserContext } from "../../hooks/useUserContext";

const B40Transaction = () => {
  const [transaction, setTransaction] = useState();
  const { user } = useUserContext();

  useEffect(() => {
    api
      .get(`/student/transaction/wallet/${user?.id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <View style={[globals.container]}>
      <TransactionContainer>
        <B40TransactionList data={B40dummyData} />
      </TransactionContainer>
    </View>
  );
};

export default B40Transaction;
