import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import CasesGrid from "./CasesGrid";

import Styles from "../Styles";

export default class Home extends Component {
  render() {
    let { navigation } = this.props;
    return (
      <View style={Styles.sContainer}>
        <CasesGrid onPressItem={id => navigation.navigate("Details", { id })} />
      </View>
    );
  }
}
