import { useCallback } from "react";
import { Alert, Linking, Pressable, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "@/app/(tabs)/styles";

export default OpenUrlButton = ({ children, url, fontName }) => {
  const memoizedCallback = useCallback(async () => {
    (await Linking.canOpenURL(url))
      ? await Linking.openURL(url)
      : Alert.alert("this url's scheme is not valid");
  });
  return (
    <Pressable style={styles.button}>
      <FontAwesome.Button name={fontName} backgroundColor="none" onPress={memoizedCallback}>
        {children}
      </FontAwesome.Button>
    </Pressable>
  );
};


