import React, {useState} from "react";
import { Alert, Button, Dimensions } from "react-native";
import { TextInput, Image ,View, Text, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView, Modal, FlatList, RefreshControl } from 'react-native';
import styled from "styled-components";
import * as Animatable from "react-native-animatable";
import { Feather } from '@expo/vector-icons'
import BoletoScreen from './BoletoScreen';
import Saldo from '../models/Saldo';



const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = 150;

//TAD Fila
class Fila {
    constructor() {
      this.items = [];
      this.headIndex = 0;
      this.tailIndex = 0;
    }
    enqueue(item) {
      this.items[this.tailIndex] = item;
      this.tailIndex++;
      return this.items
    }
    dequeue() {
      const item = this.items[this.headIndex];
      delete this.items[this.headIndex];
      this.headIndex++;
      return item;
    }
    peek() {
      return this.items[this.headIndex];
    }
    get length() {
      return this.tailIndex - this.headIndex;
    }
  }


const HomeScreen = ({navigation}) => {

    const [isModalVisible,setIsModalVisible] = useState(false);

    const changeModalVisible = (bool) => {
        setIsModalVisible(bool)
    }

    const [saldo, setSaldo] = React.useState (0);

    const [adicao,setAdicao] = React.useState({
        adicaox: 0,
        subt: 0,
    })

/*
    const textSumChange = (val) =>{
        setAdicao ({
            ... adicao,
            adicaox: val,
        });

    }

    const textMinChange = (val) =>{
        setAdicao ({
            ... adicao,
            subt: val,
        });

    }
*/

    const calcular = () => {
        let add = adicao.adicaox - adicao.subt
        setSaldo (
            saldo+add
        )
    }

    const converterParaReais = (saldoAtual) => {
        const novoSaldo = saldoAtual / 1

        return novoSaldo.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
    }

    const [queue, setQueue] = useState(new Fila());

    const [refreshing, setRefreshing] = useState(false)

    const [lista, setLista] = useState(queue.items)

    const adicionar = () => {
        let add = adicao.adicaox - adicao.subt
        setSaldo (
            saldo+add
        )
        queue.enqueue(new Saldo(adicao.adicaox, adicao.subt))
        setQueue(queue)
        setLista((queue.items).reverse())
    }
    

    return(
        <SafeAreaView style={{backgroundColor: '#161616', height: Dimensions.get('window').height+38}}>
            <View style={styles.header}>
            <View style={styles.iconLogo}>
                <Image 
                source={require('../../assets/icon.png')} 
                style={{
                    width: 40, 
                    height: 40, 
                    paddingLeft: 100
                }} 
                resizeMode='contain'
                />
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
                    onPress = {()=>changeModalVisible(true)}
                    
                    style={styles.buttonSaldo}
                >
                    <Feather name='plus' size={30} style={{color: 'white'}}/>
                </TouchableOpacity>
            </View>

            </View>
            <Text style={{fontSize: 25, color: 'white', marginTop: 77, marginLeft: 30}}>Transações</Text>
        
            <View style={styles.flat} >
                <FlatList keyboardShouldPersistTaps='handled'
                    style={{borderRadius:30, marginVertical: 10,}}
                    data={lista}
                    keyExtractor={item=>item.id}
                    renderItem={({item})=>
                    <View style={styles.scrollItem}>
                        <Text style={{color:'black', fontWeight: 'bold', fontSize:18, justifyContent:'center', marginLeft:30,}}>R$ {item.saldoFinal}</Text>
                        <Text style={styles.textData}>{item.dataFinal}</Text>
                    </View>
                    }
                    refreshing={refreshing}
                    onRefresh={() => {
                        setRefreshing(true)
                        setQueue(queue)
                        setLista((queue.items).reverse())
                        console.log('Refreshing')
                        setRefreshing(false)
                        }
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
                onPress= {()=>navigation.navigate(BoletoScreen)}
                style={styles.buttonMain} >
                    <Feather name='plus' size={30} style={{marginTop: 15}}/>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.button}
                onPress= {()=>navigation.navigate(BoletoScreen)}>
                    <Feather name='file' size={20} style={{marginTop: 10}}/>
                </TouchableOpacity>
            </View>
            <Modal
                 
                transparent={true}
                animationType="fade"
                visible={isModalVisible}
                onRequestClose={() => changeModalVisible(false)}
                
            > 

                <View style={[styles.containertransparent]}>
                    <TouchableOpacity
                        disabled={true}
                        style={styles.container2}
                    >
                        <View style={styles.modal}>
                            <Text style={styles.textModal}>Recebidos e Gastos</Text>
                            <TextInput 
                                placeholder="Entrada" 
                                keyboardType='number-pad' 
                                textAlign="center" 
                                fontSize={25}
                                onChangeText={val => setAdicao({
                                    ... adicao,
                                    adicaox:val
                                })}
                                style={styles.textInputModal}
                            />
                            <TextInput 
                                placeholder="Saída"
                                keyboardType='number-pad' 
                                textAlign="center" 
                                fontSize={25}
                                onChangeText={val => setAdicao({
                                    ... adicao,
                                    subt:val
                                })}
                                style={styles.textInputModal}
                            />
                            <TouchableOpacity 
                                style={styles.buttonConfirm}
                                onPress={()=>{adicionar()}}
                            >
                                <Text style={{
                                    fontSize:25,
                                    color:'white'
                                }}
                                >
                                    Confirmar
                                </Text>
                            </TouchableOpacity>
                        </View>
                        
                    </TouchableOpacity>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#3E3E3E',
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 50,
        paddingBottom: 45,
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
    flat: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 410
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
      },
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
    container2 :{
        flex:1,
        alignItems:'center',
        justifyContent:'center'

    },
    containertransparent :{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.5)',
        alignItems:'center',
        justifyContent:'center'

    },
    modal: {
        height: HEIGHT_MODAL+ 70,
        width: WIDTH - 90,
        paddingTop: 10,
        backgroundColor:'#546b25',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'space-around'
    },
    textModal:{
        color:'white',
        fontSize:20
    },
    textInputModal: {
        width:'90%',
        height:50,
        borderWidth:2,
        backgroundColor:'white',
        borderColor:'#80B01B',
        borderRadius:40,
    },
    buttonConfirm: {
        width:200,
        height:50,
        backgroundColor:'#80B01B',
        borderRadius:40,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default HomeScreen