import React, {Component} from 'react'
import {Text,View,StyleSheet,Image,ImageBackground,ScrollView,Alert} from 'react-native'
import { Header } from 'react-native-elements';
const bgImage1 = require("../assets/bgimg1.jpg");
import temp_todo from '../temp_todo.json'
import { FlatList } from "react-native-gesture-handler";
import firebase from 'firebase'
let tasks = require("../temp_todo.json");

export default class HomeScreen extends React.Component{
renderItem = ({ item: story }) => {
    return <HomeScreen tasks={tasks} navigation={this.props.navigation} />;
  };

  keyExtractor = (item, index) => index.toString();

  render(){
    return(
      <View style={{flex:1}}>
       <ImageBackground source={bgImage1} style={styles.bgStyle}>
       <Header
          backgroundColor={'#4B0083'}
          centerComponent={{
            text: 'Dashboard',
            style: { color: '#fff', fontSize: 20 },
          }}
        />

        <Image source= {require('../assets/butterfly.png')} style= {{width:250, height:150, marginLeft:40, marginTop:33}}></Image>
        <Text style={styles.textStyle}> Your only limit is your Mind..</Text>
 <FlatList
              keyExtractor={this.keyExtractor}
              data={tasks}
              renderItem={this.renderItem}
            />
           <View style={styles.cardContainer}>
            </View>
       </ImageBackground>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  bgStyle:{height:600,
  resizeMode: 'cover'},
  textStyle:{
    color:'#eedc9a',
    fontWeight:'bold',
    fontSize:24,
    marginTop:10
  }
})