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
import Snackbar from "react-native-snackbar";

import CasesGrid from "./CasesGrid";
import { setIsConnected } from "../Store/Actions/CaseActions";

class Home extends Component {
  componentDidMount() {
    let { _setIsConnected } = this.props;

    NetInfo.isConnected
      .fetch()
      .then(isConnected => _setIsConnected(isConnected))
      .done(() => {
        NetInfo.isConnected.addEventListener(
          "connectionChange",
          _setIsConnected
        );
      });
  }
  componentWillReceiveProps(nextProps) {
    let {} = nextProps;
    console.log(nextProps);
  }
  render() {
    let { navigation, isConnected } = this.props;
    let title = isConnected ? "Online" : "Offline";
    let duration = isConnected
      ? Snackbar.LENGTH_SHORT
      : Snackbar.LENGTH_INDEFINITE;
    Snackbar.show({ title, duration });
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
