import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { fetchCase } from "../Store/Actions/CaseActions";
import { connect } from "react-redux";
import CaseDetails from "./CaseDetails";
import Loader from "./Loader";
import Error from "./Error";

class DetailsScreen extends Component {
  componentDidMount() {
    let { _fetchCase, cases, id } = this.props;
    const isContains = cases.filter(sc => sc.scid == id).length > 0;
    console.log(isContains);

    !isContains ? _fetchCase(id) : "";
  }

  render() {
    let { isLoading, isSuccess, isError } = this.props;
    return (
      <View style={styles.container}>
        {isError ? <Error /> : isLoading ? <Loader /> : <CaseDetails />}
      </View>
    );
  }
}
const mapStateToProps = ({ Cases }) => {
  let { cases, isLoa } = Cases;
  return { cases };
};

const mapDispatchToProps = (dispatch, props) => ({
  _fetchCase: id => dispatch(fetchCase(id))
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
