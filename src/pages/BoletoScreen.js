import React, {useState} from "react";
import { Dimensions } from "react-native";
import { View, Text, SafeAreaView, Image, StyleSheet,TextInput, TouchableOpacity
    , Modal, ScrollView, Button, FlatList } from 'react-native';
import * as Animatable from "react-native-animatable";
import { Feather } from '@expo/vector-icons'
import { Header } from '../components/Header';
import HomeScreen from './HomeScreen';

const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = 150;

const BoletoScreen = ({navigation}) => {

    const [isModalVisible,setIsModalVisible] = useState(false);

    const changeModalVisible = (bool) => {
        setIsModalVisible(bool)
    }
    
    return(
        <SafeAreaView style={{backgroundColor: '#161616', height: Dimensions.get('window').height+38}}> 
            <View style={styles.header}>
                <View>
                    <View style={styles.iconLogo}>
                        <Image source={require('../../assets/icon.png')} style={{width: 40, height: 40, paddingLeft: 100}} resizeMode='contain'/>
                    </View>
                </View>
            </View>
            <Text style={{fontSize:26 , color: 'white', marginLeft: 30, marginTop: 30}}>Boletos</Text>

            <ScrollView style={{
                backgroundColor: 'white', 
                marginTop: 20,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
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
            </ScrollView>

            <View style={styles.tabBar}>
                <TouchableOpacity
                onPress={()=>navigation.navigate(HomeScreen)}
                style={styles.button}>
                    <Feather name='home' size={20} style={{marginTop: 10}}/>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>changeModalVisible(true)}
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
                                onPress={()=>calcular()}
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
    header: {
        height: 100,
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
    tabBar: {
        backgroundColor: '#3E3E3E',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 50,
        paddingBottom: 20,
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
    buttonSaldo: {
        backgroundColor: 'white',
        borderRadius: 30,
        height: 60,
        width: 60,
        alignItems: 'center',
        marginTop: 45,
        marginLeft: 50,
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

export default BoletoScreen