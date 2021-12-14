import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../tab/Home_screen'
import SearchBar from '../tab/navigation/SearchBar'
import Ethinic from '../tab/navigation/Ethinic';
import HomeList from '../tab/HomeList';
import Western from '../tab/navigation/Western';
import PartyWear from '../tab/navigation/Party_wear';
import IndoWeston from '../tab/navigation/Indo_Weaston';
import WeddingWear from '../tab/navigation/Weddin_Wear';
import WinterWear from '../tab/navigation/Winter_Wear';
import AddToCart from '../cart/AddToCart';
const Stack = createNativeStackNavigator();

const Homescreen =(props)=>{
    return (
        <Stack.Navigator>
            <Stack.Screen
            name='Home'
            component={HomeScreen}
           options={{headerShown:false}}
           
            />
            
            <Stack.Screen
            name='SearchBar'
            component={SearchBar}

            />
            <Stack.Screen
            name='All Product'
            component={HomeList}
            />
            <Stack.Screen
            name='Ethinic'
            component={Ethinic}
            />
            <Stack.Screen
            name='Western'
            component={Western}
            />
            <Stack.Screen
            name='Party Wear'
            component={PartyWear}
            />
            <Stack.Screen
            name="Indo Weston"
            component={IndoWeston}
            />
            <Stack.Screen
            name='Wedding Wear'
            component={WeddingWear}
            />
            <Stack.Screen
            name='Winter Wear'
            component={WinterWear}
            />
            <Stack.Screen
            name="Add To Cart"
            component={AddToCart}
            />
        </Stack.Navigator>
    )
}
export{Homescreen}

