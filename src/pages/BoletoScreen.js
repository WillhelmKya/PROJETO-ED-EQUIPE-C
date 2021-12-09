import React, {useState} from "react";
import { Dimensions } from "react-native";
import { View, Text, SafeAreaView, Image, StyleSheet, ScrollView, Button, FlatList } from 'react-native';
import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons'
import { Header } from '../components/Header';
import HomeScreen from './HomeScreen';

const BoletoScreen = ({navigation}) => {
    return(
        <SafeAreaView style={{backgroundColor: '#161616', height: Dimensions.get('window').height+37}}>
            <Header/>
            
            <Text style={{fontSize:20, fontWeight: 'bold', color: 'white', marginLeft: 50, marginTop: 20}}>Boletos</Text>

            <ScrollView style={{
                backgroundColor: '#161616', 
                marginVertical: 30, 
                marginHorizontal: 30,}}
                fadingEdgeLength={5}
                
            >
                <View style={styles.scrollItem}>
                </View>
                <View style={styles.scrollItem}>
                </View>
                <View style={styles.scrollItem}>
                </View>
                <View style={styles.scrollItem}>
                </View>
                <View style={styles.scrollItem}>
                </View>
                <View style={styles.scrollItem}>
                </View>
                <View style={styles.scrollItem}>
                </View>
                <View style={styles.scrollItem}>
                </View>
                <View style={styles.scrollItem}>
                </View>
                <View style={styles.scrollItem}>
                </View>
                <View style={styles.scrollItem}>
                </View>
                <View style={styles.scrollItem}>
                </View>
                <View style={styles.scrollItem}>
                </View>
            </ScrollView>

            <View style={styles.tabBar}>
                <TouchableOpacity
                onPress={()=>navigation.navigate(HomeScreen)}
                style={styles.button}>
                    <Feather name='home' size={20} style={{marginTop: 10}}/>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.buttonMain} >
                    <Feather name='plus' size={30} style={{marginTop: 15}}/>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.button}
                onPress= {()=>navigation.navigate(BoletoScreen)}>
                    <Feather name='file' size={20} style={{marginTop: 10}}/>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#232323',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 50,
        paddingBottom: 10
    },
    button: {
        backgroundColor: '#10D1FC',
        borderRadius: 30,
        marginTop: 10,
        height: 40,
        width: 40,
        alignItems: 'center',
    },
    buttonMain: {
        backgroundColor: '#10D1FC',
        borderRadius: 30,
        height: 60,
        width: 60,
        alignItems: 'center',
        marginBottom: 30,
    },
    scrollItem: {
        height: 60,
        backgroundColor: '#10D1FC',
        marginTop: 5,
        borderRadius: 20,
    },
    buttonSaldo: {
        backgroundColor: 'white',
        borderRadius: 30,
        height: 60,
        width: 60,
        alignItems: 'center',
        marginTop: 45,
        marginLeft: 50,
    },
})

export default BoletoScreen