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
      <ImageBackground source={require('../assets/notesbg.png')} style={styles.bgStyle}>
      <View style={{flex:1}}>
      <Text style= {styles.textStyle}> Create Notes</Text>
      <TextInput
          style={styles.inputBox}
          placeholder="Enter your notes here.."
          onChangeText={(text) => this.setState({ notes: text })}
        />
          <Image source= {require('../assets/note.png')} style= {{width:250, height:280, marginLeft:40, marginTop:33}}></Image>
      </View>
      </ImageBackground>
    )
  }
}

const styles= StyleSheet.create({
  bgStyle:{height:600,
  resizeMode: 'cover'},

  textStyle:{
    color:'#8B0567',
    fontWeight:'bold',
    fontSize:24,
    marginTop:35,
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