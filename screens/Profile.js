import React, {Component} from 'react'
import {Text,View,StyleSheet,ImageBackground,TextInput,Image} from 'react-native'

export default class CreateNotes extends React.Component{
  render(){
    return(
      <ImageBackground source={require('../assets/digital-technology-background-vector.jpg')} style={styles.bgStyle}>
      <View style={{flex:1}}>
      <Text style= {styles.textStyle}>Profile</Text>
      </View>
      </ImageBackground>
    )
  }
}

const styles= StyleSheet.create({
  bgStyle:{height:600,
  resizeMode: 'cover'},

  textStyle:{
    color:'white',
    fontWeight:'bold',
    fontSize:34,
    marginTop:45,
    marginLeft:120
 
  },
})