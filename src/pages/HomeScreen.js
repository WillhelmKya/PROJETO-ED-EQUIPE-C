import React, {useState} from "react";
import { Dimensions } from "react-native";
import { TextInput,View, Text, SafeAreaView, StyleSheet, ScrollView, Modal, FlatList } from 'react-native';
import styled from "styled-components";
import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons'
import { Header } from '../components/Header';
import BoletoScreen from './BoletoScreen';


const HomeScreen = ({navigation}) => {

    return(
        <SafeAreaView style={{backgroundColor: '#161616', height: Dimensions.get('window').height+38}}>
            <Header/>

            <Text style={{fontSize: 25, color: 'white', marginTop: 77, marginLeft: 30}}>Transações</Text>
            
            <FlatList style={{
                backgroundColor: 'white', 
                marginTop: 20,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                }}
                fadingEdgeLength={5}
                >
                    data={teste}
                    keyExtractor={item=>item.id}
                    renderItem={item=><Text style={{fontSize:20, color:'black'}}>{item.nome}</Text>}
            </FlatList>
            
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
        backgroundColor: '#3E3E3E',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 50,
        paddingBottom: 10,
    },
    button: {
        backgroundColor: '#80B01B',
        borderRadius: 30,
        marginTop: 10,
        height: 40,
        width: 40,
        alignItems: 'center',
    },
    buttonMain: {
        backgroundColor: '#80B01B',
        borderRadius: 30,
        height: 60,
        width: 60,
        alignItems: 'center',
        marginBottom: 30,
    },
    scrollItem: {
        height: 55,
        backgroundColor: '#E0E0E0',
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 30,
        
    },
    modalBackground: {
        flex:1,
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent:'center',
        alignItems:'center'
    }
})

export default HomeScreen