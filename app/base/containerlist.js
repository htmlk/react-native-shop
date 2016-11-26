'use strict'

import React from 'react';


import Search from './directs/headerswiper';
import Headers from './directs/header';
import listDetail from './directs/listdetail';
import fekchobj from './common/fekchData';
import icons from '../Assets/icons';
import styles from '../styles/containerStyle.js';

import {
  StyleSheet,
  View,
  Text,
  Image,
  ListView,
  ScrollView,
  ActivityIndicator,
  TouchableHighlight,
  RefreshControl
} from 'react-native';
const LIST_URL='http://www.tngou.net/api/cook/list';
class container extends React.Component {
  //定义数据
  constructor(props) {
    super(props);
    this.fetchDate();
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
     ds,
     loading: false,
     isRefreshing:false
   };
   this._data = [];
  }
  //获取数据
  fetchDate(){
    let sum=Math.floor(Math.random()*100);
    let getlist=fekchobj.R_GET(LIST_URL, {'page':sum,'rows':'2'})
    getlist.then((val)=>{
        console.log(val.tngou);
        this.setState({
            ds:this.state.ds.cloneWithRows(val.tngou),
            loading: true
        })

    }).catch((res)=>{
        console.log(res);
    })
  }
  //点击跳转
  showMovieDetail(rowData){
    console.log(rowData.name);
    this.props.navigator.push({
      component:listDetail,
      passProps:{rowData}
    })
  }
  //渲染数据模板
  renderlist(rowData){
    return(
    <View>
      <TouchableHighlight
        underlayColor='#333'
         onPress={() => this.showMovieDetail(rowData)}
        >

      <View style={styles.container}   >
        <View style={styles.containerbox} >

        <Image
        style={styles.image}
        source={{uri:'http://tnfs.tngou.net/image'+rowData.img}}

        >
          <Text style={styles.imgtext}>最新推荐</Text>
        </Image>

        <Text style={styles.name}>{rowData.name}</Text>
        <Text>食材： {rowData.food}</Text>

        <View style={styles.countbox}>
            <Text>访问数：{rowData.count}</Text>
            <Text>收藏数：{rowData.fcount}</Text>
            <Image
            style={styles.cart}
            source={{uri:icons.cart}}
            ></Image>
        </View>

        </View>
      </View>
    </TouchableHighlight>
  </View>
    )
  }
  //检测滚动到底部
  listEnd(){
    console.log(0);
  }
  //下拉刷新的时候
  _onRefresh(){
      this.fetchDate();
  }
  //将渲染后的模板添加到render
  render(){
    return(
      <View>
        <View style={styles.headerscontainer}>
          <View>
              <Headers  headersName={'首页'} />

          </View>

          <ScrollView
            refreshControl={
                 <RefreshControl
                   refreshing={this.state.isRefreshing}
                   onRefresh={this._onRefresh.bind(this)}
                   tintColor="#ff0000"
                   title="Loading..."
                   titleColor="#00ff00"
                   progressBackgroundColor="#008842"
                 />
              }
            >
            <Search/>
            <View>

                <ListView
                    enableEmptySections = {true}
                     dataSource={this.state.ds}
                     renderRow={this.renderlist.bind(this)}
                   />
             </View>
             </ScrollView>
        </View>
      </View>
    )
  }
}

export { container as default};
