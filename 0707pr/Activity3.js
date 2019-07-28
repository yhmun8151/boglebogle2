import React, {Component} from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';
import {LinearGradient} from "expo";
import Swiper from "react-native-swiper";
import Layout from "../constants/Layout";
import styled from "styled-components";
import MovieItem from "../components/MovieItem";
import Section from "../components/Section";
import MainActivity from "../0707pr/MainActivity";
import { Actions } from 'react-native-router-flux';
import { movies } from '../api';


const SWIPER_HEIGHT = Layout.height / 3;
const Container = styled.ScrollView`
  background-color: ${"red"};
`;

export default class Activity3 extends Component{
    state = {
        upcoming: null,
        popular: null,
    }
    constructor(props, screenState) {
        super(props)
        this.onScreenMover = this.onScreenMover.bind(this)
    }
    onScreenMover() {
        Actions.Activity1()
    };

    async componentWillMount() {
        try {
            ({
                data: { results: upcoming }
            } = await movies.getUpcoming());
            ({
                data: { results: popular }
            } = await movies.getPopular());
        } catch(error) {
            console.log(error)
        } finally {
            this.setState({
                upcoming,
                popular
            })
        }
    }

    render() {
        const {upcoming, popular} = this.state
        return(
            <Container>
                <LinearGradient colors={["#000000","#FFFFFF"]} style={{flex : 1}}>
                    <Button
                        onPress={this.onScreenMover }
                        title={ "Move To Activity1" }
                        color="#841584"
                        accessibilityLabel="Move To Activity1"
                    />

                    {upcoming ? (
                            <Section title="Upcoming Movies">
                            {upcoming
                                .filter(movie => movie.poster_path !== null)
                                .map(movie => (
                                <MovieItem
                                    key={movie.id}
                                    id={movie.id}
                                    posterPhoto={movie.poster_path}
                                    title={movie.title}
                                    voteAvg={movie.vote_average}
                                />
                                ))}
                            </Section>
                        ) : null}
                        {popular ? (
                            <Section horizontal={false} title="Popular Movies">
                            {popular
                                .filter(movie => movie.poster_path !== null)
                                .map(movie => (
                                <MovieItem
                                    horizontal={true}
                                    key={movie.id}
                                    id={movie.id}
                                    posterPhoto={movie.poster_path}
                                    title={movie.title}
                                    overview={movie.overview}
                                    voteAvg={movie.vote_average}
                                />
                                ))}
                            </Section>
                        ) : null}
                        <Section title="This Activity's 3"></Section>
                </LinearGradient>

            </Container>
            )
    }

};