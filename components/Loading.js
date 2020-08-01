import React from 'react';

import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Loading = () => {
    return (
        <View style={styles.LoadingContainer}>
          <ActivityIndicator animating size="large" color="red"/>
        </View>
    )
}

const styles = StyleSheet.create({
    LoadingContainer: {
        paddingVertical: 20,
        borderTopWidth: 1,
        backgroundColor: "white",
        borderColor: "#CED0CE",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Loading;