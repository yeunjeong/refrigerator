import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text, 
  View, 
  ImageBackground, 
  Image, 
  TouchableOpacity,
  ScrollView,
  TextInput } from 'react-native';
import colors from '../assets/colors/colors';


function PostingScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [content, setContent] = useState(''); 

  const handleTitleChange = (text) => {
    setTitle(text);
  };
  const handleTagChange = (text) => {
    setTag(text);
  };
  const handleContentChange = (text) => {
    setContent(text);
  };

  const handleSubmit = () => {
    // API 요청
    const data = {
        title: title, //string
        content: content, //string
        img: '', //test
        type: '자유', //test
        category_id: 1, //test
        user_id: 'test', //test
    };

    fetch('http://3.104.80.58:8080/api/v1/board', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        // 서버 응답 처리
        console.log(responseData);
      })
      .catch((error) => {
        // 에러 처리
        console.error(error);
      });

  };

  return (
    <View style={styles.container}>
      <StatusBar style='auto'></StatusBar>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerLeftBtn} onPress={() => navigation.navigate('Community')}>
            <Text style={styles.headerText}>취소</Text>
        </TouchableOpacity>
        <View style={styles.headerCenterBtn}>
            <Text style={styles.headerText}>글 쓰기</Text>
        </View>
        <TouchableOpacity style={styles.headerRightBtn} onPress={handleSubmit}>
            <Text style={styles.headerText}>완료</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.postInput}>
        <View style={styles.titleInput}>
            <TextInput 
                style={styles.titleInputText}
                placeholder='제목을 입력하세요.'
                value={title}
                onChangeText={handleTitleChange}
                multiline
            ></TextInput>
        </View>
        <View style={styles.tagInput}>
            <TextInput
                style={styles.tagInputText}
                placeholder='태그를 입력하세요.'
                value={tag}
                onChangeText={handleTagChange}
                multiline
            ></TextInput>
        </View>
        <View style={styles.contentInput}>
            <TextInput
                style={styles.contentInputText}
                placeholder='내용을 입력하세요.'
                value={content}
                onChangeText={handleContentChange}
                multiline
            ></TextInput>
        </View>

      </View>
      
    </View>
  );
}

export default PostingScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: colors.headerGreen,
    paddingTop: 20,
  },
  header:{
    flex:3,
    flexDirection:'row',
  },
  headerLeftBtn:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-start', 
    paddingLeft:25,
    marginTop:25,
  },
  headerCenterBtn:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    marginTop:30,
  },
  headerRightBtn:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-end', 
    paddingRight:25,
    marginTop:25,
  },
  headerText:{
    fontSize:24,
    color:'white',
  },
  postInput:{
    flex:14,
    backgroundColor:'white',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  titleInput:{
    marginTop:55,
    paddingHorizontal:20,
  },
  titleInputText: {
    fontSize:28,
  },
  tagInput:{
    marginTop:15,
    paddingHorizontal:20,
  },
  tagInputText: {
    fontSize:20,
  },
  contentInput:{
    marginTop:15,
    paddingHorizontal:20,
  },
  contentInputText:{
    fontSize:24,
  },
  

})