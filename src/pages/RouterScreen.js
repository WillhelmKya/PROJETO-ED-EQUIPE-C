import React from "react";

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from "./SplashScreen";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import HomeScreen from "./HomeScreen";
import BoletoScreen from './BoletoScreen';

const Router = createStackNavigator();

const RouterScreen = ({navigation}) => (
    <Router.Navigator screenOptions = {{headerShown: false}}>
        <Router.Screen name = 'SplashScreen' component = {SplashScreen} />
        <Router.Screen name = 'SignIn' component = {SignIn} />
        <Router.Screen name = 'SignUp' component = {SignUp} />
        <Router.Screen name = 'HomeScreen' component = {HomeScreen} />
        <Router.Screen name = 'BoletoScreen' component = {BoletoScreen}/>
    </Router.Navigator>
)

export default RouterScreen;