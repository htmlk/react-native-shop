/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import list1 from './app/base/containerlist.js';
import list2 from './app/base/searchlist.js';
import list3 from './app/base/likelist.js';
import list4 from './app/base/minelist.js';
import styles from './app/styles/main';
import icons from './app/Assets/icons';


import {
  AppRegistry,
  View,
  Text,
  Image,
  Navigator,
  TouchableHighlight,
  StatusBar,
} from 'react-native';

export default class jsochen extends Component {
  constructor(props) {
      super(props);
      this.state = {
        tabIndex: 0
      }
    }

    renderScene(route, navigator) {
      return <route.component navigator={navigator}   {...route.passProps} />;
    }

    configureScene(route, routeStack) {
      if (route.type == 'Modal') {
        return Navigator.SceneConfigs.FloatFromBottom;
      }
      return Navigator.SceneConfigs.PushFromRight;
    }

    render() {
      const routes = [
        {name: '首页',type:'Model',component: list1},
        {name: '发现',type:'Model', component: list2},
        {name: '喜欢',type:'Model', component: list3},
        {name: '我的',type:'Model', component: list4},
      ];

      const tabBars = [
        {title: '首页',imgSrcLight: icons.main,imgSrcDark:icons.main},
        {title: '发现',imgSrcLight: icons.search,imgSrcDark:icons.search},
        {title: '喜欢',imgSrcLight: icons.cart,imgSrcDark:icons.cart},
        {title: '我的',imgSrcLight: icons.mine,imgSrcDark:icons.mine},
      ];

      let tabBarList = tabBars.map((item, index) => {
        return (
          <View key={index} style={styles.tabBarItem}>
            <TouchableHighlight
              underlayColor = "#fff"
              onPress={(route) => {
                this.nav.replace(routes[index]);
              }} key={index}>
              <View style={styles.tabBarThumb}>
                <Image style={this.state.tabIndex === index ? styles.iconImageLight : styles.iconImageDark} source={{uri: this.state.tabIndex === index ? item.imgSrcLight : item.imgSrcDark}} />
                <Text style={this.state.tabIndex === index ? styles.tabBarLight : styles.tabBarDark}>{item.title}</Text>
              </View>
            </TouchableHighlight>
          </View>
        )
      })
      return (
        <View style={{flex: 1}}>
          <StatusBar
            backgroundColor="#008842"
            barStyle="light-content"
          />
          <Navigator
            initialRoute = {routes[0]}
            configureScene = {this.configureScene}
            renderScene = {this.renderScene}
            ref={(navigator) => {
               this.nav = navigator;
            }}
            onWillFocus = {(nextRoute) => {
               if(nextRoute != routes[this.state.tabIndex]){
                  this.setState({
                    tabIndex: routes.indexOf(nextRoute)
                  })
               }
            }}
            navigationBar = {
              <View style={styles.tabBar}>
                <View style={styles.tabBarBox}>
                  {tabBarList}
                </View>
              </View>
            }
          />
        </View>
      )
    }
}


AppRegistry.registerComponent('jsochen', () => jsochen);
