import React, { Component } from "react";
import { ToastAndroid } from "react-native";
import Case from "./Model/Case";

export const withParamsToProps = Component => {
  return class extends Component {
    static navigationOptions = Component.navigationOptions; // better use hoist-non-react-statics
    render() {
      const { navigation: { state: { params } } } = this.props;
      return <Component {...params} {...this.props} />;
    }
  };
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
