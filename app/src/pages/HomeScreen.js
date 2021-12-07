import React from "react";
import {View, Text} from 'react-native';
import * as Animatable from "react-native-animatable";

const HomeScreen = ({navigation}) => {
    return(
        <View style={{
            alignItems:'center',
            justifyContent:'flex-start',
            flex:1,
            paddingTop:50
        }}
        >
            <Text style = {{fontWeight:'bold',fontSize:50}}>Início</Text>
        </View>
    )
    
}

export default HomeScreen