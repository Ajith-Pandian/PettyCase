import React from "react";
import { View, Text } from "react-native";

import TextRow from "./TextRow";

import { isPositive } from "../Utils";
import Styles from "../Styles";
import { GREEN, RED } from "../Constants";

const Returns = ({ daily, monthly, yearly }) => (
  <View style={Styles.sInnerStatsLayout}>
    <Text style={Styles.sReturnAndIndexHeader}>RETURNS</Text>
    {daily ? (
      <TextRow
        textStyle={{ color: isPositive(daily) ? GREEN : RED }}
        text={`Daily : ${daily.toFixed(4)}`}
      />
    ) : null}
    {monthly ? (
      <TextRow
        textStyle={{ color: isPositive(monthly) ? GREEN : RED }}
        text={`Monthly : ${monthly.toFixed(4)}`}
      />
    ) : null}
    {yearly ? (
      <TextRow
        textStyle={{ color: isPositive(yearly) ? GREEN : RED }}
        text={`Yearly : ${yearly.toFixed(4)}`}
      />
    ) : null}
  </View>
);
export default Returns;
