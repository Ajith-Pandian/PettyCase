import React from "react";
import { View, Text } from "react-native";
import Styles from "../Styles";

const Ranks = ({ featuredRank, popularRank }) => (
  <View style={[Styles.sRow, Styles.sCardContainer]}>
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
  </View>
);

export default Ranks;
