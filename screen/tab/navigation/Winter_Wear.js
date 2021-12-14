import React, { PureComponent } from 'react'
import {
   Text,
    View,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
    ActivityIndicator
  } 
from 'react-native'
const dimetionWidth = Dimensions.get('window').width
export default class WinterWear extends PureComponent {
  
  constructor (props)
  {
    super(props)
    this.state={
      data:[],
      page:1,
      isLoading:false,
    }
  }
 componentDidMount(){
   this.setState({isLoading:true},this.getApi)
  
 }


  getApi=async()=>{
  const apiURL="https://selfiekurtiz.com/api/fetchethinic.php?&id=5"
    fetch(apiURL)
    .then((res)=>res.json())
    .then((resJson)=>{
      this.setState({
        data:this.state.data.concat(resJson),
        isLoading:false
      })
    })
  }

  renderRow=({item,index})=>{
    const {navigate}=this.props.navigation;
    return(
      <TouchableOpacity style={style.container} itemWidth={dimetionWidth/2}key={index}
      
      onPress={()=>navigate('Add To Cart',{pDiscount:item.discount_price,
        pBasePrice:item.base_price,
        pImage : item.product_image,
         pName : item.product_title,
         pDiscription:item.description,
         productId : item.pid,
         
        })}
      >
      <View style={style.bodyImage}>
        <Image style={style.imgstyl} source={{uri:"http://selfiekurtiz.com/upload_file/"+item.product_image}}/>
        <Text style={{fontSize:16,marginLeft:5,textDecorationLine:'line-through',textDecorationStyle:'solid'}}>{item.base_price}</Text>
        <Text style={{fontSize:16,color:'#000',marginLeft:5}}>{item.discount_price}</Text>
        <View style={style.cardbtn}>
          <Text style={{color:'#000'}}>ADD TO CART</Text>
          </View>
        </View>
        
        </TouchableOpacity>
    )
  }

  hendlrLodeMore=()=>{
    this.setState({page:this.state.page +1,isLoading:true},this.getApi)
  }
  renderFooter=()=>{
    return(
      this.state.isLoading ?
      <View style={{marginTop:10,alignItems:'center'}}>
      <ActivityIndicator size="large"/>
      </View>:null
    )
  }

  render() {
    return (
      <FlatList
       numColumns={2}
       style={style.container}
       data={this.state.data}
       renderItem={this.renderRow}
       keyExtractor={(item,index)=>index.toString()}
       onEndReached={this.hendlrLodeMore}
       onEndReachedThreshold={0}
       ListFooterComponent={this.renderFooter}
      />
    )
  }
}

const style=StyleSheet.create({
  container:{
      
      flex:1,
      marginTop:5,
      backgroundColor:'#f5fcff',
      
  },
  itemsrow:{
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
       
  },
  textofrow:{
fontSize:16,
padding:5,

  },
  imgstyl:{
    height:250,
    width:'95%',
    resizeMode:'cover',
    marginLeft:5
  
  },
  cardbtn:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#e68c1e',
    height:35,
    margin:6,
    width:'95%'
  },
  bodyImage:{
       margin:1,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'#e5e2e2'
  }
})