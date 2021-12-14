import React ,{useState,useEffect}from 'react';
import {FlatList, Text, View,SafeAreaView,TextInput,StyleSheet}from 'react-native'
import Icone from 'react-native-vector-icons/FontAwesome'



 const SearchBar =()=> {
  const [filterData,setfilterData]=useState([]);
  const [masterData,setmasterData]=useState([]);
  const[search,setSearch] =useState([]);

   useEffect(()=>{
     fetchUser();
     return()=>{  

     }
   },[])

   const fetchUser=()=>{
     const apiURL = 'https://jsonplaceholder.typicode.com/comments';
     fetch(apiURL)
     .then((response) => response.json())
     .then((responseJson)=>{
       console.log(responseJson);
       setfilterData(responseJson);
       setmasterData(responseJson);
      
     }).catch((error)=>{
       console.error(error);
     })
   } 

   const searchFilter = (text)=>{
     if(text){
       const newData = masterData.filter((item)=>{
         const itemData = item.name?item.name.toUpperCase():''.toUpperCase();
         const textData = text.toUpperCase();
         return itemData.indexOf(textData)>-1;
       });
       setfilterData(newData);
       setSearch(text);
     }else{
       setfilterData(masterData);
       setSearch(text);
     }
   }
  


   const ItemView = ({item})=>{
     return(
       <Text style={{padding:10}}>{item.id}{'. '}{item.name.toUpperCase()}</Text>
     )
   }
   const ItemSeparatorView=()=>{
     return(
       <View style={{height:0.5,width:'100%', backgroundColor:'#00aaff'}}></View>
     )
   }
  
    return (
      <SafeAreaView>
        <View>
          
          <View style={styles.searchIcon}>
            <View>
               <Icone name="search" size={20}  style={styles.iconstyl}></Icone>
            </View>
         
          <TextInput style={styles.textinput}
          value={search}
          numberOfLines={1}
          underlineColorAndroid='transparent'
          onChangeText={(text)=>searchFilter(text)}
          placeholder="Search"></TextInput>
          </View>

        <FlatList
        data={filterData}
        keyExtractor={(item,index)=>index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        />
        </View>
       
    </SafeAreaView>
      
    );
  
}
const styles = StyleSheet.create({
  textinput:{
   padding:10,
   flex:1,
   color:'#333',
   justifyContent:'center',
   alignItems:'center'
    

  },
  searchIcon:{
    marginTop:5,
    marginBottom:10,
    width:'100%',
    height:45,
    borderColor:'#00aaff',
    borderRadius:10,
    borderWidth:2,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#fff',
  
   
   
  
  },
  iconstyl:{
   padding:10,
   height:'100%',
   justifyContent:'center',
   alignItems:'center',
   width:40
  }
})
export default SearchBar;