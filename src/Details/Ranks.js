import React from "react";
import { View, Text } from "react-native";

import Styles from "../Styles";
import { GREEN, RED } from "../Constants";

const Ranks = ({ featuredRank, popularRank, active }) => (
  <View style={[Styles.sRow, Styles.sCardContainer, { height: 40 }]}>
    {featuredRank ? (
      <Text>
        <Text style={Styles.sRankHeader}>FEATURED : </Text>
        <Text>{featuredRank}</Text>
      </Text>
    ) : null}
    {popularRank ? (
      <Text>
        <Text style={Styles.sRankHeader}>POPULARITY : </Text>
        <Text>{popularRank}</Text>
      </Text>
    ) : null}
    <Text style={{ color: active ? GREEN : RED, fontWeight: "700" }}>
      {active ? "ACTIVE" : "INACTIVE"}
    </Text>
  </View>
);

export default Ranks;
