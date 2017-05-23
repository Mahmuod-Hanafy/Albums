import React from 'react'
import {Text,TouchableOpacity} from 'react-native'

export  class Button extends React.Component{
    render(){
        return(
            <TouchableOpacity style={styles.buttonStyle} onPress={this.props.whenPressed} >
                <Text style={styles.textStyle} >{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

const styles={
    buttonStyle:{
        flex:1,
        backgroundColor:'#f13c3c',
        borderRadius:7,
        
        borderColor:'#fff',
        alignSelf:'center',
        marginRight:5,
        marginLeft:5,
        shadowColor:'#000',
        shadowOpacity:0,
        shadowOffset:{width:0 , height:1},
        shadowRadius:5
    },
    textStyle:{
        color:'#fff',
        alignSelf:'center',
        paddingTop:12,
        paddingBottom:12,
        fontSize:20,
        fontWeight:'600'
    }
}