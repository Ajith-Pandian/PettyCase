import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import { store, persistor } from "./Store";
import HomeScreen from "./Home";
import DetailsScreen from "./Details";
import { withParamsToProps } from "./Utils";
const StackApp = StackNavigator(
  {
    Home: { screen: withParamsToProps(HomeScreen) },
    Details: { screen: withParamsToProps(DetailsScreen) }
  },
  { navigationOptions: { title: "PettyCase" } }
);

const ReduxApp = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StackApp />
    </PersistGate>
  </Provider>
);

export default ReduxApp;
