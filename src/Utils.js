import React, { Component } from "react";
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

export const getCaseFromJson = (id, {}) => new Case(id);
