'use strict'


import React from 'react';
import fekchobj from '../common/fekchData.js';
import Headers from './header.js';
import {
  Text,
  View,
  WebView,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Button
} from 'react-native';
const LIST_URL='http://www.tngou.net/api/cook/name';
class listDetail extends React.Component {
  //接受传过来的值
  constructor(props) {
    super(props);
    setTimeout(function(){
        this.fekchData()
    }.bind(this),30)
    this.state = {
     ds:{},
     detail: this.props.rowData.name,
   }
  }
  //通过name查找详情
  fekchData(){
     let getlist=fekchobj.R_GET(LIST_URL, {'name':this.state.detail})
     getlist.then((val)=>{
         this.setState({
             ds:val.tngou[0],
             loading: true
         })

     }).catch((res)=>{
         console.log(res);
     })
  }
  //返回
  _onPressBack() {
    this.props.navigator.jumpBack();
  }
  render(){
    return(

<View  style={styles.containermain}>

  <View style={styles.headers}>
    <View style={styles.headerView}>
        <Button
          style={styles.headtext}
          onPress={()=>this._onPressBack()}
          title='返回'
          color="#008842"
          />
    </View>
    <View style={styles.headerView}>
      <Text style={styles.headtext}>{this.state.ds.name}</Text>
    </View>
    <View style={styles.headerView}>
      <Text style={styles.headtext}></Text>
    </View>
  </View>

      <View style={styles.container}>

        <ScrollView>
          <Image
            style={styles.image}
            source={{uri:'http://tnfs.tngou.net/image'+this.state.ds.img}}
            ></Image>


          <View>
            <Text style={styles.name}>准备食材：{this.state.ds.food}</Text>
          </View>

          <View style={styles.webView}>
            <WebView
              style={styles.message}
              source={{html:this.state.ds.message}}
              scalesPageToFit ={true}
              automaticallyAdjustContentInsets ={true}
              ></WebView>
          </View>

      </ScrollView>
      </View>
</View>
    )
  }
}
const styles=StyleSheet.create({
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
  containermain:{
    flex:1,
    backgroundColor:'#fff'
  },
  container:{

    padding:10
  },
  image:{
    height:300,
    width:Dimensions.get('window').width-20,
  },
  name:{
    fontSize:20,
    fontWeight:'bold'
  },
  webView:{
    flex:1
  },
  message:{
    height:Dimensions.get('window').height-300
  }
})
export {listDetail as default};
