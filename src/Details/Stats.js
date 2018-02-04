import React from "react";
import { View, Text } from "react-native";

import ModelAndImage from "./ModelAndImage";
import Returns from "./ReturnsValue";
import Index from "./IndexValue";

import Styles from "../Styles";

const Stats = ({ stats, type, image }) => {
  let {
    returns: { daily, monthly, yearly },
    indexValue,
    unadjustedIndex,
    lastCloseIndex
  } = stats;
  let { sRow, sCardContainer, sReturnAndIndex } = Styles;

  return (
    <View style={[sRow, sCardContainer]}>
      <ModelAndImage type={type} image={image} />
      <View style={sReturnAndIndex}>
        <Returns daily={daily} monthly={monthly} yearly={yearly} />
        <Index
          value={indexValue}
          unadjusted={unadjustedIndex}
          close={lastCloseIndex}
        />
      </View>
    </View>
  );
};
export default Stats;
