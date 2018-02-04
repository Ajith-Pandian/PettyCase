import React, { Component } from "react";
import Case from "./Model/Case";
import Snackbar from "react-native-snackbar";

export const withParamsToProps = Component => {
  return class extends Component {
    static navigationOptions = Component.navigationOptions; // better use hoist-non-react-statics
    render() {
      const { navigation: { state: { params } } } = this.props;
      return <Component {...params} {...this.props} />;
    }
  };
};

export const showSnackBar = isConnected => {
  let title = isConnected ? "Online" : "Offline";
  let duration = isConnected
    ? Snackbar.LENGTH_SHORT
    : Snackbar.LENGTH_INDEFINITE;
  Snackbar.show({ title, duration });
};

export function getCaseFromJson(smallCase) {
  let {
    scid,
    constituents,
    rationale,
    flags,
    info,
    keywords,
    newsTag,
    segments,
    stats,
    updates,
    version
  } = smallCase;
  const newCase = new Case(
    scid,
    constituents,
    rationale,
    flags,
    info,
    keywords,
    newsTag,
    segments,
    stats,
    updates,
    version
  );
  return newCase;
}

export const isPositive = num => num > 0;
