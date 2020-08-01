import React from 'react';

import {View, StyleSheet} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import {WebView} from 'react-native-webview';

const WebView1 = (props) => {
    return (
        <View style={styles.webViewContainer}>
          <WebView
                source={{
                uri: props.uri
                }}
                style={styles.webView}
                javaScriptEnabled={false}
            />
          <View style={styles.webViewBackContainer}>
          </View>
          <Ionicons style={styles.icon} name="ios-arrow-round-back" size={50} onPress={() => {props.onPress()}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    webViewContainer: {
        flex: 1, 
        flexDirection:'row', 
        justifyContent: 'center'
    },
    webView: {
        position: "absolute", 
        top: 60, 
        left: 0,
        height: "100%",
        width:"100%"
    },
    icon : {
        margin: 5,
        position: "absolute",
        top: 0,
        left: 10,
        width: 60,
        height: 60,
        color: "white"
    },
    webViewBackContainer: {
        height: 60, 
        width: "100%", 
        backgroundColor:'black', 
        position: "absolute", 
        top: 0, 
        left: 0, 
        flex: 1, 
        flexDirection:'row'
    }
})

export default WebView1;