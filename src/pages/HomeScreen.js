import React, {useState} from "react";
import { Dimensions } from "react-native";
import { TextInput,View, Text, SafeAreaView, StyleSheet, ScrollView, Modal, FlatList } from 'react-native';
import styled from "styled-components";
import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons'
import { Header } from '../components/Header';
import BoletoScreen from './BoletoScreen';
import Saldo from '../models/Saldo';




const HomeScreen = ({navigation}) => {

    const lista = []
    //Esses valores serão adicionados com o modal do + e o id será trocado para os milissegundos
    lista.push(new Saldo(100, 200, 1))
    lista.push(new Saldo(300, 0, 2))
    lista.push(new Saldo(150, 2, 3))
    lista.push(new Saldo(200, 1000, 4))
    lista.push(new Saldo(120.50, 10, 5))
    lista.push(new Saldo(300, 0, 6))
    lista.push(new Saldo(300, 0, 7))
    lista.push(new Saldo(300, 0, 8))
    lista.push(new Saldo(300, 0, 9))
    lista.push(new Saldo(300, 0, 10))
    lista.push(new Saldo(300, 0, 11))

    return(
        <SafeAreaView style={{backgroundColor: '#161616', height: Dimensions.get('window').height+50}}>
            <Header/>

            <Text style={{fontSize: 25, color: 'white', marginTop: 77, marginLeft: 30}}>Transações</Text>
        
            <View style={styles.flat}>
                <FlatList
                    style={{borderRadius:30, marginVertical: 10,}}
                    data={lista}
                    keyExtractor={item=>item.id}
                    renderItem={({item})=>
                    <View style={styles.scrollItem}>
                        <Text style={{color:'black', fontWeight: 'bold', fontSize:18, justifyContent:'center', marginLeft:30,}}>R$ {item.saldoFinal}</Text>
                        <Text style={styles.textData}>{item.dataFinal}</Text>
                    </View>
                    }
                />
            </View>
                    
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
        paddingBottom: 20,
        marginTop: Dimensions.get('window').height - 700,
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
    modalBackground: {
        flex:1,
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent:'center',
        alignItems:'center'
    },
    flat: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 400
      },
      textData: {
          color: 'black',
          fontSize: 16,
          justifyContent: 'center',
          marginRight: 30,
      },
      scrollItem: {
          justifyContent: 'space-between',
          flexDirection: 'row',
          backgroundColor: '#E0E0E0',
          borderRadius: 30,
          marginTop: 15,
          width: 310,
          height: 63,
          alignItems: 'center',
      }
})

export default HomeScreen