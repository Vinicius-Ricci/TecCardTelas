import React, { useEffect,useRef,useState } from 'react';
import {View,Text,StyleSheet,ScrollView, Switch} from "react-native";
import axios from "axios";
import { api } from '../util/env';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {MaterialIcons} from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-datepicker';
import { render } from 'react-dom';

export default function calendario(){

    const navigation =  useNavigation();
    const signUp = () => navigation.navigate("calendario");


    
        return(
            <View style={styles.container}>

                <Text style={styles.txt}> Data Inicio </Text> 
                <DatePicker
                format="DD/MM/YYYY"
                style={styles.dateComponet}
                date={""}
                onDateChange={''}
                />

                <Text style={styles.txt}> Data Fim </Text> 
                <DatePicker
                format="DD/MM/YYYY"
                style={styles.dateComponet}
                date={""}
                onDateChange={''}
                />

                <TouchableOpacity style={styles.btnSalvar} onPress={""}>
                    <Text style={styles.btn}> Salvar </Text>
                </TouchableOpacity>
            </View>
        )
    
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#284b63',
        textAlign: 'center',
        

    },

    dateComponet:{
        width: 250,
        margin: 20,
        backgroundColor: '#FFF',
        justifyContent: 'space-between',
        borderColor: '#353535',
        borderWidth: 3.5,
        elevation: 7
    },

    txt:{
        fontSize: 20,
        color: '#FFF',
        margin: 10,
        fontWeight: 'bold',
        fontStyle: 'italic'
       
    },
    btnSalvar:{
        backgroundColor: '#353535',
        width: 300,
        height: 45,
        borderRadius: 7,
        marginTop: 20,
        justifyContent: 'center',
        elevation: 7
    },
    btn:{
        textAlign: 'center',
        color: '#FFF',
        fontSize: 20
      
    }
    
});