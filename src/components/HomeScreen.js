import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends React.Component { 
    render() { 
        return (
            <View style={styles.container} >
                <View style={styles.CircleShapeView}>
                    <Text style={styles.MainText} > Swipe up to start </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems : "center",
      backgroundColor: '#ffcc00',
   
    },CircleShapeView: {
        marginTop : "100%",
        width: 500,
        justifyContent : "center",
        alignItems : "center",
        height: 500,
        borderRadius:500/2,
        backgroundColor: '#fff'
    }, MainText : {
        fontSize : 20,
    }
  });