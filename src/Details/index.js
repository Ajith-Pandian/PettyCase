import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { fetchCase, fetchHistory } from "../Store/Actions/CaseActions";
import { connect } from "react-redux";
import CaseDetails from "./CaseDetails";
import Loader from "./Loader";
import Error from "./Error";

class DetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    let { state: { params: { name } } } = navigation;
    return { title: name ? name : "PettyCase" };
  };
  componentWillMount() {}

  componentDidMount() {
    let { _fetchCase, _fetchHistory, cases, id, navigation } = this.props;

    const isContains = cases.filter(sc => sc.scid == id).length > 0;
    if (isContains) {
      let smallCase = cases.find(sc => sc.scid == id);
      !smallCase.history ? _fetchHistory(id) : "";
      navigation.setParams({ name: smallCase.info.name });
    } else {
      _fetchCase(id);
    }
  }

  render() {
    let { isLoading, isSuccess, isError, id, cases, navigation } = this.props;
    let smallCase = cases.find(sc => sc.scid == id);
    return (
      <View style={styles.container}>
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <Error />
        ) : smallCase ? (
          <CaseDetails smallCase={smallCase} />
        ) : (
          <Loader />
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
