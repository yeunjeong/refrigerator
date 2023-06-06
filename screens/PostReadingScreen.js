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

const goBackImg = require('../assets/icon_arrow-left.png');
const profileImg = require('../assets/profile_img.png');
const trashcanImg = require('../assets/trashcan.png');
const likeBtnImg = require('../assets/like_btn.png');
const commentImg = require('../assets/comment_img2.png');
const rewriteImg = require('../assets/rewriteBtn.png');
const replyArrowImg = require('../assets/reply_arrow.png');

const postImg = require('../assets/post_image.png');
const commentData = [
    [
        '최윤', 
        '04/13 14:22', 
        '우와 너무 맛있어 보여요!! 레시피 공유 가능한가요??', 
        [['현희', '04/13 14:30', '기름에 양배추랑 베이컨 넣고 달달 볶아서 드시면 돼요 ㅎㅎ 베이컨 많이 넣으면 더 맛있습니당']]
    ], 
    ['최윤', '04/13 14:22', '우와 너무 맛있어 보여요!! 레시피 공유 가능한가요??']];


function UserInfoScreen({navigation}) {
  return (
    <View style={styles.container}>
        <StatusBar style='auto'></StatusBar>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.pop()} style={styles.headerLeft}>
                <Image source={goBackImg}></Image>
            </TouchableOpacity>
            <View style={styles.headerCenter}>
                <View>
                    <Text style={{
                        fontSize: 24, 
                        color:'white'}}>게시판</Text>
                </View>
                <View>
                    <Text style={{
                        fontSize: 16, 
                        color:'white'}}>음식자랑</Text>
                </View>
            </View>
            <View style={{flex:1}}>
            </View>
        </View>
        <View style={styles.post}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    paddingHorizontal:20,
                }}>
                    <View>
                        <View style={{
                            flexDirection:'row',
                            alignItems:'center'}}>
                            <View style={{
                                flex:3,
                                flexDirection:'row',
                                alignItems:'center'}}>
                                <Image source={profileImg} style={{
                                    width: 32, 
                                    height: 32, }}></Image>
                                <View style={{
                                    paddingLeft:10,
                                }}>
                                    <Text style={{
                                        fontSize:20,
                                        color:'#0EA371',
                                    }}>현희</Text>
                                    <Text style={{
                                        fontSize:14,
                                        color:'#999999',
                                    }}>04/13 14:12</Text>
                                </View>
                            </View>
                            <View style={{flex:1, alignItems:'flex-end', paddingEnd:10}}>
                                <TouchableOpacity>
                                    <Image source={trashcanImg}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{
                            paddingHorizontal:15,
                            paddingTop:15,
                        }}>
                            <Text style={{
                                fontSize:20,
                            }}>간만에 너무 잘 만든 저녁!!!</Text>
                            <Image source={postImg} style={{
                                marginVertical:15,
                            }}></Image>
                            <Text style={{
                                fontSize:20,
                                color:'#4E4E4E'
                            }}>내가 만들었지만 진짜 잘 만든 양배추 덮밥!!!</Text>
                        </View>
                        <View style={{
                            flexDirection:'row',
                            marginTop:15,
                            marginBottom:10,
                        }}>
                            <View style={{
                                flex:2,
                                flexDirection:'row'
                            }}>
                                <Image source={likeBtnImg} style={{
                                    marginRight:10,
                                }}></Image>
                                <Text style={{
                                    marginRight:10,
                                    fontSize:15,
                                    color:'#999999',
                                }}>23</Text>
                                <TouchableOpacity>
                                    <Image source={commentImg} style={{
                                        marginRight:10,
                                    }}></Image>
                                </TouchableOpacity>
                                <Text style={{
                                    marginRight:10,
                                    fontSize:15,
                                    color:'#999999',
                                }}>4</Text>
                            </View>
                            <View style={{
                                flex:1,
                                alignItems:'flex-end',
                            }}>
                                <TouchableOpacity>
                                    <Image source={rewriteImg}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                
                {commentData.map((comment, index) => (
                <View style={styles.comment}>
                    <View>
                        <View>
                            <View style={{
                                flex:3,
                                flexDirection:'row',
                                alignItems:'center'}}>
                                <Image source={profileImg} style={{
                                    width: 32, 
                                    height: 32, }}></Image>
                                <View style={{
                                    paddingLeft:10,
                                }}>
                                    <Text style={{
                                        fontSize:20,
                                        color:'#232323',
                                    }}>{comment[0]}</Text>
                                    <Text style={{
                                        fontSize:14,
                                        color:'#999999',
                                    }}>{comment[1]}</Text>
                                </View>
                            </View>
                            <View style={{
                                backgroundColor:'white',
                                borderRadius:10,
                                paddingVertical:10,
                                paddingHorizontal:15,
                                marginHorizontal:10,
                                marginTop:10,
                                marginBottom:15,
                            }}>
                                <Text style={{
                                    fontSize:16,
                                    color:'#4B4B4B',
                                }}>{comment[2]}</Text>
                            </View>
                            <View style={{
                                backgroundColor:'#D7D7D7',
                                height:1,
                                marginHorizontal:-50
                            }}>
                            </View>
                        </View>
                        {comment[3] && comment[3].map((reply, replyIndex) => (

                            <View style={{
                                flexDirection:'row',
                                paddingTop:20,
                            }}>
                                <View>
                                    <Image source={replyArrowImg}></Image>
                                </View>  
                                <View style={{
                                    paddingLeft: 10,
                                    paddingRight:10,
                                }}>
                                    <View style={{
                                        flex:3,
                                        flexDirection:'row',
                                        alignItems:'center'}}>
                                        <Image source={profileImg} style={{
                                            width: 32, 
                                            height: 32, }}></Image>
                                        <View style={{
                                            paddingLeft:10,
                                        }}>
                                            <Text style={{
                                                fontSize:20,
                                                color:'#232323',
                                            }}>{reply[0]}</Text>
                                            <Text style={{
                                                fontSize:14,
                                                color:'#999999',
                                            }}>{reply[1]}</Text>
                                        </View>
                                    </View>
                                    <View style={{
                                        backgroundColor:'white',
                                        borderRadius:10,
                                        paddingVertical:10,
                                        paddingHorizontal:15,
                                        marginHorizontal:10,
                                        marginTop:10,
                                        marginBottom:15,
                                    }}>
                                        <Text style={{
                                            fontSize:16,
                                            color:'#4B4B4B',
                                        }}>{reply[2]}</Text>
                                    </View>
                                    <View style={{
                                        backgroundColor:'#D7D7D7',
                                        height:1,
                                        marginHorizontal:-50
                                    }}>
                                    </View>
                                    
                                </View> 
                                
                            </View>
                        ))}
                    </View>

                </View>
                ))}
            </ScrollView>

        </View>
        
        
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
    header:{
        flex:2,
        flexDirection:'row',
        paddingHorizontal: 20,
    },
    headerLeft:{
        flex:1,
        marginVertical:20,
    },
    headerCenter:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10,
    },
    post:{
        flex:15,
        backgroundColor:'white',
        paddingTop:20,
        borderRadius:10,
    },
    comment:{
        backgroundColor:'#E2E2E2',
        paddingHorizontal:15,
        paddingTop:15,
    },

})