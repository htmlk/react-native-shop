'use strict'

import React from 'react';
import Headers from './directs/header.js';
import styles from '../styles/likeStyle.js';
import {
  Text,
  View,
  WebView,
  StyleSheet
} from 'react-native';

class likelist extends React.Component{
  constructor(props) {
    super(props)

  }
  render(){
    return(
      <View style={styles.containerMine}>
        <Headers headersName={'喜欢'}/>
          <WebView
           style={styles.webView}
           source={{uri:'http://img07.yiguoimg.com/e/web/160324/01052/184235/pufaweixin.html'}}
         />
      </View>
    )
  }
}
export {likelist as default}
