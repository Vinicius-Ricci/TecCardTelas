import React, { useEffect,useState } from 'react';
import {View,Text,StyleSheet,ScrollView} from "react-native";
import axios from "axios";
import { api } from '../util/env';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {MaterialIcons} from "@expo/vector-icons";


export default function ADM(){
    const [usuarios,setUsuarios]=useState([]);
    const listUsers = () => {
        axios.get( api("usuario/list")).then((response) => {
        
            setUsuarios(response.data);
    
        })
        .catch((error) => {
          const { response } = error;
          if (response !== undefined){
            alert (response.data.message);
          }
          else alert (`Nao foi possivel processar os usuarios`);
       })
      }; 
    useEffect(() => listUsers())
    return (
<View style={styles.telaAdm}>

<ScrollView style={styles.scroll}>

    {
        usuarios.map(u => (
            <View>
                <Text style={styles.text}>{u.nome}</Text>
                <Text style={styles.text}>{u.curso}</Text>
                <Text style={styles.text}>{u.RM}</Text>
                <Text style={styles.text}>{u.email}</Text>
                <TouchableOpacity> 
                    <MaterialIcons name="delete" color="#FFF"/>
                </TouchableOpacity>
            </View>
        ))
    }

</ScrollView>

</View>
    );
}


const styles = StyleSheet.create({

    telaAdm:{
    backgroundColor: '#060613',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },

    scroll:{
        flex: 1

    },

    text:{
        color:'#FFF'
    }

})