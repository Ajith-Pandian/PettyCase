import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import ImageLoad from "react-native-image-placeholder";

import ApiHelper from "../ApiHelper";
import { ITEM_HEIGHT, ITEM_WIDTH, PRIMARY } from "../Constants";

const CaseItem = ({ item, onPress }) => (
  <TouchableOpacity
    style={{ backgroundColor: PRIMARY, height: ITEM_HEIGHT }}
    onPress={() => onPress()}
  >
    <ImageLoad
      style={{ width: undefined, height: ITEM_HEIGHT }}
      loadingStyle={{ color: "transparent" }}
      source={{
        uri: ApiHelper.getImageUrl(item)
      }}
    />
  </TouchableOpacity>
);

export default CaseItem;
