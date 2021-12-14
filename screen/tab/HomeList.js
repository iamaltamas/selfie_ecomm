import React, { PureComponent } from 'react'
import { Text, View,StyleSheet,
  TouchableOpacity,
  Image,FlatList,
  ActivityIndicator,
  Dimensions
  } from 'react-native'
const dimetionWidth = Dimensions.get('window').width
export default class HomeList extends PureComponent {

constructor(props){
  super(props)
  this.state={
    items:[],
  }
}
  componentDidMount(){
    this.apl()
  }


  apl=async()=>{
    const print='https://selfiekurtiz.com/api/fetchethinic.php'
    const data=await fetch(print)
    const ftdata = await data.json()
    this.setState({items:ftdata})
  }

  renderItem=({item,index})=>{
    const {navigate}=this.props.navigation;
      return(
      
         <TouchableOpacity style={style.card}itemWidth={dimetionWidth/2}
         key={index}
         
         onPress={()=>navigate('Add To Cart',{pDiscount:item.discount_price,
          pBasePrice:item.base_price,
          pImage : item.product_image,
           pName : item.product_title,
           pDiscription:item.description,
           productId : item.pid,
           
           
          })}
         >
           <View>
     </View>
        <Image 
        style={style.imagesty}
        itemWidth={dimetionWidth/2}
        source={{uri:"http://selfiekurtiz.com/upload_file/"+item.product_image}}
        />
        <View style={style.amount}>
        <Text style={{color:'#000',height:35}}>{item.product_title}</Text>
        <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>{item.base_price}</Text>
        <Text style={{color:'#000'}}>{item.discount_price}</Text>
        </View>
        </TouchableOpacity>
        
        
        
    )
  
  }
  

  render() {
    let {items}=this.state
    if(items.length===0){
      return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <ActivityIndicator size="large"/>
        </View>
      )
    }
    return (
   <FlatList
      
      numColumns={2}
        style={{marginTop:10,}}
        data={items}
        keyExtractor={(item,index)=>index.toString()}
        renderItem={this.renderItem}
   />
     
   
    )
  }
}

const style = StyleSheet.create({
  container:
  {

},
card:{
flex:1,
marginBottom:10,
borderRadius:10,
dimetionWidth,
alignItems:'center',
shadowRadius: 10,
justifyContent:'space-around'
},
imagesty:{
  width:'100%',
  height:230,
  resizeMode:'cover',
  borderColor:'#00aaff'
  },
  amount:{
    alignContent:'center',
    alignItems:'center'
  }
});