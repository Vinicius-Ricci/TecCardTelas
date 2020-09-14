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

    export default function CadastroUsuario() {

    const [ userRm,setUserRm] = useState ("");
    const [ userNome,setUserNome] = useState ("");
    const [ userEmail,setUserEmail] = useState ("");
    const [ userSenha,setUserSenha] = useState ("");
    const [ userCurso,setUserCurso] = useState ("");
    const navigation =  useNavigation();

    const signUp = () => {
      axios.post(api("aluno"), { 
        email:userEmail,
        senha:userSenha,
        rm:userRm,
        curso:userCurso,
        nome:userNome
      }).then((response) => navigation.goBack())
      .catch((error) => {
        const { response } = error;
        if (response !== undefined){
          alert (response.data.message);
        }
        else alert (`Nao foi possivel criar usuario`);
     })
    }; 

return (
<View>

    <TextInput
    value = {userRm}
    //style={styles.input}
    placeholder="RM"
    autoCorrect={false}
    onChangeText={(value) => setUserRm(value)}
    keyboardType = "number-pad"
  />

  <TextInput
  value = {userNome}
 // style={styles.input}
  placeholder="Nome"
  autoCorrect={false}
  onChangeText={(value) => setUserNome(value)}
/>

<TextInput
  value = {userEmail}
  //style={styles.input}
  placeholder="Email"
  autoCorrect={false}
  onChangeText={(value) => setUserEmail(value)}
/>

<TextInput
  value = {userSenha}
  //style={styles.input}
  placeholder="Senha"
  autoCorrect={false}
  onChangeText={(value) => setUserSenha(value)}
/>

<TextInput
  value = {userCurso}
  //style={styles.input}
  placeholder="Curso"
  autoCorrect={false}
  onChangeText={(value) => setUserCurso(value)}
/>

<TouchableOpacity onPress={signUp}>
            <Text> Salvar </Text>
</TouchableOpacity>

</View>
)

}