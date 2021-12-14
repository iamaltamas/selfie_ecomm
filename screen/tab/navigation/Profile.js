import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Profile extends Component {
  render() {
    return (
        <View style={{flex:1,justifyContent:'center',padding:10,}}>
        <Text style={{fontSize:18,textAlign:'auto',color:'#940d36'}}> Essays, academic papers, and journalistic articles mainly use expository paragraphs to thoroughly explain an individual point. These paragraphs rely on data, statistics, or citations from other
         sources to present facts and build up
          to an irrefutable conclusion.  
          </Text>
      </View>
    )
  }
}
