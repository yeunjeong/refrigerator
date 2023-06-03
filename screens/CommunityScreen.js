import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, Button, StyleSheet, ScrollView, Text, TouchableOpacity, Image} from 'react-native';
import colors from '../assets/colors/colors';

const searchImg = require('../assets/search_icon.png');
const notifyImg = require('../assets/notification_icon.png');
const userInfoImg = require('../assets/user_info_icon.png');
const tagMenuData = [['음식 자랑'], ['일상'], ['질문글'], ['기타'], ['test']];

function LoginScreen({navigation}) {
  return (
    
    <View style={styles.container}>
        
      <StatusBar style='auto'></StatusBar>
      <View style={styles.header}>
        <View style={styles.upperHeader}>
            <View style={styles.upperLeftHeader}>
                <Text style={styles.headerText}>냉장고도둑</Text>
            </View>
            <View style={styles.upperRightHeader}>
                <TouchableOpacity>
                    <Image style={styles.headerButton} source={searchImg}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                    <Image style={styles.headerButton} source={notifyImg}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('UserInfo')}>
                    <Image style={styles.headerButton} source={userInfoImg}></Image>
                </TouchableOpacity>
            </View>
            
        </View>
        <View style={styles.lowerHeader}>

        </View>
      </View>
      <View style={styles.tagMenu}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {tagMenuData.map((tagMenu, index) => (
              <View key={index} style={styles.tagMenuItem}>
                <Text style={styles.tagMenuText}>{tagMenu[0]}</Text>
              </View>
            ))}
        </ScrollView>

      </View>
      <View style={styles.messageBoard}>

      </View>
      
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
    header:{
        flex:2,
        backgroundColor: colors.headerGreen,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop:20,
    },
    upperHeader:{
        flexDirection: 'row',
        flex:1,
    },
    upperLeftHeader:{
        flex:2,
        paddingStart:5,
    },
    headerText:{
        fontSize:24,
        color:'white',
    },
    upperRightHeader:{
        flex:1,
        flexDirection: 'row',
        paddingEnd:20,
    },
    headerButton:{
        marginHorizontal:10,
    },
    lowerHeader:{
        flexDirection: 'row',
        flex:1,
    },
    tagMenu:{
        flex:1,
        backgroundColor: "white",
        paddingHorizontal:5,
    },
    tagMenuItem:{
        marginHorizontal:10,
        justifyContent:'center',
    },
    tagMenuText:{
        fontSize:14,
        color:colors.menuTextBlack,
        borderWidth:1,
        borderColor:colors.menuBorderGray,
        borderRadius:4,
        paddingHorizontal:15,
        paddingVertical:5,
    },
    messageBoard:{
        flex:11,
        backgroundColor:colors.messageBoardGray,
    }
})