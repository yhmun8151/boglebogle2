import React, {Component} from 'react'
import { StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from "expo";
import Swiper from "react-native-swiper";
import Layout from "../constants/Layout";
import styled from "styled-components";
import Activity1 from './Activity1';
import Activity2 from './Activity2';
import Activity3 from './Activity3';
import { createStack, createContainer } from "../navigation/config";
import MoviesScreen from "../screens/Movies"
import { Router, Scene } from 'react-native-router-flux'

const SWIPER_HEIGHT = Layout.height / 3;
const Container = styled.ScrollView`
  background-color: ${"red"};
`;

export default class MainActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {screenState:0};
    }
    render() {
            //if ( this.state.screenState == 0) {
                return(
                    <Router>
                        <Scene key='root'>
                            <Scene 
                                key='Activity1'
                                component={Activity1}
                                initial={true}
                                //hideTabBar={true}
                                hideNavBar={true}
                            />
                            <Scene
                                key="Activity2"
                                component={Activity2}
                                hideNavBar={true}
                            />
                            <Scene
                                key="Activity3"
                                component={Activity3}
                                hideNavBar={true}
                            />
                        </Scene>
                   </Router>
                )
            // } else {
            //     return(
            //         <Text>Loading...</Text>
            //     )
            // }
        }
};

const styles = StyleSheet.create( {
    layoutStyle : {
        flex: 1
    },
    swiperStyle : {
        flex: 1,
        justifyContent: 'center',
    },
    scrollViewStyle : {
        flex: 1
    }
})