import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor
} from "react-native";
import { LineChart } from "react-native-svg-charts";
import * as shape from "d3-shape";

export default class LineChartExample extends React.PureComponent {
  render() {
    const data = [50, 10, 10, 40, 95];

    return (
      <LineChart
        style={{ height: 200, width: 200 }}
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
    );
  }
}
