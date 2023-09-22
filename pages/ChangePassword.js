import { View, Text, StyleSheet, TextInput } from "react-native";

import { Button } from "../components";

import { globals, loginStyle } from "../styles";

const ChangePassword = () => {
  return (
    <View style={globals.container}>
      <View style={{ padding: 16 }}>
        <Para>Current password</Para>
        <Input />

        <Para>New Password</Para>
        <Input />

        <Para>Re-type password</Para>
        <Input />

        <Button label={"Change"} />
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
      secureTextEntry={true}
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

export default ChangePassword;
