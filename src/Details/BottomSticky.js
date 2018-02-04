import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

import Styles from "../Styles";
import { GREEN } from "../Constants";

const BottomSticky = ({ amount }) => {
  return (
    <View
      style={{
        height: 50,
        borderTopWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "white"
      }}
    >
      <View>
        <Text>Minimum Amount</Text>
        <Text style={{ color: "black", fontWeight: "300" }}>₹ {amount}</Text>
      </View>
      <TouchableOpacity
        style={{
          paddingVertical: 10,
          paddingHorizontal: 40,
          backgroundColor: GREEN,
          borderRadius: 2
        }}
      >
        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
          BUY
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default BottomSticky;
