import React from "react";
import { AppLoading, Font } from "expo";
import { StatusBar, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MainNavigation from "./navigation/MainNavigation";
import MainActivity from "./0707pr/MainActivity";
import { Router, Scene } from 'react-native-router-flux'

export default class App extends React.Component {
  state = {
    loaded: false
  };

  handleError = error => console.log(error);

  handleLoaded = () => this.setState({ loaded: true });

  loadAssets = async () => {
    await Font.loadAsync({
      ...Ionicons.font
    });
  };

  render() {
    const { loaded } = this.state;
    
    if (loaded) {
      return (
        <>
          <StatusBar barStyle="light-content" />
          <MainNavigation />

        </>
      );
    } else {
      return (
        <AppLoading
          startAsync={this.loadAssets}
          onFinish={this.handleLoaded}
          onError={this.handleError}
        />
      );
    }
    
   /*
   return (
      <MainActivity/> 
    )
    */
  }
}
