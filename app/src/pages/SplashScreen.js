import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    Dimensions,
    Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons'




const SplashScreen = ({ navigation }) => {
    return (
        <View style = {styles.container}>
            <View style={styles.header}>
                <Animatable.Image
                    animation='bounceIn'
                    duration={1500}
                    
                source = {require('./icon.png')}
                style = {styles.logo}
                resizeMode = 'stretch'
                />
            </View>
            <Animatable.View 
                style= {styles.footer}
                animation = 'fadeInUpBig'
            >
                <Text style = {styles.title}>Suas finanças em um só lugar</Text>
                
                <View style = {styles.button}>
                <TouchableOpacity onPress={()=> navigation.navigate('HomeScreen')}  style = {styles.signIn}>
                    <Text style ={styles.textSign}>Iniciar sem conta</Text>
                    <Feather name='arrow-right' size={30} color='white'/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('SignIn')} >
                    <Text style = {styles.text}>Ou entre com sua conta</Text>
                </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default SplashScreen

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#232323'
    },
    header: {
        flex: 2,
        justifyContent:'center',
        alignItems:'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 80,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    text: {
        color:'black',
        marginTop:15,
        fontWeight:'bold',
        fontSize:14,
        textDecorationLine:'underline'
    },
    title:{
        color:'#05375a',
        fontSize:30,
        fontWeight:'bold',
        paddingBottom:10,
        marginTop:-40
    },
    button: {
        alignItems: 'center',
        marginTop:15,
    },
    signIn: {
        width: 250,
        height: 40,
        backgroundColor:'#00eaff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:50,
        flexDirection:'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
        fontSize:20,
        marginLeft:15,
        paddingHorizontal:12
    }
});