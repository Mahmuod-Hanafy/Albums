import React from 'react'
import {View,Text,ScrollView}from 'react-native'
import{ albumsData  } from './data.js'
import {AlbumDetail} from './AlbumDetail'




export class AlbumList extends React.Component{
     constructor(){
         super()
    this.state={albums:albumsData}
  }
  renderAlbums(){
      
     return (this.state.albums.map(album =>
       <AlbumDetail key={album.title} data={album} /> ))

  }
   
    

    render(){
        return(
            <ScrollView >
               {this.renderAlbums()}
            </ScrollView>
        )
    }

}