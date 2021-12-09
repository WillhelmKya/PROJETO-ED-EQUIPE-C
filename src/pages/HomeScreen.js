import React, {useState} from "react";
import { Dimensions } from "react-native";
import { TextInput,View, Text, SafeAreaView, StyleSheet, ScrollView, Modal } from 'react-native';
import styled from "styled-components";
import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons'
import { Header } from '../components/Header';
import BoletoScreen from './BoletoScreen';

/*
TAD lista para organização dos itens
*/

const TADLista = () => {
    const lista = [1,2,3]
}

const HomeScreen = ({navigation}) => {

    const [saldo, setSaldo] = React.useState (0)

    const converterParaReais = (saldoAtual) => {
        const novoSaldo = saldoAtual / 100

        return novoSaldo.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
    }

    const adicionar = () => {
        setSaldo(saldo+100)
    }

    return(
        <SafeAreaView style={{backgroundColor: '#161616', height: Dimensions.get('window').height+38}}>
            <Header/>
            
            <Text style={{fontSize:25, fontWeight: 'bold', color: 'white', marginLeft: 50, marginTop: 20}}>Saldo</Text>
            
            <View  style={styles.box}>
                <TextInput 
                    keyboardType='numeric' 
                    style={{
                        margin: 25, 
                        color: 'white', 
                        fontSize: 50, 
                        fontWeight: 'bold'
                    }}

                >
                    R$ {converterParaReais(saldo)}
                </TextInput>
                <TouchableOpacity 
                    onPress = {()=>adicionar()}
                    
                    style={styles.buttonSaldo}
                >
                    <Feather name='plus' size={30} style={{marginTop: 15, color: '#10D1FC'}}/>
                </TouchableOpacity>
            </View>
            
            <ScrollView style={{
                backgroundColor: '#161616', 
                marginVertical: 30, 
                marginHorizontal: 30
                }}
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
    box: {
        height: 150,
        borderRadius: 30,
        marginVertical: 5,
        marginHorizontal: 30,
        backgroundColor: '#10D1FC',
        flexDirection: 'row',
        alignItems: 'center'
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
        alignItems:'center',
        position:'relative',
        marginLeft: 10,
    },
})

export default HomeScreen