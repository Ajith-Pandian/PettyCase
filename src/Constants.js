import { Dimensions, PixelRatio, Platform } from "react-native";

const isIos = Platform.OS === "ios";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
export const ITEM_WIDTH = SCREEN_WIDTH * 0.35;
export const ITEM_HEIGHT = SCREEN_HEIGHT * 0.3;

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
