import React, { Component } from "react";
import {
  NetInfo,
  Platform,
  StyleSheet,
  Text,
  View,
  ListView
} from "react-native";
import { connect } from "react-redux";

import CasesGrid from "./CasesGrid";
import { setIsConnected } from "../Store/Actions/CaseActions";

class Home extends Component {
  render() {
    let { navigation, isConnected } = this.props;
    return (
      <View style={styles.container}>
        <CasesGrid onPressItem={id => navigation.navigate("Details", { id })} />
      </View>
    );
  }
}

const mapStateToProps = ({ Cases }) => {
  let { cases, isConnected } = Cases;
  return { cases, isConnected };
};
const mapDispatchToProps = (dispatch, props) => ({
  _setIsConnected: isConnected => dispatch(setIsConnected(isConnected))
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
