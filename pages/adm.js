import React from 'react';
import {View,Text,StyleSheet} from "react-native";

export default function ADM(){
    return (
<View style={styles.telaAdm}>

<Text> Tela ADM </Text>

</View>
    );
}


const styles = StyleSheet.create({

    telaAdm:{
    backgroundColor: '#060613',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    }
})