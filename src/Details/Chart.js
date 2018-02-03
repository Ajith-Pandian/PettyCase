import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor
} from "react-native";
import { LineChart, YAxis, XAxis } from "react-native-svg-charts";
import * as shape from "d3-shape";
import { SCREEN_WIDTH } from "../Constants";
export default class LineChartExample extends React.PureComponent {
  render() {
    const data = [
      50,
      10,
      40,
      95,
      -4,
      -24,
      85,
      91,
      35,
      53,
      -53,
      24,
      50,
      -20,
      -80
    ];

    return (
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 2,
          elevation: 4,
          marginVertical: 10
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Historical</Text>
        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: "grey",
            marginVertical: 5
          }}
        />
        <LineChart
          style={{ height: 200, width: SCREEN_WIDTH - 20 }}
          dataPoints={data}
          fillColor={"purple"}
          shadowOffset={3}
          svg={{
            stroke: "rgb(134, 65, 244)"
          }}
          shadowSvg={{
            stroke: "rgba(134, 65, 244, 0.2)",
            strokeWidth: 5
          }}
          contentInset={{ top: 20, bottom: 20 }}
          curve={shape.curveLinear}
        />
      </View>
    );
  }
}
