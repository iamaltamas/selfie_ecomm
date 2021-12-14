import React, { Component } from 'react'
import { Text, View,SafeAreaView,ScrollView} from 'react-native'
import { SliderBox } from "react-native-image-slider-box";
const images =[
 
 // require('../../assets/img/sbanner-2.png'),
 "https://selfiekurtiz.com/api/app_images/banner/sbanner-3.png",
 "https://selfiekurtiz.com/api/app_images/banner/sbanner-3.png",
 "https://selfiekurtiz.com/api/app_images/banner/sbanner-3.png",
 ];
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
  images:[ // require('../../assets/img/sbanner-2.png'),
  require('../assest/img/slider.jpg'),
  require('../assest/img/slider.jpg'),
  require('../assest/img/slider.jpg'),
    ]
  }}
  render() {
    return (
      <SafeAreaView>
          <View>
              <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1,
                   alignItems: "center",
                    alignItems: "center",
                    marginLeft:15,
                    marginRight:15
                    }}>
                  <SliderBox
                  autoplay={true}
                  circleLoop={true}

                  images={this.state.images}
                  dotStyle={{
                      width: 15,
                      height: 15,
                      borderRadius: 15,
                      marginHorizontal: 10,
                      padding: 0,
                      margin: 0
                  }}
                  dotColor="#f0ad4e"
                  inactiveDotColor="#90A4AE"
                  >
                      
                  </SliderBox>
                </View>
              </ScrollView>
          </View>
      </SafeAreaView>
    )
  }
}
