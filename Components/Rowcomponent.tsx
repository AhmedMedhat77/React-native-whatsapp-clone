import {Text, TouchableOpacity, StyleSheet, View} from "react-native";
import React from "react";
import {AntDesign} from "@expo/vector-icons";
import {COLORS, SIZES} from "../Constats/Theme";

interface RowTypes {
  title: string;
  onPress?: () => void;
}

const Rowcomponent = ({title, onPress, ...props}: RowTypes) => {
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
        <AntDesign name="right" size={SIZES.small} color={COLORS.gray2} />
      </TouchableOpacity>
      <View style={styles.hr} />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  title: {
    color: COLORS.primary,
    fontSize: SIZES.medium,
  },
  hr: {
    marginTop: 4,
    borderColor: "transparent",
    borderBottomColor: COLORS.gray,
    borderWidth: 1,
    width: "94%",
    marginLeft: "auto",
  },
});
export default Rowcomponent;
