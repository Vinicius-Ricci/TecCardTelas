import React,{useState,useEffect} from 'react';
import { View, 
    KeyboardAvoidingView,
    Image,
    TextInput, 
    TouchableOpacity,
    Text,
    StyleSheet,
     Animated 
    } from 'react-native';
    import axios from "axios";
import { api } from '../util/env';
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native-reanimated';
import {Picker} from '@react-native-community/picker';

    export default function CadastroFuncionario() {

    const [ funcNome,setFuncNome] = useState ("");
    const [ funcEmail,setFuncEmail] = useState ("");
    const [ funcSenha,setFuncSenha] = useState ("");
    const navigation =  useNavigation();

    const signUp = () => {
      axios.post(api("usuario"), { 
        email:funcEmail,
        senha:funcSenha,
        nome:funcNome
      }).then((response) => navigation.goBack())
      .catch((error) => {
        console.log("error => ", error);
        const { response } = error;
        if (response !== undefined){
          //alert (response.data.message);
        }
        else alert (`Nao foi possivel criar funcionario`);
     })
    }; 

return (
<View style={styles.background}>

  <TextInput
  value = {funcNome}
  style={styles.input}
  placeholder="Nome"
  autoCorrect={false}
  onChangeText={(value) => setFuncNome(value)}
/>

<TextInput
  value = {funcEmail}
  style={styles.input}
  placeholder="Email"
  autoCorrect={false}
  onChangeText={(value) => setFuncEmail(value)}
/>

<TextInput
  value = {funcSenha}
  style={styles.input}
  placeholder="Senha"
  autoCorrect={false}
  onChangeText={(value) => setFuncSenha(value)}
/>

<TouchableOpacity style={styles.btnSubmit} onPress={signUp}>
            <Text style={styles.btnText}> Salvar </Text>
</TouchableOpacity>

</View>
)
}

const styles = StyleSheet.create({

  background:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#284b63'

  },

  input:{
    backgroundColor: '#FFF',
    width: 300,
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
    elevation: 7   
  },

  btnSubmit:{
    backgroundColor: '#3c6e71',
    width: 300,
    height: 50,
    alignItems: "center",
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    elevation: 7
      
  },
  
  btnText:{
    color: '#FFF',
    fontSize: 18
  }

});
