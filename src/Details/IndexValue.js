import React from "react";
import { View, Text } from "react-native";

import TextRow from "./TextRow";

import { isPositive } from "../Utils";
import Styles from "../Styles";

const Index = ({ value, unadjusted, close }) => (
  <View style={Styles.sReturnAndIndex}>
    <Text style={Styles.sReturnAndIndexHeader}>INDEX</Text>
    {value ? <TextRow text={`Value : ${value.toFixed(4)}`} /> : null}
    {unadjusted ? (
      <TextRow text={`Unadjusted : ${unadjusted.toFixed(4)}`} />
    ) : null}
    {close ? <TextRow text={`LastClosing : ${close.toFixed(4)}`} /> : null}
  </View>
);
export default Index;
