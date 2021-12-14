import React, { Component } from 'react'
import { View,
   Text,
    Image,
     Dimensions,
      ScrollView,
       StyleSheet,
        TouchableOpacity,
        

       } 
       from 'react-native'

import Home from './Home';
import Icone from 'react-native-vector-icons/FontAwesome'

const { width } = Dimensions.get("window");
const height = width *0.6


export default class HomeScreen extends Component {

 constructor(props){
  super()
  this.state={
    itemid:[
      {id1:1},
      {id2:2}
    ]
  }
}


  render() {
    const {navigate}=this.props.navigation;
    return (
      <View style={style.contaner}>
        <View style={{width,height:60,backgroundColor:'#000',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <TouchableOpacity
        onPress={() =>navigate('SearchBar')}
        >
        <Icone name="search" size={25} style={{color:'#fff',alignItems:'center',justifyContent:'flex-start',margin:15}}
        />
        </TouchableOpacity>
        <Image source={require('../assest/img/logoselfi.png')} style={{height:95,width:95,resizeMode:'contain',}}/>
        <Icone name="shopping-cart" size={25}  style={{color:'#fff',alignItems:'center',justifyContent:'flex-start',margin:15}}/>
        </View>
        <ScrollView>
             <Home/> 
             <View style={{flexDirection:'column',backgroundColor:'#00aaff',marginTop:10,marginBottom:5}}>
               
               <View style={{flex:1,width,height:240,backgroundColor:'#000',flexDirection:'row',}}>
              <TouchableOpacity
              onPress={()=>navigate('Ethinic')}
              >
                  <View style={{flex:1,width:width/2,backgroundColor:'green',borderEndWidth:4,borderColor:'#fff',alignItems:'center',}}>
                     <Image source={require('../assest/img/kurti1.png')} style={{height:240,width:width/2,resizeMode:'cover'}}/>
                    <View style={{position:'absolute',marginTop:170,alignItems:'center'}}>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'#ffffff',fontFamily:'PlayfairDisplay-BoldItalic'}}>ETHINIC WEAR</Text>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'#ffffff',fontFamily: 'MarkerFelt-Thin'}}>Shop Now</Text>
                    </View>
                  </View>
                  </TouchableOpacity>                  
                  <TouchableOpacity
                  onPress={()=>navigate('Party Wear')}
                  >
                  <View style={{flex:1,width:width/2,backgroundColor:'yellow',alignItems:'center',borderStartWidth:4,borderColor:'#fff'}}>
                  <Image source={require('../assest/img/partywear.jpg')} style={{height:240,width:width/2,resizeMode:'cover'}}/>
                    <View style={{position:'absolute',marginTop:170,alignItems:'center'}}>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'#ffffff'}}>PARTY WEAR</Text>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'#ffffff'}}>Shop Now</Text>
                    </View>
                  </View>
              </TouchableOpacity>
              </View>
             
              <View style={{flex:1,width,height:240,backgroundColor:'#000',flexDirection:'row',}}>
              <TouchableOpacity
              onPress={()=>navigate('Western')}
              >
                  <View style={{flex:1,width:width/2,backgroundColor:'#e342f5',borderEndWidth:4,borderColor:'#fff',alignItems:'center',}}>
                     <Image source={require('../assest/img/western.jpg')} style={{height:240,width:width/2,resizeMode:'cover'}}/>
                    <View style={{position:'absolute',marginTop:170,alignItems:'center'}}>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'#ffffff'}}>WESTERN WEAR</Text>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'#ffffff'}}>Shop Now</Text>
                    </View>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                  onPress={()=>navigate('Indo Weston')}
                  >
                  <View style={{flex:1,width:width/2,backgroundColor:'#4287f5',alignItems:'center',borderStartWidth:4,borderColor:'#fff'}}>
                  <Image source={require('../assest/img/kurti2.png')} style={{height:240,width:width/2,resizeMode:'cover'}}/>
                    <View style={{position:'absolute',marginTop:170,alignItems:'center'}}>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'#ffffff'}}>INDO WEASTERN</Text>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'#ffffff'}}>Shop Now</Text>
                    </View>
                  </View>
              </TouchableOpacity>
              </View>

              <View style={{flex:1,width,height:240,backgroundColor:'#000',flexDirection:'row',}}>
              <TouchableOpacity
               onPress={()=>navigate('Wedding Wear')}
              >
                  <View style={{flex:1,width:width/2,backgroundColor:'#f54242',borderEndWidth:4,borderColor:'#fff',alignItems:'center',}}>
                     <Image source={require('../assest/img/weddind.jpg')} style={{height:240,width:width/2,resizeMode:'cover'}}/>
                    <View style={{position:'absolute',marginTop:170,alignItems:'center'}}>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'#ffffff'}}>WEDDING COLLECTION</Text>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'#ffffff'}}>Shop Now</Text>
                    </View>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                   onPress={()=>navigate('Winter Wear')}
                  >
                  <View style={{flex:1,width:width/2,backgroundColor:'#5df542',alignItems:'center',borderStartWidth:4,borderColor:'#fff'}}>
                  <Image source={require('../assest/img/winter.jpeg')} style={{height:240,width:width/2,resizeMode:'cover'}}/>
                    <View style={{position:'absolute',marginTop:170,alignItems:'center'}}>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'#ffffff'}}>WINTER COLLECTION</Text>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'#ffffff'}}>Shop Now</Text>
                    </View>
                  </View>
              </TouchableOpacity>
              </View>
                
             </View>

              <View style={{alignItems:'center'}}>
              <TouchableOpacity 
               onPress={()=>navigate('All Product')}
              style={{height:45,width:'80%',alignItems:'center',justifyContent:'center',backgroundColor:'#00aaff',marginTop:10,marginBottom:10,borderRadius:8,}}>
                <Text style={{fontSize:16,fontWeight:'600',color:'#000'}}>ALL PRODUCT</Text>
              </TouchableOpacity>
              </View>
        </ScrollView>
      </View>
    )
  }
}
const style = StyleSheet.create({
  contaner: {  
    width, 
    height:'100%',
    backgroundColor:'#ffffff'
  },
  scroll: { 
    width, 
    height 
  },
  image: { 
    width, 
    height,
     resizeMode: 'cover',
      padding: 7 
    },
  dot: { flexDirection: 'row', position: 'absolute', alignSelf: 'center', bottom: 0 },
  dotTow: { fontSize: 25, color: '#fff' },
  dotActiveTow: { fontSize: 25, color: 'black' },

  searchIcon: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: 45,
    borderColor: '#00aaff',
    borderRadius: 10,
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textinput: {
    padding: 10,
    flex: 1,
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconstyl: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40
  }


})

