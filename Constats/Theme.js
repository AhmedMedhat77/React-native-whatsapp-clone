import {Dimensions, PixelRatio} from "react-native";
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from "react-native-responsive-screen";

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get("window");
const scale = SCREEN_HEIGHT / 680;
const normalised = (dp) => PixelRatio.getFontScale() * dp * scale;

const COLORS = {
  primary: "#007AFF",
  secondary: "#3E70A7",
  tertiary: "#DCF7C5",
  fourth: "#EDEDFF",
  gray: "#D1D1D6",
  gray2: "#C6C6CC",
  ArrowColor: "#3C3C43",
  white: "#fff",
  lightWhite: "#F6F6F6",
  grayText: "#8E8E93",
  danger: "#FF3B30",
  black: "#000000",
};

const FONT = {
  regular: "../Assets/Fonts/Cairo-Regular.ttf",
  medium: "../Assets/Fonts/Cairo-Medium.ttf",
  bold: "../Assets/Fonts/Cairo-Bold.ttf",
};

const SIZES = {
  xSmall: normalised(10),
  small: normalised(12),
  regular: normalised(14),
  medium: normalised(16),
  large: normalised(18),
  xLarge: normalised(20),
  xxLarge: normalised(32),
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};
const Buttons = {
  primary: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.small,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  secondary: {
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: SIZES.small,
  },
  danger: {backgroundColor: COLORS.danger, borderRadius: SIZES.small},
};
export {COLORS, FONT, SIZES, SHADOWS, Buttons};
