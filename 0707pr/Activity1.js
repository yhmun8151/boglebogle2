import React, {Component} from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';
import {LinearGradient} from "expo";
import Swiper from "react-native-swiper";
import Layout from "../constants/Layout";
import styled from "styled-components";
import MainActivity from "../0707pr/MainActivity"
import { Actions } from 'react-native-router-flux'


const SWIPER_HEIGHT = Layout.height / 3;
const Container = styled.ScrollView`
  background-color: ${"red"};
`;

export default class Activity1 extends Component{
    constructor(props, screenState) {
        super(props)
        this.onPressLearnMore = this.onPressLearnMore.bind(this)
    }
    onPressLearnMore() {
        Actions.Activity2()
    };

    render() {
        console.log('Acivity1 render is called')
        return(
            <Container>
            <LinearGradient style={{ height : SWIPER_HEIGHT * 6 }} colors={["#00C6FB", "#005BEA", "red"]}>
                <Swiper style={{ height: SWIPER_HEIGHT }}>
                     <View >
                        <Text>Hi this is first layout :)</Text>
                        <Text>Hi this is first layout :)</Text>
                        <Text>Hi this is first layout :)</Text>
                        <Text>Hi this is first layout :)</Text>
                        <Text>Hi this is first layout :)</Text>
                    </View>
                    <Text>Hi this is first layout :) {Layout.height}</Text>
                    <Text>Hi this is first layout :) {SWIPER_HEIGHT}</Text>
                </Swiper>
                
                <Button
                    onPress={this.onPressLearnMore }
                    title={"MoveScreen" }
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
    
                <View style={{ height: SWIPER_HEIGHT * 5 }}>
                    <Text>춘천가는 기차는 나를 데리고 가네~ :D</Text>
                    <Text>춘천가는 기차는 나를 데리고 가네~ :D</Text>
                    <Text>춘천가는 기차는 나를 데리고 가네~ :D</Text>
                    <Text>춘천가는 기차는 나를 데리고 가네~ :D</Text>
                    <Text>춘천가는 기차는 나를 데리고 가네~ :D</Text>
                    <Text>춘천가는 기차는 나를 데리고 가네~ :D</Text>
                    <Text>춘천가는 기차는 나를 데리고 가네~ :D</Text>
                    <Text>춘천가는 기차는 나를 데리고 가네~ :D</Text>
                    <Text>춘천가는 기차는 나를 데리고 가네~ :D</Text>
                    <Text>춘천가는 기차는 나를 데리고 가네~ :D</Text>
                    <Text>춘천가는 기차는 나를 데리고 가네~ :D</Text>
                    <Text>춘천가는 기차는 나를 데리고 가네~ :D</Text>
                    <Text>춘천가는 기차는 나를 데리고 가네~ :D</Text>
                    <Text>춘천가는 기차는 나를 데리고 가네~ :D</Text>
                    <Text>춘천가는 기차는 나를 데리고 가네~ :D</Text>
                    <Text>춘천가는 기차는 나를 데리고 가네~ :D</Text>
                    <Text>춘천가는 기차는 나를 데리고 가네~ :D</Text>
                    <Text>춘천가는 기차는 나를 데리고 가네~ :D</Text>
                    <Text>춘천가는 기차는 나를 데리고 가네~ :D</Text>
                    <Text>춘천가는 기차는 나를 데리고 가네~ :D</Text>
                    <Text>춘천가는 기차는 나를 데리고 가네~ :D</Text>
                    <Text>춘천가는 기차는 나를 데리고 가네~ :D</Text>
                    <Text>춘천가는 기차는 나를 데리고 가네~ :D</Text>
                    <Text>춘천가는 기차는 나를 데리고 가네~ :D</Text>
                    <Text>춘천가는 기차는 나를 데리고 가네~ :D</Text>
                    <Text>춘천가는 기차는 나를 데리고 가네~ :D</Text>
                    <Text>춘천가는 기차는 나를 데리고 가네~ :D</Text>
                </View>
                
            </LinearGradient>
            </Container>
        )
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
