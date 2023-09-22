import { View, Text, StyleSheet, TextInput } from "react-native";

import { Button } from "../components";

import { globals, loginStyle } from "../styles";

const Report = () => {
  return (
    <View style={globals.container}>
      <View style={{ padding: 16 }}>
        <Para>Title</Para>
        <Input placeholder="I want new feature" />
        <Para>Comment</Para>
        <Input multiline numberOfLines={4} />
        <Button label={"Send"} />
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

export default Report;
