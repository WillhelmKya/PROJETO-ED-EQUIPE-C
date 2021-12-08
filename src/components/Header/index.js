import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

export const Header = () => {
    return (
        <View style={styles.header}>
            <Image source={require('../../../assets/icon.png')} style={{width: 40, height: 40}} resizeMode='contain'/>
            <Text style = {{fontSize:15, color:'white', paddingLeft:10}}>Nome Usuário</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 90,
        backgroundColor: '#232323',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingTop: 35
    },
})