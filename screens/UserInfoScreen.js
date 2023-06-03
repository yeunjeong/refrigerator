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
const settingImg = require('../assets/setting_icon.png');
const profileImg = require('../assets/profile_img.png');
const profileName = '현희';

function UserInfoScreen({navigation}) {
  return (
    <View style={styles.container}>
        <StatusBar style='auto'></StatusBar>
        <ImageBackground source={bgImg} resizeMode='cover' style={styles.backgroundImage}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.pop()} style={styles.headerLeft}>
                    <Image source={goBackImg}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ProfileSetting')} style={styles.headerRight}>
                    <Image source={settingImg}></Image>
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

export default UserInfoScreen;

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
        flexDirection:'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    headerLeft:{
        flex:1,
    },
    headerRight:{
        flex:1,
        alignItems:'flex-end'
    },
    userInfo:{
        flex:4,
        paddingTop:40,
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