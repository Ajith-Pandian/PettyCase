import React from "react";
import { View, Text } from "react-native";
import HTML from "react-native-render-html";
import moment from "moment";

import Styles from "../Styles";
import { SCREEN_WIDTH, PRIMARY_DARK, GREEN } from "../Constants";

const Updates = ({ updates, currentVersion }) => (
  <View style={Styles.sCardContainer}>
    <Text style={{ color: PRIMARY_DARK, fontWeight: "500" }}>UPDATES</Text>
    {updates.map(({ label, rationale, date, version }, key) => {
      return (
        <View style={{ marginVertical: 5 }} key={key}>
          <Text style={{ marginBottom: 2, color: "black" }}>{label}</Text>
          <HTML html={rationale} imagesMaxWidth={SCREEN_WIDTH - 20} />
          <Text style={{ marginBottom: 2 }}>
            Date : {moment(date).format("MM/DD/YYYY HH:mm:ss")}
          </Text>
          <Text>
            <Text
              style={{
                marginBottom: 2,
                color: currentVersion === version ? GREEN : null
              }}
            >
              Version : {version}
            </Text>
          </Text>
        </View>
      );
    })}
  </View>
);

export default Updates;
