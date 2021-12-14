import React, {useState} from "react";
import { Dimensions } from "react-native";
import { View, Text, SafeAreaView, Image, StyleSheet,TextInput, TouchableOpacity
    , Modal, ScrollView, Button, FlatList } from 'react-native';
import * as Animatable from "react-native-animatable";
import { Feather } from '@expo/vector-icons'
import { Header } from '../components/Header';
import Boleto from '../models/Boleto';

const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = 150;

//TAD Lista
class Lista {
    //construtor da classe
    constructor(){
        this.a = [] //escolhemos [] para lista ao invés de {} por conta da maneira com que o React lê os dados
        this.n = 0 //define o tamanho da lista
    }
    //definir o valor em uma posição
    set(i,x){
        this.a[i] = x //atribui o valor dado em sua posição desejada pelo programador
    }
    //pegar um item da TAD
    get(i){
        return this.a[i] //retorna o item na posição desejada pelo programador
    }
    /*adiciona um item em certa posição, para o programa definimos essa posição sempre como 0, por conta do jeito
    com que os boletos são adicionados em somente uma ordem, que é sempre no topo*/
    add(i,x){
        /*if para saber se na posição há um item existente, se existir a lista rotaciona para direita, 
        assim alocando espaço para onde quer ser inserido*/
        if (this.a[i]!= null){
                this.a.splice(i,0,x)
            }
        //else para se não houver nenhum item,a função simplesmente adiciona o item no local desejado    
        else {
            this.a[i] = x;
        }
        this.n++; //aumenta a length(tamanho) da TAD
        return this.a
    }
    //remove um item qualquer em uma posição desejada
    remove(i){
        this.a.splice(i,1)//aqui é onde o item será removido e a lista será rotacionada para esquerda
        this.n--;//diminui a length da TAD
        return this.a
    }

}

const BoletoScreen = ({navigation}) => {

    const [isModalVisible,setIsModalVisible] = useState(false);

    const changeModalVisible = (bool) => {
        setIsModalVisible(bool)
    }

    const [novoBoleto, setNovoBoleto] = React.useState({
        label: '',
        vencimento: '',
    })
    
    const [lista, setLista] = useState(new Lista());

    const [refreshing, setRefreshing] = useState(false)

    const [listaItems, setListaItems] = useState(lista.items)

    const adicionar = () => {
        lista.add(0, new Boleto(novoBoleto.label, novoBoleto.vencimento))
        //Remove o último elemento(mais antigo), assim que o tamanho ultrapassa 10.
        if (lista.n > 10) {
            lista.remove(lista.n);
        }
        setLista(lista)
        setListaItems(lista.a)
    }

    return(
        <SafeAreaView style={{backgroundColor: '#161616', height: Dimensions.get('window').height+60}}> 
            <View style={styles.header}>
                <View>
                    <View style={styles.iconLogo}>
                        <Image source={require('../../assets/icon.png')} style={{width: 40, height: 40, paddingLeft: 100}} resizeMode='contain'/>
                    </View>
                </View>
            </View>
            <Text style={{fontSize:26 , color: 'white', marginLeft: 30, marginTop: 30}}>Boletos</Text>

            <View style={styles.flat} >
                <FlatList keyboardShouldPersistTaps='handled'
                    style={{borderRadius:30, marginVertical: 10,}}
                    data={listaItems}
                    keyExtractor={item=>item.id}
                    renderItem={({item})=>
                    <View style={styles.scrollItem}>
                        <Text style={{color:'black', fontWeight: 'bold', fontSize:18, justifyContent:'center', marginLeft:30,}}>{item.label}</Text>
                        <Text style={styles.textData}>{item.vencimento}</Text>
                    </View>
                    }
                    refreshing={refreshing}
                    onRefresh={() => {
                        setRefreshing(true)
                        setLista(lista)
                        setListaItems(lista.a)
                        console.log('Refreshing')
                        setRefreshing(false)
                        }
                    }
                />
            </View>

            <View style={styles.tabBar}>
                <TouchableOpacity
                onPress={()=>navigation.goBack()}
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
                            <Text style={styles.textModal}>Cadastrar Boleto</Text>
                            <TextInput 
                                placeholder="Data de Vencimento" 
                                keyboardType='decimal-pad'
                                textAlign="center" 
                                fontSize={15}
                                onChangeText={val => setNovoBoleto({
                                    ... novoBoleto,
                                    vencimento: val
                                })}
                                style={styles.textInputModal}
                            />
                            <TextInput 
                                placeholder="Título do Boleto" 
                                keyboardType='ascii-capable'
                                textAlign="center" 
                                fontSize={15}
                                onChangeText={val => setNovoBoleto({
                                    ... novoBoleto,
                                    label: val
                                })}
                                style={styles.textInputModal}
                            />
                            <TouchableOpacity 
                                style={styles.buttonConfirm}
                                onPress={()=>(adicionar(),changeModalVisible(false))}
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
    textData: {
        color: 'black',
        fontSize: 16,
        justifyContent: 'center',
        marginRight: 30,
    },
    flat: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 560
      },
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
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#E0E0E0',
        borderRadius: 30,
        marginTop: 15,
        width: 310,
        height: 63,
        alignItems: 'center',
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
        height: HEIGHT_MODAL+ 150,
        width: WIDTH - 80,
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
        width:'70%',
        height:40,
        borderWidth:2,
        backgroundColor:'white',
        borderColor:'#80B01B',
        borderRadius:40,
    },
    boletoInputModal: {
        width:'60%',
        height:'60%',
        borderWidth:2,
        backgroundColor:'white',
        borderColor:'#80B01B',
        borderRadius:40,
        textAlign:'center',
        textAlignVertical:'center',
        color:'#919191'
    },
    buttonConfirm: {
        width:180,
        height:40,
        backgroundColor:'#80B01B',
        borderRadius:40,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default BoletoScreen