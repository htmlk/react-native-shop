'use strict';

import React from 'react-native';
let {StyleSheet,Dimensions}= React;

export default StyleSheet.create({
  containerMine:{
    width:Dimensions.get('window').width,
    flex:1
  },
  webView:{
  width:Dimensions.get('window').width,
  flex:1
  }
})
