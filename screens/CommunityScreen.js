import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import moment from 'moment';
import { useIsFocused } from "@react-navigation/native";
import axios from 'axios';
import {View, Button, StyleSheet, ScrollView, Text, TouchableOpacity, Image, ToastAndroid} from 'react-native';
import colors from '../assets/colors/colors';

const searchImg = require('../assets/search_icon.png');
const notifyImg = require('../assets/notification_icon.png');
const userInfoImg = require('../assets/user_info_icon.png');
const plusImg = require('../assets/plus_icon.png');
const likeImg = require('../assets/like_btn.png');
const commentImg = require('../assets/comment_img.png');

const postImg = require('../assets/post_image.png');
const tagMenuData = [['음식 자랑'], ['일상'], ['질문글'], ['기타']];
const postData = [['tag 1', '글 1', '내용 1', postImg, '23', '3'], ['tag 2', '글 2', '내용 2', postImg], ['tag 3', '글 3', '내용 3'], ['tag 4', '글 4', '내용 4'], ['tag 5', '글 5', '내용 5'], ['tag 6', '글 6', '내용 6']]

function CommunityScreen({navigation}) {

    const [data, setData] = useState([]);
    

    const load_post = async () => {
        try {
        const response = await axios.get(
            `http://3.104.80.58:8080/api/v1/board/category/2`
        );
        setData(response.data);
        console.log(data);
        } catch (error) {
        console.log(error);
        ToastAndroid.show("불러올 수 없음", ToastAndroid.SHORT);
        }
    };

    useEffect(() => {
        load_post(); // 페이지에 접속하면 load_post 함수를 자동으로 실행
    }, []);

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
            <View style={headerStyles.lowerLeftHeader}>
                <TouchableOpacity>
                    <View style={headerStyles.lowerHeaderBtn}>
                        <Text style={headerStyles.lowerHeaderBtnText1}>게시판</Text>
                        <Text style={headerStyles.lowerHeaderBtnText2}>중고거래</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={headerStyles.lowerRightHeader}>
                <TouchableOpacity onPress={() => navigation.navigate('Posting')}>
                    <Image style={headerStyles.headerButton} source={plusImg}></Image>
                </TouchableOpacity>
            </View>

        </View>
      </View>
      <View style={headerStyles.tagMenu}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {tagMenuData.map((tagMenu, index) => (
              <View key={index} style={headerStyles.tagMenuItem}>
                <TouchableOpacity>
                    <Text style={headerStyles.tagMenuText}>{tagMenu[0]}</Text>
                </TouchableOpacity>
              </View>
            ))}
        </ScrollView>

      </View>
      <View style={styles.communityBoard}>
        <View style={styles.postList}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {data.map((post, index) => (
                    <View key={index} style={styles.postItem}>
                        <TouchableOpacity onPress={() => navigation.navigate('PostReading', { postId: post.id })}>
                            <View style={styles.postItemUpper}>
                                <View style={styles.postItemText}>
                                    <Text style={styles.postTag}>{post.type}</Text>
                                    <Text style={styles.postTitle}>{post.title}</Text>
                                    <Text style={styles.postContent}>{post.content}</Text>
                                </View>
                                <View style={styles.postItemImg}>
                                    <Image style={styles.postImage} source={{ uri: post.img }}></Image>
                                </View>
                            </View>

                        </TouchableOpacity>
                        
                        <View style={{height:1, backgroundColor:colors.postLineGray}}>

                        </View>
                        <View style={styles.postInfo}>
                            <View style={styles.postInfoLeft}>
                                <TouchableOpacity>
                                    <Image source={likeImg} style={styles.postInfoIcon}></Image>
                                </TouchableOpacity>
                                <Text style={styles.postInfoText}>0</Text>
                                <TouchableOpacity>
                                    <Image source={commentImg} style={styles.postInfoIcon}></Image>
                                </TouchableOpacity>
                                <Text style={styles.postInfoText}>0</Text>
                            </View>
                            <View style={styles.postInfoRight}>
                                <Text style={styles.postInfoTime}>{moment(post.created_date_time).fromNow()}</Text>
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
        paddingTop:10,
    },
    upperHeader:{
        flexDirection: 'row',
        flex:1,
        //backgroundColor:'green',
    },
    upperLeftHeader:{
        flex:2,
        paddingStart:5,
        //backgroundColor:'blue',
        justifyContent:'center',
    },
    headerText:{
        fontSize:24,
        color:'white',
    },
    upperRightHeader:{
        flex:2,
        flexDirection: 'row',
        justifyContent:'flex-end',
        alignItems:'center',
        //backgroundColor:'gray',
    },
    headerButton:{
        marginHorizontal:10,
    },
    lowerHeader:{
        flex:1,
        flexDirection: 'row',
        paddingBottom:5,
        //backgroundColor: 'yellow',
    },
    lowerLeftHeader:{
        flex:2,
        flexDirection:'row',
        //backgroundColor:'tomato',    
        justifyContent:'center', 
        alignItems:'center',        
    },
    lowerHeaderBtn:{
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:16,
        alignItems:'center',
        justifyContent:'center',
    },
    lowerHeaderBtnText1:{
        backgroundColor:colors.headerBtnGreen,
        color:'white',
        fontSize:18,
        borderRadius:16,
        borderColor:colors.headerBtnBorderGray,
        borderWidth:1,
        paddingVertical:7,
        paddingHorizontal:14,
        marginEnd:8,
    },
    lowerHeaderBtnText2:{
        fontSize:18,
        paddingEnd:15,
    },
    lowerRightHeader:{
        flex:2,
        //backgroundColor:'pink',
        flexDirection: 'row',
        justifyContent:'flex-end',
        alignItems:'center',

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
        paddingHorizontal:20,
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
    postItemUpper:{
        flex:3,
        flexDirection:'row',
        marginBottom:15,
    },
    postItemText:{
        flex:5,
        //backgroundColor:'yellow'
    },
    postTag:{
        fontSize:10,
        backgroundColor:colors.postTagGray,
        borderRadius:4,
        borderColor:colors.postTagBorderGray,
        borderWidth:1,
        marginBottom:5,
        paddingHorizontal:10,
        paddingVertical:3,
        alignSelf: 'flex-start',
    },
    postTitle:{
        fontSize:14,
        marginBottom:10,
        color:'black',
        marginLeft:5,
    },
    postContent:{
        fontSize:14,
        color:colors.postContentGray,
        marginLeft:5,
    },
    postItemImg:{
        flex:2,
        //backgroundColor:'red'
    },
    postImage:{
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    postInfo:{
        flex:1,
        flexDirection:'row',
        //backgroundColor:'blue',
        marginTop:10,
        alignItems:'center',
    },
    postInfoLeft:{
        flex:5,
        flexDirection:'row',
    },
    postInfoIcon:{
        marginHorizontal:6,
    },
    postInfoText:{
        marginEnd:20,
        color:colors.postInfoTextGray,
    },
    postInfoRight:{
        flex:2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginEnd:15,
    },
    postInfoTime:{
        fontSize:10,
        color:colors.postInfoTime,
    },
    menuBar:{
        flex:2,
        backgroundColor:'white',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
})