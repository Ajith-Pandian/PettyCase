import React, { Component } from "react";
import { Text, View } from "react-native";
import GridView from "react-native-super-grid";

import CaseItem from "./CaseItem";
import { ITEM_WIDTH, ITEM_HEIGHT, CASE_IDS } from "../Constants";

const MyGrid = ({ onPressItem }) => {
  return (
    <GridView
      itemDimension={ITEM_WIDTH}
      items={CASE_IDS}
      renderItem={item => (
        <CaseItem item={item} onPress={() => onPressItem(item)} />
      )}
    />
  );
};

export default MyGrid;
