import React from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation";
import { StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from "expo";
import Swiper from "react-native-swiper";
import Layout from "../constants/Layout";
import styled from "styled-components";

const SWIPER_HEIGHT = Layout.height / 3;
const ScrollView = styled.ScrollView`
  padding-left: 20px;
`;

function MainActivity() {
    return (
        <LinearGradient style={styles.layoutStyle} colors={["#00C6FB", "#005BEA", "red"]}>
            <Swiper
            style={{ height: SWIPER_HEIGHT }}>
                <View style={{height:SWIPER_HEIGHT, flex:1}}>
                <Text>Hi this is first layout :)</Text>
                <Text>Hi this is first layout :)</Text>
                <Text>Hi this is first layout :)</Text>
                <Text>Hi this is first layout :)</Text>
                <Text>Hi this is first layout :)</Text>
                </View>
            <Text>Hi this is first layout :) {Layout.height}</Text>
            <Text>Hi this is first layout :) {SWIPER_HEIGHT}</Text>
            </Swiper>
            <ScrollView 
            style = {{height: Layout.height/2}}>
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
            </ScrollView>

        </LinearGradient>
    )
}

const styles = StyleSheet.create( {
    layoutStyle : {
        flex: 1,
    }
})

export default MainActivity;