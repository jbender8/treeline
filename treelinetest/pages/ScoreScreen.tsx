import React, {Component} from "react";
import {StyleSheet,View, Text, AsyncStorage, Button} from "react-native";
import customData from './score/score.json';
import { number } from "prop-types";


export class ScoreScreen extends Component{

    static current_score = 5;


    static increaseScore(increase){
        ScoreScreen.current_score += increase;
    }

    static decreaseScore(decrease){
        ScoreScreen.current_score -= decrease;
    }

    render(){
        return (
        <View>
            <Text>Current Score: {ScoreScreen.current_score}</Text>
        </View>
        );
    }
}
