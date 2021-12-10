import React, {Component} from 'react'
import {Text,View,StyleSheet,ImageBackground,TextInput,Image} from 'react-native'

export default class CreateNotes extends React.Component{
  constructor(props){
    super(props)
    this.state={
      notes:""
    }
  }
  render(){
    return(
      <ImageBackground source={require('../assets/bg4.jpg')} style={styles.bgStyle}>
      <View style={{flex:1}}>
      <Text style= {styles.textStyle}> Upcoming tasks</Text>
      <TextInput
          style={styles.inputBox}
          placeholder="Your upcoming events"
          onChangeText={(text) => this.setState({ notes: text })}
        />
         <Image source= {require('../assets/quote.jpg')} style= {{width:250, height:280, marginLeft:50, marginTop:33}}></Image>
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
    fontSize:24,
    marginTop:140,
    marginLeft:100
  },

  inputBox: {
    marginTop: 30,
    width: '70%',
    alignSelf: 'center',
    height: 60,
    textAlign: 'center',
    borderWidth: 4,
    borderRadius:70,
    marginLeft:0
  }
})