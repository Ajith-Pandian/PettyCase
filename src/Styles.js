import { StyleSheet } from "react-native";
import { PRIMARY_DARK } from "./Constants";
const styles = StyleSheet.create({
  sContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  sCardContainer: {
    backgroundColor: "white",
    borderRadius: 2,
    elevation: 4,
    marginBottom: 10,
    padding: 10
  },
  sRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  sRankHeader: { fontWeight: "500", color: PRIMARY_DARK },
  sInnerStatsLayout: {
    alignItems: "center"
  },
  sReturnAndIndex: { marginVertical: 5 },
  sReturnAndIndexHeader: {
    fontWeight: "bold",
    color: PRIMARY_DARK,
    textAlign: "center"
  }
});
export default styles;
