import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { LineChart, YAxis, XAxis } from "react-native-svg-charts";
import * as shape from "d3-shape";
import { SCREEN_WIDTH, PRIMARY_DARK } from "../Constants";
import Styles from "../Styles";

export default class LineChartExample extends React.PureComponent {
  render() {
    let { history } = this.props;
    const data = history.points.map(point => point.index);
    return (
      <View style={Styles.sCardContainer}>
        {history ? (
          <View>
            <Text style={{ fontWeight: "bold", color: PRIMARY_DARK }}>
              HISTORICAL
            </Text>
            <LineChart
              style={{ height: 200, width: SCREEN_WIDTH - 40 }}
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
        ) : (
          <Text>No history</Text>
        )}
      </View>
    );
  }
}
