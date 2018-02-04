import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  WebView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import ApiHelper from "../ApiHelper";

import Ranks from "./Ranks";
import Stats from "./Stats";
import Rationale from "./Rationale";
import Chart from "./Chart";
import BottomSticky from "./BottomSticky";

const CaseDetails = ({ smallCase }) => {
  const { scid, rationale, history, flags, stats, info } = smallCase;

  let minInvestAmount = stats.minInvestAmount;

  const { featured, popular } = flags;
  const featuredRank = featured.value ? featured.rank : null;
  const popularRank = popular.value ? popular.rank : null;

  const imageUrl = ApiHelper.getImageUrl(scid);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 10 }}>
        {featuredRank || popularRank ? (
          <Ranks featuredRank={featuredRank} popularRank={popularRank} />
        ) : null}
        <Stats stats={stats} type={info.type} image={imageUrl} />
        <Rationale rationale={rationale} />
        <Chart history={history} />
      </ScrollView>
      <BottomSticky amount={minInvestAmount} />
    </View>
  );
};

export default CaseDetails;
