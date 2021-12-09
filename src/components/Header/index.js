import React from "react";
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons'

export const Header = () => {
    const [saldo, setSaldo] = React.useState (0)

    const converterParaReais = (saldoAtual) => {
        const novoSaldo = saldoAtual / 100

        return novoSaldo.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
    }

    const adicionar = () => {
        setSaldo(saldo+100)
    }

    return (
        <View style={styles.header}>
            <View style={styles.iconLogo}>
                <Image source={require('../../../assets/icon.png')} style={{width: 40, height: 40, paddingLeft: 100}} resizeMode='contain'/>
            </View>
            <Text style={{fontSize: 26, color: 'white'}}>Saldo</Text>
            <View style={{flexDirection: 'row'}}>
                <TextInput 
                    keyboardType='numeric' 
                    style={{
                        color: 'white', 
                        fontSize: 40, 
                    }}
                >
                    R$ {converterParaReais(saldo)}
                </TextInput>
                <TouchableOpacity 
                    onPress = {()=>adicionar()}
                    
                    style={styles.buttonSaldo}
                >
                    <Feather name='plus' size={30} style={{color: 'white'}}/>
                </TouchableOpacity>
            </View>

        </View>
    )
    }

const styles = StyleSheet.create({
    header: {
        height: 200,
        backgroundColor: '#3E3E3E',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 35,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    iconLogo: {
        backgroundColor: '#161616',
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginLeft: 250
    },
    buttonSaldo: {
        backgroundColor: '#80B01B',
        borderRadius: 30,
        height: 50,
        width: 50,
        alignItems:'center',
        justifyContent: 'center',
        marginLeft: 170,
    },

})