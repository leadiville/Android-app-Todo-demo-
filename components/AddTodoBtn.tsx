import styles from "@/app/(tabs)/styles";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable, View } from "react-native";

export default ({ name, color, bcColor, size }) => {
  return (
    <Pressable >
      <FontAwesome.Button
        name={name}
        size={size}
        color={color}
        backgroundColor={bcColor}
      />
    </Pressable>
  );
};
