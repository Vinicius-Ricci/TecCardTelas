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
            <View style={styles.container}>
                <Text style={styles.text}>Nome : {u.nome}</Text> 
                <Text style={styles.text}>Curso: {u.curso}</Text>
                <Text style={styles.text}>Rm: {u.rm}</Text>
                <Text style={styles.text}>Email: {u.email}</Text>
                <View style ={styles.alignButton}> 
                <TouchableOpacity style={styles.button}> 
                    <MaterialIcons style={styles.textButtonDel} name="delete"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonEdit}> 
                    <MaterialIcons style={styles.textButtonEdit} name="edit"/>
                </TouchableOpacity> 
                </View>


            </View>
        ))
    }

</ScrollView>

</View>
    );
}


const styles = StyleSheet.create({

    telaAdm:{
    backgroundColor: '#284b63',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:20
    
    },

    scroll:{
        flex: 1,
        

    },

    text:{
        color:'#FFF',
        fontSize: 20,
        fontWeight: "bold",
        borderWidth: 1.5,
        borderColor: '#3c6e71',
        borderRadius: 5,
        padding : 1,
        margin: 5,
        justifyContent:'space-between',
        backgroundColor: '#3c6e71'
  
    },
    container:{
        justifyContent:'space-between'
        
    },
    button:{
        marginBottom: 20,
        width: 50,
        height:50,
        borderRadius: 13,
        borderWidth: 0,
        marginTop: 16,
        paddingVertical: 8,
        justifyContent:'space-between',
        elevation: 1.5,
        alignItems:'center',
        backgroundColor:'#284b63'
        

    },
    
    textButtonDel:{
        fontSize: 30,
        color:'#8B0000',
        alignItems:'center',
        flexDirection: 'row'
        
    },
    textButtonEdit:{
        fontSize: 30,
        color:'#006400',
        alignItems:'center',
        flexDirection: 'row'
        
    },
  alignButton:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
            
  }

})