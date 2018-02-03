import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { fetchCase, fetchHistory } from "../Store/Actions/CaseActions";
import { connect } from "react-redux";
import CaseDetails from "./CaseDetails";
import Loader from "./Loader";
import Error from "./Error";

class DetailsScreen extends Component {
  componentDidMount() {
    let { _fetchCase, _fetchHistory, cases, id } = this.props;
    const isContains = cases.filter(sc => sc.scid == id).length > 0;
    !isContains ? _fetchCase(id) : "";
    let smallCase = cases.find(sc => sc.scid == id);
    const isContainsHistory = isContains && smallCase.history;
    !isContainsHistory ? _fetchHistory(id) : "";
  }

  render() {
    let { isLoading, isSuccess, isError, id, cases } = this.props;
    let smallCase = cases.find(sc => sc.scid == id);
    return (
      <View style={styles.container}>
        {smallCase ? (
          <CaseDetails smallCase={smallCase} />
        ) : isLoading && !isError ? (
          <Loader />
        ) : (
          <Error />
        )}
      </View>
    );
  }
}
const mapStateToProps = ({ Cases }) => {
  let { cases, isLoading, isSuccess, isError } = Cases;
  return { cases };
};

const mapDispatchToProps = (dispatch, props) => ({
  _fetchCase: id => dispatch(fetchCase(id)),
  _fetchHistory: id => dispatch(fetchHistory(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
