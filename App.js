
import React, { useEffect } from 'react';
import {
  StyleSheet, View, ScrollView,Text

} from 'react-native';

import SplashScreen from 'react-native-splash-screen'
// import SearchBar from './screen/tab/navigation/SearchBar';
// import HomeScreen from './screen/tab/Home_screen';
// import Home from './screen/tab/Home';
// import HomeList from './screen/tab/HomeList';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './screen/tab/navigation/Routes';






const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);

  })

  return (
    // <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    <>
      
        {/* <Routes/> */} 
      {/* <HomeScreen /> */}
      {/* <FirstProduct/>*/}
      {/* <HomeList/> */}
      {/* <SearchBar/>*/}

      
    <NavigationContainer>
       <Routes/>
        
    </NavigationContainer>
    </>
  );
 
    

  
};

const styles = StyleSheet.create({

});

export default App;
