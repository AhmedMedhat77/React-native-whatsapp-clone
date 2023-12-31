import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  contryFlagsAndCodes,
  contryFlagsAndCodesTypes,
} from "../../constants/countries";
import {COLORS, SIZES} from "../../Constats";
import {AntDesign} from "@expo/vector-icons";

import {CommonActions} from "@react-navigation/native";
import {useAppDispatch} from "../../Redux/Store";
import {mobileAuthAction} from "../../Redux/Slices/mobileAuthSlice";
const AuthLanguages = ({navigation}) => {
  const dispatch = useAppDispatch();
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{
          paddingLeft: 20,
          paddingVertical: SIZES.medium,
          backgroundColor: COLORS.lightWhite,
        }}
        onPress={() => navigation.dispatch(CommonActions.goBack())}
      >
        <AntDesign name="left" size={SIZES.small} color={COLORS.ArrowColor} />
      </TouchableOpacity>
      <FlatList
        data={(contryFlagsAndCodes as contryFlagsAndCodesTypes[]) ?? []}
        keyExtractor={(item) => item?.name}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                dispatch(
                  mobileAuthAction.setDialNumberInfo({
                    country: item.name,
                    dial_code: item.dial_code,
                  }),
                );
                navigation.dispatch(CommonActions.navigate("AuthScreen"));
              }}
              style={styles.countryItemContainer}
            >
              <Text>{item.flag}</Text>
              <Text> ({item.dial_code}) </Text>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  countryItemContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    height: 60,
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottomColor: COLORS.gray,
    paddingHorizontal: SIZES.small,
  },
});
export default AuthLanguages;
