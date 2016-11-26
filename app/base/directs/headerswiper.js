'use strict'

import React from 'react';
import Swiper from 'react-native-swiper';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';

//import Swiper from 'react-native-swiper';
class Search extends React.Component {
  constructor(props) {
      super(props)
      //待解决
      // this.state={
      //   icons:[{
      //     icon:'新品尝鲜',
      //     url:"require('image!iocn_home_01')"
      //   },{
      //     icon:'订单查询',
      //     url:"require('image!iocn_home_02')"
      //   },{
      //     icon:'水果精选',
      //     url:"require('image!iocn_home_03')"
      //   },{
      //     icon:'优惠券',
      //     url:"require('image!iocn_home_04')"
      //   }]
      // }
  }
  render(){
    //循环渲染待解决
    // let iconslist = this.state.icons.map((content, index) => {
    //   return (
    //     <View key={index}>
    //       <Image
    //         style={styles.iconbtn}
    //         source={content.url}
    //         ></Image>
    //
    //       <Text>{content.icon}</Text>
    //       <Text>{content.url}</Text>
    //     </View>
    //   )
    // });
    return(
      <View style={styles.search}>

        <View style={styles.swpier}>
          <Swiper style={styles.wrapper}
            height={Dimensions.get('window').height/3}
            showsPagination={true}
            showsButtons={false}
            autoplay={true}
             >

              <View style={styles.slide1} >
                <Image
                  style={styles.sliderimages}
                  source={{uri:'http://img09.yiguoimg.com/e/ad/2016/160825/585749448986042649_800x400.jpg'}}
                  >
                </Image>
              </View>

              <View style={styles.slide2} >
                <Image
                  style={styles.sliderimages}
                  source={{uri:'http://img11.yiguoimg.com/e/ad/2016/160927/585749449690947899_800x400.jpg'}}
                  >
                </Image>
              </View>

              <View style={styles.slide3}>
                <Image
                  style={styles.sliderimages}
                  source={{uri:'http://img14.yiguoimg.com/e/ad/2016/160923/585749449636290871_800x400.jpg'}}
                  >
                </Image>
              </View>


        </Swiper>
      </View>

      <View style={styles.iconbox} >
          <View style={styles.iconitem}>
            <Image
            style={styles.iconbtn}
             source={require('image!iocn_home_01')}
             ></Image>
           <Text style={styles.icontext} >新品尝鲜</Text>
         </View>

         <View style={styles.iconitem}>
           <Image
           style={styles.iconbtn}
            source={require('image!iocn_home_02')}
            ></Image>
          <Text style={styles.icontext}>订单查询</Text>
        </View>

        <View style={styles.iconitem}>
          <Image
          style={styles.iconbtn}
           source={require('image!iocn_home_03')}
           ></Image>
         <Text style={styles.icontext}>水果精选</Text>
       </View>

       <View style={styles.iconitem}>
         <Image
         style={styles.iconbtn}
          source={require('image!iocn_home_04')}
          ></Image>
        <Text style={styles.icontext}>优惠券</Text>
      </View>
      </View>

    </View>
    )
  }
}
var styles = StyleSheet.create({
  iconbox:{
    height:100,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center'
  },
  iconitem:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },
  iconbtn:{
    width:60,
    height:60
  },
  icontext:{
    fontSize:16
  },
  swpier:{
  },
  wrapper: {
  },
  slide1: {

    justifyContent: 'center',
    alignItems: 'center',

  },
  sliderimages:{
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height/3
  },
  slide2: {

    justifyContent: 'center',
    alignItems: 'center',

  },
  slide3: {

    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export {Search  as default}
