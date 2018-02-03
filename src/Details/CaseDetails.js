import React from "react";
import { View, Text, Image, ScrollView, WebView } from "react-native";
import ApiHelper from "../ApiHelper";
import { ITEM_HEIGHT, ITEM_WIDTH } from "../Constants";
import LineChartScreen from "./Chart";
const CaseDetails = ({ smallCase }) => {
  console.log(smallCase);
  const imageUrl = ApiHelper.getImageUrl(smallCase.scid);
  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <View style={{ width: "50%", alignItems: "center" }}>
          <Text style={{ fontWeight: "bold" }}>Index</Text>
          <Image
            style={{
              width: ITEM_HEIGHT,
              height: ITEM_HEIGHT,
              resizeMode: "cover"
            }}
            source={{
              uri: imageUrl
            }}
          />
        </View>

        <View style={{ width: "50%", alignItems: "center" }}>
          <Text style={{ fontWeight: "bold" }}>Index</Text>
          <Text style={{}}>1 yr ret</Text>
          <Text style={{}}>1 month ret</Text>
        </View>
      </View>
      <View>
        <Text>Historical</Text>
      </View>
      <LineChartScreen />
    </ScrollView>
  );
};

export default CaseDetails;
