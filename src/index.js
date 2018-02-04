import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, NetInfo } from "react-native";
import { StackNavigator } from "react-navigation";
import { Provider, connect } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import { store, persistor } from "./Store";
import { setIsConnected } from "./Store/Actions/CaseActions";
import HomeScreen from "./Home";
import DetailsScreen from "./Details";
import { withParamsToProps } from "./Utils";
import { PRIMARY, PRIMARY_DARK } from "./Constants";

const StackApp = StackNavigator(
  {
    Home: { screen: withParamsToProps(HomeScreen) },
    Details: { screen: withParamsToProps(DetailsScreen) }
  },
  {
    navigationOptions: {
      title: "PettyCase",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: PRIMARY
      }
    }
  }
);

class App extends Component {
  componentDidMount() {
    NetInfo.isConnected
      .fetch()
      .then()
      .done(() => {
        NetInfo.isConnected.addEventListener("connectionChange", isConnected =>
          this.changeIsConnected(isConnected)
        );
      });
  }
  changeIsConnected = isConnected => {
    let { _setIsConnected } = this.props;
    console.log("connection changed");
    _setIsConnected(isConnected);
  };
  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener("connectionChange", isConnected =>
      this.changeIsConnected(isConnected)
    );
  }
  render() {
    return <StackApp />;
  }
}

const mapStateToProps = ({ Cases }) => {
  let { cases, isConnected } = Cases;
  return { cases, isConnected };
};
const mapDispatchToProps = (dispatch, props) => ({
  _setIsConnected: isConnected => dispatch(setIsConnected(isConnected))
});
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

const ReduxApp = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedApp />
    </PersistGate>
  </Provider>
);

export default ReduxApp;
