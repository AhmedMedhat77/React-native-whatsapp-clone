const { StyleSheet } = require("react-native");
const { SIZES, COLORS } = require("./Theme");

export const globalStyles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.medium,
    flex: 1,
  },
  SafeAreaView: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 10 : 0,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    color: COLORS.primary,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.small,
    textAlign: "right",
    paddingVertical: SIZES.xSmall,
  },
  TableRowText: {
    fontSize: SIZES.medium,
    color: COLORS.black,
    maxWidth: 70,
    textAlign: "center",
  },
  TableRowInput: {
    fontSize: SIZES.medium,
    color: COLORS.black,
    textAlign: "center",
    maxWidth: 70,
  },
});
