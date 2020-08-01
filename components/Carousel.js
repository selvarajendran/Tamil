import React, { useState } from 'react';

import {View, SafeAreaView, Dimensions} from 'react-native';

import ReactCarousel from 'react-native-snap-carousel';
import CarouselItem from './CarouselItem';
import WebView from './WebView';

const screenWidth = Math.round(Dimensions.get('window').width);

const Carousel = (props) => {
    
    const [activeIndex, setActiveIndex] = useState(0);
    const [prevActiveIndex, setPrevActiveIndex] = useState(0);
    const [webView, setWebView] = useState(false);

    const _renderItem = (item,index) => {
        return <CarouselItem item={item} onOpenWebView={onOpenWebView}/>
    }

    const onCloseWebView = () => {
        setWebView(false);
    }

    const onOpenWebView = () => {
        setWebView(true);
        setPrevActiveIndex(activeIndex);
    }

    const renderWebView = () => {
        return <WebView uri={props.carouselItems[activeIndex] && props.carouselItems[activeIndex]._link} onPress = {onCloseWebView}/>
      }

     return (
        webView ? renderWebView() :
        <SafeAreaView style={{flex: 1, backgroundColor:'white', paddingTop: 0, }}>
              <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                  <ReactCarousel
                    layout={"tinder"}
                    loop={true}
                    data={props.carouselItems}
                    sliderWidth={screenWidth}
                    itemWidth={screenWidth + 30}
                    firstItem = {prevActiveIndex}
                    renderItem={_renderItem}
                    onSnapToItem = { index => setActiveIndex(index) } />
              </View>
        </SafeAreaView>
    );
}

export default Carousel;