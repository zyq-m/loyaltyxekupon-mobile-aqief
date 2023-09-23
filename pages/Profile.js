import { View, Text, StyleSheet, TextInput } from "react-native";

import { globals, loginStyle } from "../styles";
import { Button } from "../components";

const Profile = () => {
  return (
    <View style={globals.container}>
      <View style={{ padding: 16 }}>
        <Para>Bank Name</Para>
        <Input placeholder="CIMB" />
        <Para>Account No.</Para>
        <Input />
        <Button label={"Update"} />
      </View>
    </View>
  );
};

const Para = ({ children, style }) => {
  return <Text style={[aboutStyle.para, style]}>{children}</Text>;
};

const Input = (props) => {
  return (
    <TextInput
      {...props}
      style={[loginStyle.inputContainer, aboutStyle.form]}
    />
  );
};

const aboutStyle = StyleSheet.create({
  para: {
    marginLeft: 6,
    marginBottom: 6,
  },
  form: {
    marginTop: 0,
    marginBottom: 24,
  },
});

export default Profile;
