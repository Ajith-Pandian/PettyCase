import React from "react";
import { View, Text, Image } from "react-native";

import Styles from "../Styles";
import { ITEM_HEIGHT } from "../Constants";

const ModelAndImage = ({ type, image }) => (
  <View style={Styles.sInnerStatsLayout}>
    <Text>{type}</Text>
    <Image
      style={{
        width: ITEM_HEIGHT - 20,
        height: ITEM_HEIGHT,
        resizeMode: "cover"
      }}
      source={{
        uri: image
      }}
    />
  </View>
);

export default ModelAndImage;
