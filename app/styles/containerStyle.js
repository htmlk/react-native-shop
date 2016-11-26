'use strict';

import React from 'react-native';
let {StyleSheet,Dimensions}= React;

export default StyleSheet.create({

    loading:{
      justifyContent:'center'
    },
    container:{
      padding:10,
      backgroundColor:'#dcdcdc'
    },
    loadingbox:{
      backgroundColor:'#fff'
    },
    image:{
      height:300,
      resizeMode:'cover'
    },
    imgtext:{
      color:'#fff',
      width:80,
      fontSize:16,
      textAlign:'center',
      backgroundColor:'#008842'
    },
    name:{
      fontWeight:'bold',
      fontSize:20
    },
    cart:{
      height:20,
      width:20,
      tintColor:'#999'
    },
    countbox:{
      flex: 1,
      flexDirection: 'row',
      justifyContent:'space-between'
    }
})
