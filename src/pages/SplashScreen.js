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
                <Text style = {styles.text}>Entre com sua conta</Text>
                <View style = {styles.button}>
                <TouchableOpacity onPress={()=> navigation.navigate('SignIn')} style = {styles.signIn}>
                    <Text style ={styles.textSign}>Iniciar </Text>
                    <Feather name='arrow-right' size={30} color='white'/>
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
        backgroundColor:'#161616'
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
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    text: {
        color:'black',
        marginTop:5
    },
    title:{
        color:'#05375a',
        fontSize:30,
        fontWeight:'bold'
    },
    button: {
        alignItems: 'center',
        marginTop:30,
    },
    signIn: {
        width: 150,
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
        fontSize:20
    }
});