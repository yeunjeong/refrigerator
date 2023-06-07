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
                    }}
                >
                    {nickname}님의 냉장고 속 재고를 바탕으로 {"\n"}레시피를
                    추천해드려요.
                </Text>
            </View>


            <View style={{ width: "100%", paddingTop: 30, flex: 20 }}>
                <FlatList
                    style={{ height: "80%" }}
                    data={DATA}
                    renderItem={({ item }) => <Item title={item.title} />}
                    keyExtractor={(item) => item.id}
                />
                <View style={{ paddingTop: "20%" }}>
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

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aved5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c6a05-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-zbd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28zba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97zf63",
    title: "Second Item",
  },
];

const Item = ({ title }) => (
  <View style={{ justifyContent: "center", alignItems: "center" }}>
    <View
      style={{
        backgroundColor: "white",
        paddingVertical: 15,
        paddingHorizontal: 5,
        borderRadius: 10,
        elevation: 7,
        marginBottom: 30,
        width: "85%",
      }}
    >
      <Image
        source={communityPageImg}
        style={{ width: 80, height: 60 }}
      ></Image>
    </View>
  </View>
);

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
})

const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: "cover",
      alignItems: "center",
    },
  });