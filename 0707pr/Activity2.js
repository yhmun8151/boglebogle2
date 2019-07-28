import React, {Component} from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';
import {LinearGradient} from "expo";
import Swiper from "react-native-swiper";
import Layout from "../constants/Layout";
import styled from "styled-components";
import { Actions } from 'react-native-router-flux';
import { movies } from "../api";
import MovieSlide from "../components/MovieSlide"


const SWIPER_HEIGHT = Layout.height / 3;
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
        Actions.Activity3()
    };

    async componentWillMount() {
        let nowPlaying, movie ;
        movie = new Array;
        console.log('Activity2 component will mount')
        try{
            ({data: {results:nowPlaying}} = await movies.getNowPlaying());
            console.log(nowPlaying)
            nowPlaying.filter(movie => movie.backdrop_path !== null).map(
                data=>{ movie.push(data) }
            )
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
            <LinearGradient colors={["yellow", "red"]} style={styles.layoutStyle}>
                {viewStatus ? (
                <Swiper 
                    showsPagination={false}
                    autoplay={true}
                    style={{ height: SWIPER_HEIGHT}}
                    autoplayTimeout={3} >

                    {viewStatus == true ? movie.map((value, index) => (
                        <View key={value.id} style={{height: SWIPER_HEIGHT}}>
                            <MovieSlide
                            overview={value.overview} // 설명
                            voteAvg={value.vote_average} // 평점
                            title={value.title} // 제목
                            id={value.id}
                            backgroundPhoto={value.backdrop_path} // jpg path
                            posterPhoto={value.poster_path} // jpg path
                            />
                        </View>
                        )) : (console.log('loading..'))}
                </Swiper>
                ):null }

                <Button
                    onPress={this.onPressLearnMore }
                    title={"Learn More" }
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
    
                <View >
                    <Text>Test...</Text>
                    <Text>Test...</Text>
                    <Text>Test...</Text>
                    <Text>Test...</Text>
                    <Text>Test...</Text>
                    <Text>Test...</Text>
                    <Text>Test...</Text>
                    <Text>Test...</Text>
                    <Text>Test...</Text>
                    <Text>Test...</Text>
                    <Text>Test...</Text>
                    <Text>Test...</Text>
                </View>

            </LinearGradient>
            </ScrollView>
        )
    }
};


const styles = StyleSheet.create( {
    layoutStyle : {
        flex: 1,
    },
    swiperStyle : {
        flex: 1,
        justifyContent: 'center',
    },
    scrollViewStyle : {
        flex: 1
    }
})
