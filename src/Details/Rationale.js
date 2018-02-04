import React from "react";
import { View, Text } from "react-native";
import HTML from "react-native-render-html";

import Styles from "../Styles";
import { SCREEN_WIDTH, PRIMARY_DARK } from "../Constants";

const Rationale = ({ rationale }) => (
  <View style={Styles.sCardContainer}>
    <Text style={{ color: PRIMARY_DARK, fontWeight: "500" }}>RATIONALE</Text>
    <HTML html={rationale} imagesMaxWidth={SCREEN_WIDTH - 20} />
  </View>
);
export default Rationale;
