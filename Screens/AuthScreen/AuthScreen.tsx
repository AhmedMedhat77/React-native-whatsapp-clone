import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {COLORS, SIZES} from "../../Constats";
import {AuthInputs} from "./AuthInputs";

const AuthScreen = () => {
  const [isActive, setActive] = React.useState<boolean>(false);
  const textInputChange = (input: string) => {
    if (input.trim().length >= 5) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 2}}>
      <View style={styles.statusBar}>
        <Text style={styles.statusbarTitle}>Phone number</Text>
        <TouchableOpacity style={styles.statusbarButton}>
          <Text
            style={[
              isActive ? {color: COLORS.primary} : {color: COLORS.grayText},
              {fontSize: 16},
            ]}
          >
            Done
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.infoText}>
        Please confirm your country code and enter your phone number
      </Text>
      <AuthInputs textInputChange={textInputChange} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  infoText: {
    textAlign: "center",
    paddingHorizontal: SIZES.medium,
    justifyContent: "center",
    fontSize: SIZES.small,
    marginTop: SIZES.small,
  },
  statusBar: {
    flexDirection: "row",
    backgroundColor: COLORS.lightWhite,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SIZES.medium,
    position: "relative",
  },
  statusbarTitle: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
  statusbarButton: {
    position: "absolute",
    right: SIZES.small,
  },
});
export default AuthScreen;
