'use strict'

import React from 'react';
import Swiper from 'react-native-swiper';
import fekchobj from './common/fekchData';
import listDetail from './directs/listdetail';
import styles from '../styles/searchStyle.js';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  ListView,
  Button,
  Alert,
} from 'react-native';
const LIST_URL='http://www.tngou.net/api/cook/classify'
class Searchlist extends React.Component{
  constructor(props) {
    super(props)
    this.fetchDate();
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state={
      ds,
      placeholder :'请输入关键字',
      keyword:''
    }
  }
  //读取热门数据
  fetchDate(){
    let getlist=fekchobj.R_GET(LIST_URL)
    getlist.then((val)=>{
        this.setState({
            ds:this.state.ds.cloneWithRows(val.tngou),
            loading: true
        })

    }).catch((res)=>{
        console.log(res);
    })
  }
  //渲染热门数据
  renderlist(val){
    return(
        <View style={styles.btn}>
          <Button
            style={styles.btn}
            onPress={()=>this.onPressLearnMore(val)}
            title={val.name}
            color="#dcdcdc"
            accessibilityLabel="Learn more about this purple button"
            />
        </View>

    )
  }
  //点击button弹出框
  onPressLearnMore(row){
    //console.log(row);
    Alert.alert(row.name);
  }
  //搜索事件
  changeValue(val){

    let rowData={
      name:val
    }

    this.setState({
      keyword:rowData
    })
      console.log(this.state.keyword);
  }
  onSubmitEditing (sub){
    let rowData=this.state.keyword
    this.props.navigator.push({
      passProps:{rowData},
      component:listDetail,
    })
  }
  render(){

    return(
      <View>
      <View style={styles.container} >
        <Text style={styles.address}>北京</Text>
        <TextInput
           style={styles.textinput}
           placeholder ={this.state.placeholder }
           underlineColorAndroid={'transparent'}
           onChangeText={(text) => this.changeValue(text)}
           onSubmitEditing ={(text)=>this.onSubmitEditing(text)}
         />
       <Text style={styles.address}>扫码</Text>
         <Text style={styles.address}>消息</Text>
      </View>

      <View style={styles.listbox}>

          <View>
          <ListView
              style={styles.btnbox}
              pageSize={3}
              contentContainerStyle={styles.grid}
              enableEmptySections = {true}
               dataSource={this.state.ds}
               renderRow={this.renderlist.bind(this)}
             />
           </View>
      </View>
    </View>
    )

  }
}

export {Searchlist as default}
