import React from 'react'
import {View} from 'react-native'
import {CardSection} from './CardSection.js'

export class Card extends React.Component{
    
    render(){
        return(
            <View style={styles.containerStyle} >
                {this.props.children}
            </View>
        )
    }
}




const styles={
    containerStyle:{
        backgroundColor:'#fffc',
        borderWidth: 1,
        borderColor: '#f13c3c',
        borderRadius: 3,
        
        shadowColor: '#111',
        shadowOffset: {width:0 , height:3},
        shadowOpacity:.3,
        shadowRadius: 2,
        marginRight: 5,
        marginLeft: 5,
        marginTop:10,
        elevation: 1,
        
    }
}