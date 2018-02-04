import React from "react";
import { View, Text } from "react-native";

const TextRow = ({ text, style, textStyle }) => {
  let strings = text.split(":");
  return (
    <View
      style={[
        { flexDirection: "row", justifyContent: "space-between", margin: 2 },
        style
      ]}
    >
      <Text>{strings[0]}</Text>
      <Text style={textStyle}>{strings[1]}</Text>
    </View>
  );
};
export default TextRow;
