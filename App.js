import React from 'react'
import{
  View,
  Route,
  StatusBar,
  Platform,
  Text,
  StyleSheet,
  ListView,
  AppRegistry,
  Image

}from 'react-native'

import {Header}  from './src/components/Header.js'
import {AlbumList}  from './src/components/AlbumList.js'


export default class Resturant extends React.Component{
 
 
  render(){
   return(
  
    
     <Image source={require('./src/images/BG.jpg')} style={styles.backgroundImage} >
     <StatusBar barStyle='light-content' />
     <View style={styles.statusStyle} ></View>
     <Header headerText='Albums' />
     <AlbumList/>
     
    

     </Image>
     



    )
  }
}


const styles= {
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch', // or 'stretch'
    
    width: null,
    height: null,
    
  },
  statusStyle:{
    backgroundColor:'#b82929',
    height:18
  }
  
}