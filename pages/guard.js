import React from 'react';
import {View,Text,StyleSheet} from "react-native";

export default function GUARD(){
    return (
<View style={styles.telaPortaria}>

<Text> Tela da Portaria </Text>

</View>
    );
}


const styles = StyleSheet.create({

    telaPortaria:{
    backgroundColor: '#060613',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    }
})