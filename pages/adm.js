import React, { useEffect,useRef,useState } from 'react';
import {View,Text,StyleSheet,ScrollView} from "react-native";
import axios from "axios";
import { api } from '../util/env';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {MaterialIcons} from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
Icon.loadFont();


export default function ADM(){
    const navigation =  useNavigation();
    const started = useRef(false);
    const signUp = () => navigation.navigate("cadastroFuncionario");
    const goToAccess = (rm) => navigation.navigate("calendario", {rm});
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

/*      const GrantAccess = () => {
        axios.post( api("acesso/grant"), {
            rm:
        }).then((response) => {
        
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
*/
    useEffect(() => {
         if(started.current)
         return;
         started.current = true;
         listUsers()

    })
    return (
<View style={styles.telaAdm}>



<ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

    {
        usuarios.map(u => (
            <View key={u.rm} style={styles.container}>
                <Text style={styles.text}>Nome : {u.nome}</Text> 
                <Text style={styles.text}>Curso: {u.curso}</Text>
                <Text style={styles.text}>Rm: {u.rm}</Text>
                <Text style={styles.text}>Email: {u.email}</Text>
                <View style ={styles.alignButton}> 

              <View style={{justifyContent: "center", margin: 15,}}>

              <TouchableOpacity style={styles.btnCalenadrio} onPress={() => goToAccess(u.rm)}>
                  <Text style={styles.txtCalen}> Liberar saida </Text>
              </TouchableOpacity>

                </View>  
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
    
    
    },

    scroll:{
        flex: 1,
        width: 350,
        margin: 10
        

    },

    text:{
        color:'#FFF',
        fontSize: 20,
        fontWeight: "bold",
        borderWidth: 1.5,
        borderColor: '#3c6e71',
        borderRadius: 5,
        padding : 5,
        margin: 5,
        justifyContent:'space-between',
        backgroundColor: '#3c6e71',
        borderColor: '#D9D9D9',
        borderWidth: 1,
        elevation: 20,
        fontStyle:'italic'
  
    },
    container:{
        justifyContent:'space-between'
        
    },
    button:{
        marginBottom: 20,
        marginTop: 16,
        paddingVertical: 8,
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#284b63'
        

    },
    
    textButtonDel:{
        fontSize: 30,
        color:'#8B0000',
        alignItems:'center',
        flexDirection: 'row',
        elevation: 7
        
    },
    textButtonEdit:{
        fontSize: 30,
        color:'#fdc500',
        alignItems:'center',
        flexDirection: 'row',
        elevation: 7
        
    },
  alignButton:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
            
  },
  addFuncionario:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#D9D9D9',
      width: '110%',
      height: 50,
      elevation: 20,
      borderColor: '#353535',
      borderWidth: 2,
      
      

  },
  addText:{
      fontSize: 20,
      color: '#353535',
      textAlign: 'center'
  },
  addIcon:{
      margin: 5,
      fontSize: 25,
      color: '#353535'
  },
  btnCalenadrio:{
      backgroundColor: '#353535',
      height: 30,
      borderRadius: 7,
      justifyContent: 'center',
      elevation: 7,
      borderColor: '#D9D9D9',
      borderWidth: 1,
      


  },
  txtCalen:{
      color: '#FFF',
      fontSize: 15
  }
 
})