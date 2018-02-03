import React from "react";
import { View, Text, Image, ScrollView, WebView } from "react-native";
import ApiHelper from "../ApiHelper";
import { ITEM_HEIGHT, ITEM_WIDTH, SCREEN_WIDTH } from "../Constants";
import LineChartScreen from "./Chart";

import HTML from "react-native-render-html";

const CaseDetails = ({ smallCase }) => {
  console.log(smallCase);
  const { scid, rationale, history } = smallCase;
  const imageUrl = ApiHelper.getImageUrl(scid);
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ padding: 10, backgroundColor: "white" }}
    >
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
        <Text>Rationale</Text>
        <HTML html={rationale} imagesMaxWidth={SCREEN_WIDTH - 20} />
      </View>
      {history ? (
        <LineChartScreen history={history} />
      ) : (
        <Text>No history</Text>
      )}
    </ScrollView>
  );
};

export default CaseDetails;
