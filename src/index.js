import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NetInfo,
  ToastAndroid,
  StatusBar
} from "react-native";
import { StackNavigator } from "react-navigation";
import { Provider, connect } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import SnackBar from "react-native-snackbar-component";

import HomeScreen from "./Home";
import DetailsScreen from "./Details";

import { withParamsToProps, showSnackBar } from "./Utils";
import { PRIMARY, PRIMARY_DARK } from "./Constants";

import { store, persistor } from "./Store";
import { setIsConnected } from "./Store/Actions/CaseActions";

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

//Component to check Network Connectivity
class App extends Component {
  state = { isSnackVisible: false };
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
    _setIsConnected(isConnected);
    this.setState({ isSnackVisible: !isConnected });
  };

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener("connectionChange", isConnected =>
      this.changeIsConnected(isConnected)
    );
  }

  render() {
    let { isConnected } = this.props;
    let { isSnackVisible } = this.state;
    let title = isConnected ? "Online" : "Offline";
    return (
      <View style={{ flex: 1 }}>
        <StackApp />
        <SnackBar visible={isSnackVisible} textMessage={title} />
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
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

//Status bar with bg color for IOS/Android
const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View
    style={{
      height: Platform.OS === "ios" ? 20 : StatusBar.currentHeight,
      backgroundColor
    }}
  >
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const StatusBarApp = () => (
  <View style={{ flex: 1 }}>
    <MyStatusBar backgroundColor={PRIMARY_DARK} barStyle="light-content" />
    <ConnectedApp />
  </View>
);

const ReduxApp = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StatusBarApp />
    </PersistGate>
  </Provider>
);

export default ReduxApp;
