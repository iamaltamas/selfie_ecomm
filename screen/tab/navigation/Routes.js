import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Fontisto from 'react-native-vector-icons/Fontisto'
import HomeScreen from "../Home_screen";
import Ethinic from "./Ethinic";
import Western from "./Western";
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import {Homescreen,} from "../../secondRoutes/SecondRoutes";
const Tab = createMaterialBottomTabNavigator();
const Routes = () => (
  <Tab.Navigator
  initialRouteName="Homes"
  activeColor="#fff"

>
  <Tab.Screen
    name="Homes"
    component={Homescreen}
    options={{
      tabBarColor:'#00aaff',
      tabBarIcon: ({ color }) => (
        <Ionicons name="home" color={color} size={26} />
      ),
    }}
    
   />
  
  <Tab.Screen
    name="Ethinic"
    component={Ethinic}
    options={{
      tabBarColor:'#e68c1e',
      tabBarLabel: 'Ethinic',
      tabBarIcon: ({ color }) => (
       <Fontisto name="shopping-bag" color={color} size={26}/>
      ),
    }}
  >
     
  </Tab.Screen>
  <Tab.Screen
    name="Western"
    component={Western}
    options={{
      tabBarColor:'#1ee632',
      tabBarLabel: 'Western',
      tabBarIcon: ({ color }) => (
        <Ionicons name="ios-shirt" color={color} size={26} />
      ),
    }}
  />
  <Tab.Screen
    name="SearchBar"
    component={SearchBar}
    options={{
      tabBarColor:'#1ee6b4',
      tabBarLabel: 'SearchBar',
      tabBarIcon: ({ color }) => (
        <Ionicons name="md-search-sharp" color={color} size={26} />
      ),
    }}
  />
  <Tab.Screen
    name="Profile"
    component={Profile}
    options={{
      tabBarColor:'#e61eb1',
      tabBarLabel: 'Profile',
      tabBarIcon: ({ color }) => (
      <FontAwesome5 name="user-alt" color={color} size={26}/>
      ),
    }}
  />
</Tab.Navigator>
);

export default Routes;