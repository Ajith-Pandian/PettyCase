import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { ITEM_HEIGHT, ITEM_WIDTH } from "../Constants";
import ApiHelper from "../ApiHelper";

const CaseItem = ({ item, onPress }) => (
  <TouchableOpacity
    style={{ backgroundColor: "red", height: ITEM_HEIGHT }}
    onPress={() => onPress()}
  >
    <Image
      style={{ width: undefined, height: ITEM_HEIGHT, resizeMode: "cover" }}
      source={{
        uri: ApiHelper.getImageUrl(item)
      }}
    />
  </TouchableOpacity>
);

export default CaseItem;
