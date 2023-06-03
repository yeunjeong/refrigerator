import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, Button, StyleSheet, ScrollView, Text, TouchableOpacity, Image} from 'react-native';
import colors from '../assets/colors/colors';

const searchImg = require('../assets/search_icon.png');
const notifyImg = require('../assets/notification_icon.png');
const userInfoImg = require('../assets/user_info_icon.png');
const likeImg = require('../assets/like_btn.png');

const postImg = require('../assets/post_image.png');
const tagMenuData = [['음식 자랑'], ['일상'], ['질문글'], ['기타'], ['test']];
const postData = [['tag 1', '글 1', '내용 1', postImg], ['tag 2', '글 2', '내용 2', postImg], ['tag 3', '글 3', '내용 3'], ['tag 4', '글 4', '내용 4'], ['tag 5', '글 5', '내용 5'], ['tag 6', '글 6', '내용 6']]

function CommunityScreen({navigation}) {
  return (
    
    <View style={headerStyles.container}>
        
      <StatusBar style='auto'></StatusBar>
      <View style={headerStyles.header}>
        <View style={headerStyles.upperHeader}>
            <View style={headerStyles.upperLeftHeader}>
                <Text style={headerStyles.headerText}>냉장고도둑</Text>
            </View>
            <View style={headerStyles.upperRightHeader}>
                <TouchableOpacity>
                    <Image style={headerStyles.headerButton} source={searchImg}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                    <Image style={headerStyles.headerButton} source={notifyImg}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('UserInfo')}>
                    <Image style={headerStyles.headerButton} source={userInfoImg}></Image>
                </TouchableOpacity>
            </View>
            
        </View>
        <View style={headerStyles.lowerHeader}>

        </View>
      </View>
      <View style={headerStyles.tagMenu}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {tagMenuData.map((tagMenu, index) => (
              <View key={index} style={headerStyles.tagMenuItem}>
                <Text style={headerStyles.tagMenuText}>{tagMenu[0]}</Text>
              </View>
            ))}
        </ScrollView>

      </View>
      <View style={styles.communityBoard}>
        <View style={styles.postList}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {postData.map((post, index) => (
                    <View style={styles.postItem}>
                        <View key={index} style={styles.postMessage}>
                            <View style={styles.postItemText}>
                                <Text style={styles.postTag}>{post[0]}</Text>
                                <Text style={styles.postTitle}>{post[1]}</Text>
                                <Text style={styles.postContent}>{post[2]}</Text>
                            </View>
                            <View style={styles.postItemImg}>
                                <Image style={styles.postItemImage} source={post[3]}></Image>
                            </View>
                        </View>
                        <View style={styles.postInfo}>
                            <View>
                                <Image source={likeImg}></Image>
                            </View>
                            <View>

                            </View>
                        </View>
                    </View>
                    
                ))}
            </ScrollView>

        </View>
        <View style={styles.menuBar}>
        
        </View>

      </View>
      
    </View>
  );
}

export default CommunityScreen;

const headerStyles = StyleSheet.create({
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
})

const styles = StyleSheet.create({
    communityBoard:{
        flex:13,
        backgroundColor:colors.messageBoardGray,
    },
    postList:{
        flex:11,
        paddingTop:10,
    },
    postItem:{
        backgroundColor:'white',
        marginVertical:10,
        paddingHorizontal:15,
        paddingVertical:10,
    },
    postMessage:{
        flex:3,
        flexDirection:'row',
        marginBottom:15,
    },
    postItemText:{
        flex:5,
        backgroundColor:'yellow'
    },
    postTag:{
        fontSize:10,
        backgroundColor:colors.postTagGray,
    },
    postTitle:{
        fontSize:14,
    },
    postContent:{
        fontSize:14,
    },
    postItemImg:{
        flex:2,
        backgroundColor:'red'
    },
    postItemImage:{
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    postInfo:{
        flex:1,
    },
    menuBar:{
        flex:2,
        backgroundColor:'white',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
})