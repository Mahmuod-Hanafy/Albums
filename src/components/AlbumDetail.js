import React from 'react'
import {View,Text,Image,Linking}from 'react-native'
import {Card} from './card'
import {CardSection} from './CardSection.js'
import {Button} from './Button'

export class AlbumDetail extends React.Component {
   
  render() {return(
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle} >
                    <Image source={{uri:this.props.data.thumbnail_image}} style={styles.thumbnailStyle} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.headerTextStyle}>{this.props.data.title}</Text>
                    <Text >{this.props.data.artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image source={{uri:this.props.data.image}} style={styles.albumImageStyle}  />
            </CardSection>
            <CardSection>
                <Button whenPressed={()=> Linking.openURL(this.props.data.url)} text='Buy now'/>
            </CardSection>
        </Card>
    )}

}

const styles={
    
    thumbnailStyle:{
        height:50,
        width:50

    },
    textContainer:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    headerTextStyle:{
        fontSize:18,
        color:'#f13c3c'
        
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:5,
        marginRight:10
    },
    albumImageStyle:{
        flex:1,
        height:270,
        width:null,
        borderRadius:4
    }
}

