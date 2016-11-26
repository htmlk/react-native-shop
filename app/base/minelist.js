'use strict'

import React from 'react';
import Headers from './directs/header.js';
import styles from '../styles/mineStyle.js';
import {
  Text,
  View,
  WebView,
  StyleSheet
} from 'react-native';

class minelist extends React.Component{
  constructor(props) {
    super(props)

  }
  render(){
    return(
      <View style={styles.containerMine}>
        <Headers headersName={'我的'}/>
          <WebView
           style={styles.webView}
           source={{uri:'http://www.htmlk.cn/#/login/2'}}
         />
      </View>
    )
  }
}

export {minelist as default}
