import React from "react";
import { Text, View } from "react-native";
import { LineChart } from "react-native-svg-charts";
import * as shape from "d3-shape";

import Styles from "../Styles";
import { SCREEN_WIDTH, PRIMARY_DARK } from "../Constants";

const Chart = props => {
  let { history } = props;
  const data = history ? history.points.map(point => point.index) : [0, 1];
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
};
export default Chart;
