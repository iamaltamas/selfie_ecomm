
import React,{useState,useEffect} from "react";
import {
     View,
    Text,
    Dimensions,
    Image,
    ScrollView,
    TouchableOpacity,
    FlatList

 } from "react-native";


const {width,height} =Dimensions.get('window');

const AddToCart =({route})=>{
   const{pImage,pName,pBasePrice,pDiscount,pDiscription,productId} = route.params; 

   const [data,setData] = useState([]);
   useEffect(()=>{
         this.setApi();
         return()=>{

         }
   }, [])

       setApi = async ()=>{
     const apiUri = "https://selfiekurtiz.com/api/fetch_size.php?pid="+productId;
     fetch(apiUri).then((res)=>res.json())
     .then((resJson)=>{
      setData(resJson)
      
     })
   }


   renderItem =({item,index})=>{

     if(item.size > 0){
      return(
      
        <View style={{flex:1,alignItems:'center',margin:10,justifyContent:'center'}}>
                 <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}
                 key={index}
                 >
                 <View style={{height:50,width:50,borderColor:'#000',borderWidth:1,backgroundColor:'#e8ce87',justifyContent:'center',alignItems:'center'}}>
                     <Text style={{fontSize:18,color:'#000'}}>{item.size}</Text>
                     </View>
                 </TouchableOpacity>
  
         </View>
       )
     }
     }

     
   
 return(
        <ScrollView>
       
        <View style={{width,height:360,alignItems:'center',marginTop:15}}>
            {/* <Text>{"\u20A8"}Altam,asa{add}</Text> */}
          <Image style={{height:280,width:'80%',resizeMode:"center",}}source={{uri:"http://selfiekurtiz.com/upload_file/"+pImage}}/>
          <Text style={{marginTop:8,fontSize:16,color:'#000'}}>{pName}</Text>
          <Text  style={{fontSize:16,color:'#000',textDecorationLine:'line-through',textDecorationStyle:'solid'}}>{"\u20A8"} : {pBasePrice}</Text>
          <Text style={{fontSize:16,color:'#000'}}>{"\u20A8"} : {pDiscount}</Text>
        </View>
        
       <View style={{margin:7}}>
         <Text style={{fontSize:18,color:'#000',fontWeight:'bold'}}>Select Size</Text>
       </View>

   <FlatList 
   style={{flex:1}}
      horizontal={true}
       data={data}
       renderItem={this.renderItem}
       keyExtractor={(item,index)=>index.toString()}>
   </FlatList>
        
          <View style={{marginTop:15,alignItems:'center',alignSelf:'center'}}>
            
              <Text style={{fontSize:20,color:'#000',textDecorationLine:'underline',textDecorationColor: "#000", textDecorationStyle: "solid",marginBottom:10,}}>Product Info Care</Text>
          <Text style={{fontSize:16,alignItems:"baseline",color:'#000',marginLeft:30,marginRight:35}}>{pDiscription}</Text>
          </View>



          <View style={{alignItems:'center'}}>
              <TouchableOpacity 
               onPress={()=>alert('sucsess')}
              style={{height:45,width:'80%',alignItems:'center',justifyContent:'center',backgroundColor:'#00aaff',marginTop:20,marginBottom:10,borderRadius:8,}}>
                <Text style={{fontSize:16,fontWeight:'600',color:'#000'}}>Add To Cart</Text>
              </TouchableOpacity>
              </View>



              
        </ScrollView>
       
    )

  

}


export default AddToCart;


