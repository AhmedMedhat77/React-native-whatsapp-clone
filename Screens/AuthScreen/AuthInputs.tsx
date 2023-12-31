import {View, TextInput, StyleSheet} from "react-native";
import React from "react";
import Rowcomponent from "../../Components/Rowcomponent";
import {SIZES} from "../../Constats";
import {COLORS} from "../../Constats/Theme";
import {useNavigation} from "@react-navigation/native";
import {RootState, useAppSelector} from "../../Redux/Store";

export const AuthInputs = ({textInputChange}) => {
  const navigation = useNavigation<any>();
  const {dial_code} = useAppSelector((state: RootState) => state.mobileAuth);
  return (
    <View style={{marginTop: SIZES.large, paddingHorizontal: SIZES.small}}>
      <Rowcomponent
        title={dial_code.country}
        onPress={() => navigation.navigate("AuthLanguages")}
      />
      <View style={styles.phoneInputContainer}>
        <TextInput
          placeholder="+02"
          keyboardType="number-pad"
          value={String(dial_code.dial_code)}
          maxLength={5}
          style={[
            styles.input,
            {
              borderWidth: 1,
              borderColor: "transparent",
              borderRightColor: COLORS.gray2,
              minWidth: "20%",
            },
          ]}
        />
        <TextInput
          onChangeText={(e) => textInputChange(e)}
          placeholder="0000-000-00"
          style={{width: "100%"}}
          keyboardType="number-pad"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    gap: 5,
    borderColor: "transparent",
    borderWidth: 1,
    borderBottomColor: COLORS.gray2,
  },
  input: {
    paddingHorizontal: SIZES.small,
    paddingVertical: SIZES.xSmall,
  },
});
