import React from 'react'
import{
  View,
  Route,
  StatusBar,
  Platform,
  Text,
  StyleSheet,
  ListView,
  AppRegistry

}from 'react-native'

export  class Header extends React.Component{
   
  render(){
    return (
    <View style={styles.container}>
    <Text style={styles.textStyle}>{this.props.headerText}</Text>
    </View>)
  }
}



const styles = {
    container:{
        backgroundColor:'#f13c3c',
        height:60,
        alignItems:'center',
        justifyContent:'center',
        paddingTop: 15,
        shadowColor:'#000',
        shadowOffset:{width:0 , height:3},
        shadowOpacity:0.7,
        borderBottomWidth:.5,
        borderColor:'#fff'
        
        
    },
    textStyle :{
        fontSize : 22,
        color: 'white',
        
    }
}