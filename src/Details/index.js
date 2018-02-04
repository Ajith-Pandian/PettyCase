import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

import CaseDetails from "./CaseDetails";
import Loader from "./Loader";
import Error from "./Error";

import Styles from "../Styles";

import { fetchCase, fetchHistory } from "../Store/Actions/CaseActions";

class DetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    let { state: { params: { name } } } = navigation;
    return { title: name ? name : "PettyCase" };
  };

  componentDidMount() {
    let { _fetchCase, _fetchHistory, cases, id, navigation } = this.props;

    const isContains = cases.filter(sc => sc.scid == id).length > 0;
    if (isContains) {
      // Update history if it is not there
      let smallCase = cases.find(sc => sc.scid == id);
      !smallCase.history ? _fetchHistory(id) : "";
      // Set case name as Toolbar title
      navigation.setParams({ name: smallCase.info.name });
    } else {
      _fetchCase(id);
    }
  }

  render() {
    let { isLoading, isSuccess, isError, id, cases, navigation } = this.props;
    let smallCase = cases.find(sc => sc.scid == id);
    return (
      <View style={Styles.sContainer}>
        {isLoading ? (
          <Loader />
        ) : smallCase ? (
          <CaseDetails smallCase={smallCase} />
        ) : isError ? (
          <Error />
        ) : (
          <Error />
        )}
      </View>
    );
  }
}

const mapStateToProps = ({ Cases }) => {
  let { cases, isLoading, isSuccess, isError } = Cases;
  return { cases, isLoading, isSuccess, isError };
};

const mapDispatchToProps = (dispatch, props) => ({
  _fetchCase: id => dispatch(fetchCase(id)),
  _fetchHistory: id => dispatch(fetchHistory(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);
