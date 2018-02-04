import { Dimensions, PixelRatio, Platform } from "react-native";

export const BASE_URL = "https://api-dev.smallcase.com/";

export const CASE_IDS = [
  "SCMO_0002",
  "SCMO_0003",
  "SCMO_0006",
  "SCNM_0003",
  "SCNM_0007",
  "SCNM_0008",
  "SCNM_0009"
];

const isIos = Platform.OS === "ios";

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
  "window"
);
export const ITEM_WIDTH = SCREEN_WIDTH * 0.35;
export const ITEM_HEIGHT = SCREEN_HEIGHT * 0.3;

export const GREEN = "#28C39A";
export const RED = "#F4656F";

export const PRIMARY = "#1DB7D3";
export const PRIMARY_DARK = "#11A7C3";
