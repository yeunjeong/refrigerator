import React from "react";
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  Button,
  ImageBackground,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { FontAwesome, Entypo, Fontisto } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from '../assets/colors/colors';

const bgImg = require('../assets/background.png');
const searchImg = require('../assets/search_icon.png');
const notifyImg = require('../assets/notification_icon.png');
const userInfoImg = require('../assets/user_info_icon.png');
const recipePageImg = require('../assets/recipe_page2.png');
const refrigeratorPageImg = require('../assets/refrigerator_page.png');
const communityPageImg = require('../assets/community_page.png');

const recipeData = [
    [
        '돼지고기 김치찌개 달인이 되는 황금레시피',
        '돼지고기 감자 양파 대파',
    ], [
        '즉석 목살 양념구이~ 달큰한 양념소스가 정말 맛있습니다.',
        '목살 달걀 양파',
    ], [
        '양배츠 참치덮밥 / Cabbage tuna bowl of rice',
        '양배추 참치',
    ]];

function Recipe({ route, navigation }) {
    const nickname = '하냥이'

  return (
    <View style={headerStyles.container}>
        <StatusBar style='auto'></StatusBar>
        <ImageBackground source={bgImg} style={styles.background}>
      
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
            </View>


            <View style={{ paddingBottom: 20, flexDirection: "row" }}>
                <Text
                    style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 16,
                    textAlign: "center",
                    marginTop: 5,
                    backgroundColor:'rgba(0, 0, 0, 0.3)',
                    padding:10,
                    borderRadius:10,
                    }}
                >
                    {nickname}님의 냉장고 속 재고를 바탕으로 {"\n"}레시피를
                    추천해드려요.
                </Text>
            </View>


            <View style={{ width: "100%", paddingTop: 30, flex: 20,}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {recipeData.map((recipe, index) => (
                        <TouchableOpacity key={index} style={{alignItems:'center'}}>
                            <View style={{
                                    flexDirection:'row',
                                    backgroundColor: "white",
                                    paddingVertical: 15,
                                    paddingHorizontal: 5,
                                    borderRadius: 10,
                                    elevation: 7,
                                    marginBottom: 30,
                                    width: "85%",
                                }}>
                                <View>
                                    <Image source={communityPageImg}></Image>
                                </View>
                                <View style={{flex:3}}>
                                    <Text style={{
                                        fontSize:16,
                                        color:'#4B4B4B',
                                    }}>{recipe[0]}</Text>
                                    <Text style={{
                                        fontSize:16,
                                        color:'#0EA371',
                                    }}>{recipe[1]}</Text>
                                    
                                </View>
                                
                            </View>
                        </TouchableOpacity>
                    
                    ))}
                    </ScrollView>
                
                <View style={{ paddingTop: 20 }}>
                    <View style={M_style.tab_st}>
                        <TouchableOpacity>
                            <Image source={recipePageImg} style={M_style.tab_ele_st}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={refrigeratorPageImg} style={M_style.tab_ele_st}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Community')}>
                            <Image source={communityPageImg} style={M_style.tab_ele_st}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
      </ImageBackground>
    </View>
  );
}

export default Recipe;

const M_style = StyleSheet.create({
  tab_st: {
    flexDirection: "row",
    paddingTop: 7,
    paddingHorizontal: 30,
    justifyContent: "space-between",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tab_ele_st: {
    width: 50,
    height: 70,
  },
});

const headerStyles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: colors.headerGreen,
      paddingTop:20
    },
    header:{
        flex:2,
        flexDirection: 'row', 
        //backgroundColor: colors.headerGreen,
        //backgroundColor: 'yellow',
        justifyContent: 'space-between',
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
})

const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: "cover",
      alignItems: "center",
    },
  });