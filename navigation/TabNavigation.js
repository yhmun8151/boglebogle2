import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import MoviesScreen from "../screens/Movies";
import TVScreen from "../screens/TV";
import SearchScreen from "../screens/Search";
import { BG_COLOR } from "../constants/Colors";
import TabBarIcon from "../components/TabBarIcon";
import { createStack } from "./config";
import MainActivity from "../0707pr/MainActivity"

const TabNavigation = createBottomTabNavigator(
  {
    Movie: {
      screen: createStack(MoviesScreen, "부글보글"),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-film" : "md-film"}
          />
        )
      }
    },
    TV: {
      screen: createStack(TVScreen, "TV"),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-tv" : "md-tv"}
          />
        )
      }
    },
    Search: {
      screen: createStack(SearchScreen, "Search"),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-search" : "md-search"}
          />
        )
      }
    },
    MainActivity: {
      screen: createStack(MainActivity, "MainActivity"),
        
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: BG_COLOR
      }
    }
  }
);

export default createAppContainer(TabNavigation);
