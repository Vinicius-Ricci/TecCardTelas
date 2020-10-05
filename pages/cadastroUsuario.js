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

    export default function CadastroUsuario() {

    const [ userRm,setUserRm] = useState ("");
    const [ userNome,setUserNome] = useState ("");
    const [ userEmail,setUserEmail] = useState ("");
    const [ userSenha,setUserSenha] = useState ("");
    const [ userCurso,setUserCurso] = useState ("");
    const navigation =  useNavigation();

    const signUp = () => {
      axios.post(api("usuario"), { 
        email:userEmail,
        senha:userSenha,
        rm:userRm,
        curso:userCurso,
        nome:userNome
      }).then((response) => navigation.goBack())
      .catch((error) => {
        console.log("error => ", error);
        const { response } = error;
        if (response !== undefined){
          alert (response.data.message);
        }
        else alert (`Nao foi possivel criar usuario`);
     })
    }; 

return (
<View style={styles.background}>

    <TextInput
    value = {userRm}
    style={styles.input}
    placeholder="RM"
    autoCorrect={false}
    onChangeText={(value) => setUserRm(value)}
    keyboardType = "number-pad"
  />

  <TextInput
  value = {userNome}
  style={styles.input}
  placeholder="Nome"
  autoCorrect={false}
  onChangeText={(value) => setUserNome(value)}
/>

<TextInput
  value = {userEmail}
  style={styles.input}
  placeholder="Email"
  autoCorrect={false}
  onChangeText={(value) => setUserEmail(value)}
/>

<TextInput
  value = {userSenha}
  style={styles.input}
  placeholder="Senha"
  autoCorrect={false}
  onChangeText={(value) => setUserSenha(value)}
/>

<TextInput
  value = {userCurso}
  style={styles.input}
  placeholder="Curso"
  autoCorrect={false}
  onChangeText={(value) => setUserCurso(value)}
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
    padding: 10   
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
    elevation: 1.5
      
  },
  btnText:{
    color: '#FFF',
    fontSize: 18
  }

});

