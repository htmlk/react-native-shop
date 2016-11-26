'use strict'

import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button
} from 'react-native';

class Headers extends React.Component{
  constructor(props) {
    super(props);
    console.log(this.props.headersLeft);
    this.state={
      leftname:this.props.headersLeft
    }
  }

  render(){
    return(
      <View style={styles.headers}>
        <View style={styles.headerView}>
          <Text style={styles.headtext}>{this.props.headersLeft}</Text>
        </View>
        <View style={styles.headerView}>
          <Text style={styles.headtext}>{this.props.headersName}</Text>
        </View>
        <View style={styles.headerView}>
          <Text style={styles.headtext}>{this.props.headerRight}</Text>
        </View>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  headerscontainer:{

  },
  headers:{
    height:44,
    width:Dimensions.get('window').width,
    backgroundColor:'#008842',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
  },
  headerView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  headtext:{
    color:'#fff',
    fontSize:20
  },
})
export {Headers as default}
