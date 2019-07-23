import React, {Component} from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';
import {LinearGradient} from "expo";
import Swiper from "react-native-swiper";
import Layout from "../constants/Layout";
import styled from "styled-components";
import { Actions } from 'react-native-router-flux';
import { movies } from "../api";
import MovieSlide from "../components/MovieSlide"


const SWIPER_HEIGHT = Layout.height;
const ScrollView = styled.ScrollView`
  background-color: ${"red"};
`;

export default class Activity2 extends Component{
    constructor(props, screenState) {
        super(props)
        this.onPressLearnMore = this.onPressLearnMore.bind(this)
    }

    state = {nowPlaying : null, movie : null, viewStatus : false}

    onPressLearnMore() {
        Actions.scarlet()
    };

    async componentWillMount() {
        let nowPlaying, movie ;
        movie = new Array;
        console.log('Activity2 component will mount')
        try{
            ({data: {results:nowPlaying}} = await movies.getNowPlaying());
            //movie = data.filter(movie => movie.backdrop_path !== null).map
            //console.log(movie)
            //nowPlaying = await movies.getNowPlaying();
            //console.log(nowPlaying)
            nowPlaying.filter(movie => movie.backdrop_path !== null).map(
                data=>{ movie.push(data) }
            )
            //console.log(movie)
            //console.log(movie)
            viewStatus = true
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ nowPlaying,
                 movie, viewStatus })
        }
    }
    render() {
        console.log('Acivity2 render is called')
        const {nowPlaying, movie, viewStatus } = this.state;
        // console.log(nowPlaying)
        // console.log('nowPlaying : ' + nowPlaying)
        // console.log('movie : ' + movie)
        console.log('\n\n')
  
        return(
            <ScrollView>
            <LinearGradient style={{ height : SWIPER_HEIGHT *4/3 }} colors={["yellow", "red"]}>
                <Swiper 
                    showsPagination={false}
                    //autoplay={true}
                    style={{ height: SWIPER_HEIGHT / 3 }}
                    autoplayTimeout={3} >
                    {
                        viewStatus == true ? movie.forEach(object => (console.log(object + ' : ' + object.id))) : (console.log('loading'))
                    }
                    {viewStatus == true ? movie.map((value, index) => (
                        
                        
                        <View key={value.id}>
                            <MovieSlide
                            overview={value.overview}
                            voteAvg={value.vote_average}
                            title={value.title}
                            id={value.id}
                            backgroundPhoto={value.backdrop_path}
                            posterPhoto={value.poster_path}
                            />
                        </View>
                        
                        
                        )) : (console.log('loading..'))}

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
                    title={"Learn More" }
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
    
                <View style={{ height: SWIPER_HEIGHT  }}>
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
            </ScrollView>
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
