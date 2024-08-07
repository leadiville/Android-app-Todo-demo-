import { Pressable, Text } from "react-native";
import styles from "@/app/(tabs)/styles";

const Categories = ({ title, style }) => {
  return (
    <Pressable style = {style}>
      <Text style = {styles.categoryBtnTxt}>{title}</Text>
    </Pressable>
  );
};

export default Categories;
