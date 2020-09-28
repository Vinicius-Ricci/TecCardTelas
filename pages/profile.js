import React from 'react';
import {View,Text,StyleSheet} from "react-native";

export default function PERFIL(){
    return (
<View style={styles.telaPerfil}>

<Text> Tela de Perfil </Text>

</View>
    );
}


const styles = StyleSheet.create({

    telaPerfil:{
    backgroundColor: '#060613',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    }
})