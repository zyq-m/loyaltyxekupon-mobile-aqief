import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button, Input } from "../components";
import { globals, loginStyle } from "../styles";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [isCafeOwner, setIsCafeOwner] = useState(false);
  const [matricNo, setMatricNo] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Simulate checking credentials
    const user = findUserByUsername(isCafeOwner ? username : matricNo);

    if (!user) {
      // User not found, show an error message or handle accordingly
      alert("User not found. Please try again.");
      return;
    }

    if (user.password !== password) {
      // Password is incorrect, show an error message or handle accordingly
      alert("Incorrect password. Please try again.");
      return;
    }

    if (user.userType === "cafeOwner") {
      // Navigate to the cafe owner dashboard
      navigation.navigate("CODashboard");
    } else if (user.userType === "student") {
      if (user.isB40) {
        // User belongs to the B40 group, navigate to B40 dashboard
        navigation.navigate("B40Dashboard");
      } else {
        // User is a regular student, navigate to the student dashboard
        navigation.navigate("Dashboard");
      }
    }
  };

  // Function to find a user by username or matricNo
  const findUserByUsername = (usernameOrMatricNo) => {
    // Replace this with your actual logic to search for the user in your local database
    // For now, we'll use a hardcoded array of user data for demonstration purposes

    const userData = [
      {
        //student b40
        matricNo: "123",
        password: "123",
        userType: "student",
        isB40: true,
      },
      {
        //student non-b40
        matricNo: "456",
        password: "456",
        userType: "student",
        isB40: false,
      },
      {
        //cafe owner
        username: "cafeowner",
        password: "cafeowner",
        userType: "cafeOwner",
      },
    ];

    return userData.find(
      (user) =>
        user.matricNo === usernameOrMatricNo ||
        user.username === usernameOrMatricNo
    );
  };

  return (
    <View
      style={[
        globals.container,
        { justifyContent: "center", paddingHorizontal: 16 },
      ]}
    >
      <View>
        <Image
          style={{
            width: 115,
            height: 78,
            alignSelf: "center",
            marginBottom: 8,
          }}
          source={require("../assets/eKupon/logo.png")}
        />
        <Text style={loginStyle.loginHeader}>eKuponXLoyalty@UniSZA</Text>
        {isCafeOwner ? (
          <Input label={"Username |"} value={username} onChange={setUsername} />
        ) : (
          <Input
            label={"Matric No. |"}
            value={matricNo}
            onChange={setMatricNo}
          />
        )}
        <Input
          label={"Password |"}
          secureTextEntry={true}
          value={password}
          onChange={setPassword}
        />
        <View style={{ marginTop: 37 }}>
          <Button label={"Login"} onPress={handleLogin} />
        </View>
        <TouchableOpacity onPress={() => setIsCafeOwner(!isCafeOwner)}>
          <Text style={loginStyle.smallText}>
            {isCafeOwner ? "Are you a student?" : "Are you a cafe owner?"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
