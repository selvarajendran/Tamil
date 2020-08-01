import React from 'react';

import {View, Text, Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);

const CarouselItem = (props) => {
    const trimText = (text) => {
        return text ? text.trim(): '';
    }

    return (
        <View style={styles.ListContainer}>
              <Image
              style={styles.ListImage}
              source={{
                uri: props.item.item._img,
              }}
            />
            <Text style={styles.ListTitle}>{trimText(props.item.item._title)}</Text>
            <Text style={styles.ListTime}>{trimText(props.item.item._time)}</Text>
            <Text style={styles.ListText}>{trimText(props.item.item._content)}</Text>
            <View style={styles.TapMoreContainer}>
              <TouchableOpacity activeOpacity={0.8} onPress = {() => {props.onOpenWebView()}}>
              <Text style={styles.TapMoreText}>Tap to Read more</Text>
              </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    ListContainer : {
        backgroundColor:'white',
        borderRadius: 5,
        height: "100%",
        padding: 20,
        marginLeft: 0,
        marginRight: 25
    },
    ListImage: {
        height:"45%",
        width:"100%"
    },
    ListTitle: {
        fontSize: 25, 
        paddingTop: 10
    },
    ListTime: {
        fontSize: 13,
        paddingTop: 10, 
        color:"grey"
    },
    ListText: {
        fontSize: 16,
        paddingTop: 10
    },
    TapMoreContainer: {
        position: "absolute",
        bottom: 0,
        left:0,
        height: 50,
        width: screenWidth,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center"
    },
    TapMoreText: {
        fontSize: 16,
        color: "white",
        opacity: 0.8
    }
})

export default CarouselItem;