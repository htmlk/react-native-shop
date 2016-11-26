'use strict';

import React from 'react-native';
let {StyleSheet,Dimensions}= React;

export default StyleSheet.create({
  grid: {
   justifyContent: 'space-around',
   flexDirection: 'row',
   flexWrap: 'wrap'
 },
  listbox:{

  },
  btnbox:{
    width:Dimensions.get('window').width
  },
  btn:{
    flex:1,
    margin:5,
    width:Dimensions.get('window').width/4-20,
    height:30,
  },
  container:{
    height:44,
    backgroundColor:'#008842',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  address:{
    color:'#fff',
    fontSize:16,
    margin:15
  },
  textinput:{
    padding:5,
    flex:1,
    height: 30,
    borderColor:'#fff',
    borderWidth:0,
    borderRadius:15,
    backgroundColor:'#fff'
  }
})
