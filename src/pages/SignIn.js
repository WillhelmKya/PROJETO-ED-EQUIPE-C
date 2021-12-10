import React, {useState} from "react";

import {
    View,
    Text,
    Button,
    StyleSheet,
    Dimensions,
    StatusBar,
    TextInput,
} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import SplashScreen from "./SplashScreen";
import HomeScreen from "./HomeScreen";


const SignIn = ({navigation}) => {

    const [data,setData] = React.useState({
        usuario: '',
        senha: '',
        check_textInputChange: false,
        secureTextEntry: true
    });

    const textInputChange = (val) => {
        if(lista.indexOf(val)>=0) {
            setData({
                ... data,
                usuario: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ... data,
                usuario: val,
                check_textInputChange: false
            })
        }
    }

    const handleSenha = (val) => {
        setData({
            ... data,
            senha: val
        });
    }

    const updateSecure = () => {
        setData({
            ... data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Text style = {styles.text_header}>Bem Vindo!</Text>
            </View>
            <View style = {styles.footer}>
                <Text style = {styles.text_footer}>Nome de Usuário</Text>
                <View style = { styles.action } >
                    <FontAwesome 
                        name='user-o' 
                        color= '#05375a' 
                        size ={20}
                    />
                    <TextInput
                        placeholder="Seu nome de usuário"
                        style= {styles.textInput}
                        autoCapitalize='none'
                        onChangeText= {(val)=>textInputChange(val)}
                    />
                    {data.check_textInputChange ?
                    <Animatable.View
                        animation='bounceIn'
                    >
                        
                        <Feather
                            name='check-circle'
                            color ='black'
                            size= {20}
                        />
                    </Animatable.View>
                    : null }
                </View>
                <Text style = {[styles.text_footer, 
                {marginTop:35}]}>Senha</Text>
                <View style = { styles.action } >
                    <FontAwesome 
                        name='lock' 
                        color= '#05375a' 
                        size ={20}
                    />
                    <TextInput
                        secureTextEntry={data.secureTextEntry ? true : false}
                        placeholder="Sua senha"
                        style= {styles.textInput}
                        autoCapitalize='none'
                        onChangeText= {(val)=>handleSenha(val)}
                    />
                    <TouchableOpacity
                        onPress = {updateSecure}
                    >
                        {data.secureTextEntry ?<Feather
                            name='eye-off'
                            color ='black'
                            size= {20}
                        />: <Feather
                        name='eye'
                        color ='black'
                        size= {20}
                    />}
                    </TouchableOpacity>     
                </View>

                <TouchableOpacity 
                    style = {styles.button}
                    onPress= {()=>navigation.navigate(HomeScreen)}
                >
                    <Text style = {styles.textSign}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress = {() => navigation.navigate('SignUp')}
                style = {styles.button1}>
                    <Text style = {styles.textSign1}>Registrar</Text>
                </TouchableOpacity>


            </View>


        </View>
    );
};

export default SignIn

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#161616'
    },
    header: {
        flex: 1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom:50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    text_header: {
        color: '#fff',
        fontWeight:'bold',
        fontSize:30
    },  
    text_footer:{
        color: '#05375a',
        fontSize: 18
    },
    text: {
        color:'black',
        marginTop:5
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth:1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput:{
        flex: 1,
        paddingLeft:10,
        color: '#05375a',
        fontSize: 15
    },
    button: {
        alignItems: 'center',
        justifyContent:'center',
        marginTop:30,
        backgroundColor:'#232323',
        borderRadius:20,
        height:50
    },
    button1: {
        alignItems: 'center',
        justifyContent:'center',
        marginTop:30,
        borderColor:'black',
        borderWidth:1,
        backgroundColor:'white',
        borderRadius:20,
        height:50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
    },
    textSign: {
        color:'white',
        fontWeight: 'bold',
        fontSize:18
    },
    textSign1: {
        color:'black',
        fontWeight: 'bold',
        fontSize:18
    }
});