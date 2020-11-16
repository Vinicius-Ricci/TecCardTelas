import React, { useEffect,useRef,useState } from 'react';
import {View,Text,StyleSheet,ScrollView, Switch} from "react-native";
import axios from "axios";
import { api } from '../util/env';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {MaterialIcons} from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation, useRoute } from '@react-navigation/native';
import DatePicker from 'react-native-datepicker';
import { render } from 'react-dom';

export default function calendario(){

    const navigation =  useNavigation();
    const route = useRoute();
    const save = () => {
        axios.post( api("acesso/grant"), { 
            rm: route.params.rm,
            descricao: allowed?"Liberado":"Nao esta liberado!",
            dataInicio: dataInicio.replace(/(\d{2})\/(\d{2})\/(\d{4})/,"$3-$2-$1"),
            dataFim: dataFim.replace(/(\d{2})\/(\d{2})\/(\d{4})/,"$3-$2-$1")
          }).then((response) => {
            alert (` Liberação de acesso alterada com sucesso! `);
            navigation.navigate("adm");
     
          })
          .catch((error) => {
            const { response } = error;
            if (response !== undefined){
              alert (response.data.message);
            }
            else alert (`Não foi possivel alterar a liberação de acesso!`);
         })
        
    }
    const [allowed, setAllowed] = useState(false);
    const [dataInicio, setDataInicio] = useState("");
    const [dataFim, setDataFim] = useState("");



    
        return(
            <View style={styles.container}>
                
                <Text style={styles.txtHabilitar}>Habilitar Aluno</Text>
                <Switch
                onValueChange={(value) => setAllowed(value)}
                value={allowed}
                style={styles.switch}
                />
                <Text style={styles.txt}> Data Inicio </Text> 
                <DatePicker
                format="DD/MM/YYYY"
                style={styles.dateComponet}
                date={dataInicio}
                onDateChange={(value) => setDataInicio(value)}
            
                />

                <Text style={styles.txt}> Data Fim </Text> 
                <DatePicker
                format="DD/MM/YYYY"
                style={styles.dateComponet}
                date={dataFim}
                onDateChange={(value) => setDataFim(value)}

                />

                <TouchableOpacity style={styles.btnSalvar} onPress={save}>
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
      
    },
    txtHabilitar:{
        fontSize: 20,
        color:'#FFF',
        fontWeight: 'bold',
        marginTop: 10
    },
    switch:{
        margin: 10
    }
    
});