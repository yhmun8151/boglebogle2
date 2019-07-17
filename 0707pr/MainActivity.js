import React, {Component} from 'react'
import { StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from "expo";
import Swiper from "react-native-swiper";
import Layout from "../constants/Layout";
import styled from "styled-components";
import Activity1 from "../0707pr/Activity1"
import Activity2 from "../0707pr/Activity2"
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
        alert('this is MainActivity constructor');
    }
    render() {
            //if ( this.state.screenState == 0) {
                return(
                    <Router>
                        <Scene key='root'>
                            <Scene 
                                key='scarlet'
                                component={Activity1}
                                title="Activity1"
                                initial={true}
                            />
                            <Scene
                                key="gray"
                                component={Activity2}
                                title="uncompleted"
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