'use strict';

import React from 'react-native';
let { StyleSheet } = React;

export default StyleSheet.create({
  tabBar:{
    height:44,
    borderTopColor:'#eee',
    borderTopWidth:0.5
  },
  tabBarBox:{
    flex:1,
    flexDirection:'row'
  },
  tabBarItem:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImageLight:{
    height:20,
    width:20,
    tintColor:'red'
  },
  iconImageDark:{
    height:20,
    width:20,
    tintColor:'#333'
  },
  tabBarLight:{
    color:'red'
  },
  tabBarDark:{
    color:'#333'
  },
  tabBarThumb: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
 }
});
