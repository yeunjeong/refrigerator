import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View, 
    Button, 
    StyleSheet, 
    ScrollView, 
    Text, 
    TouchableOpacity, 
    Image, 
    ImageBackground} from 'react-native';
import colors from '../assets/colors/colors';

const bgImg = require('../assets/background.png');
const goBackImg = require('../assets/icon_arrow-left.png');
const profileImg = require('../assets/profile_img.png');
const profileName = '현희';

function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
        <StatusBar style='auto'></StatusBar>
        <ImageBackground source={bgImg} resizeMode='cover' style={styles.backgroundImage}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Community')}>
                    <Image source={goBackImg}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.userInfo}>
                <Image style={styles.userInfoImage} source={profileImg}></Image>
                <Text style={styles.userInfoText}>{profileName}</Text>
            </View>
            <View style={styles.userInfoList}>

            </View>
        </ImageBackground>
        
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: colors.headerGreen,
      paddingTop:20
    },
    backgroundImage:{
        flex:1,
        justifyContent: 'center',
    },
    header:{
        flex:1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    userInfo:{
        flex:4,
        justifyContent:'center',
        alignItems:'center',
    },
    userInfoImage:{
    },
    userInfoText:{
        fontSize:36,
        color:colors.profileNameGreen,
    },
    userInfoList:{
        flex:8,
    },
})