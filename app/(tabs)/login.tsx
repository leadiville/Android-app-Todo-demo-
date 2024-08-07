import React, { useState } from "react";
import OpenUrlButton from "../../components/navigation/OpenUrlButton";
import { Link } from "expo-router";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default () => {
  interface LogInfo {
    email: string;
  }
  const [loginInfo, setLoginInfo] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.loginTitle}>Enter your email address</Text>
      <TextInput
        style={{
          borderBottomWidth: 2,
          padding: 7,
          borderRadius: 5,
          marginBottom: 5,
        }}
        placeholder="Enter email"
        value={loginInfo}
        onChangeText={(text) => setLoginInfo(text)}
      />

      <View>
        <Link  href="index" style={styles.continueButton}>
          Continue
        </Link>
      </View>

      <Text style={styles.or}>or</Text>
      <OpenUrlButton url={"https:www.google.com"} fontName={"google"}>
        continue with google
      </OpenUrlButton>
      <OpenUrlButton url={"https:www.facebook.com"} fontName={"facebook"}>
        Login with Facebook
      </OpenUrlButton>
      {/* <Text style={styles.or}>or</Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 3,
    letterSpacing: 0.2,
  },
  loginTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderBlockColor: "black",
  },
  continueButton: {
    backgroundColor: "black",
    color: "white",
    alignSelf: "center",
    paddingVertical: 12,
    paddingHorizontal: 150,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
  },
  or: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    marginBottom: 10,
  },
});
