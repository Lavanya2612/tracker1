import React, {Component} from 'react'
import {Text,View,StyleSheet,ImageBackground, Image,TextInput,TouchableOpacity,Button,Alert} from 'react-native'
import firebase from 'firebase';
import config from '../config';
import { RFValue } from "react-native-responsive-fontsize";



export default class CreateToDoList extends React.Component{
    constructor() {
    super();
    this.state = {
      text1: '',
      text2:'',
      text3:'',
      text4:'',
      displayText: ''
    };
  }

  async addStory() {
   
      let storyData = {
        task_1:this.state.text1,
        task_2:this.state.text2,
        task_3:this.state.text3,
        task_4: this.state.text4
      };
      await firebase
        .database()
        .ref(
          "/tasks/" +
            Math.random()
              .toString(36)
              .slice(2)
        )
        .set(storyData)
        .then(function(snapshot) {});
      this.props.setUpdateToTrue();
      this.props.navigation.navigate("Home");
  }

 render(){
    return(
      <View style={{flex:1}}>
       <ImageBackground source={require('../assets/bg2.png')} style={styles.bgStyle}>
        <Text style={styles.textStyle}> To-Do List</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter your tasks.."
          onChangeText={(text) => this.setState({ text1: text })}
        />
         <TextInput
          style={styles.inputBox}
          placeholder="Enter your tasks.."
          onChangeText={(text) => this.setState({ text2: text })}
        />
         <TextInput
          style={styles.inputBox}
          placeholder="Enter your tasks.."
          onChangeText={(text) => this.setState({ text3: text })}
        />
         <TextInput
          style={styles.inputBox}
          placeholder="Enter your tasks.."
          onChangeText={(text) => this.setState({ text4: text })}
        />
          <View style={styles.submitButton}>
                <Button
                  onPress={() => this.addStory()}
                  title="Submit"
                  color="#841584"
                />
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
    color:'#8B0567',
    fontWeight:'bold',
    fontSize:24,
    marginTop:45,
    marginLeft:100
  },

  inputBox: {
    marginTop: 30,
    width: '70%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    borderRadius:70,
    marginLeft:-40
  },
  submitButton: {
    marginTop: RFValue(20),
    alignItems: "center",
    justifyContent: "center"
  }
})