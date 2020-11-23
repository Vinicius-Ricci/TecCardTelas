import React,{useState,useEffect, useRef} from 'react';
import { View, 
    TextInput, 
    TouchableOpacity,
    Text,
    StyleSheet,
    
    } from 'react-native';
    import axios from "axios";
import { api } from '../util/env';
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native-reanimated';
import {Picker} from '@react-native-community/picker';

    export default function CadastroUsuario() {

    const [ userRm,setUserRm] = useState ("");
    const [ userNome,setUserNome] = useState ("");
    const [ userEmail,setUserEmail] = useState ("");
    const [ userSenha,setUserSenha] = useState ("");
    const [ userCurso,setUserCurso] = useState ("");
    const [cursos, setCursos] = useState([]);
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

    const loadCurso = () => {
      axios.get(api("curso")).then((response) => {
        console.log('cursos ', response);
        setCursos(response.data)
      })
      .catch((error) => {
        console.log("error => ", error);
        const { response } = error;
        if (response !== undefined){
          alert (response.data.message);
        }
        else alert (`Nao foi possivel listar os cursos`);
     })
    };
     
    const started = useRef(false);
    useEffect(() => {
      if(started.current){
        return;
      }
      started.current = true;
      loadCurso();
    })

    const itens = cursos.map(c => (<Picker.Item key={c.id} label={c.name} value={c.id} />));
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

<Picker selectedValue={userCurso} onValueChange={(itemValue) => setUserCurso(itemValue)} style={styles.picker}>

  {
    itens
  }

</Picker>



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
    borderColor: '#353535',
    borderWidth: 2,
    elevation: 10
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
    elevation: 10,
    margin: 25
      
  },
  btnText:{
    color: '#FFF',
    fontSize: 18
  },

  picker:{
    width: 300,
    backgroundColor: '#FFF',
    height: 50,
    borderRadius: 7,
    padding: 10,
    borderColor: '#353535',
    elevation: 10,
  
  },
});

