/*import React,{useState,useEffect} from 'react';
import { View, 
    KeyboardAvoidingView,
    Image,
    TextInput, 
    TouchableOpacity,
    Text,
    StyleSheet,
     Animated ,
     Picker
    } from 'react-native';
    import axios from "axios";
import { api } from '../util/env';
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native-reanimated';

    export default function CadastroUsuario() {

    const [ userNome,setUserNome] = useState ("");
    const [ userEmail,setUserEmail] = useState ("");
    const [ userSenha,setUserSenha] = useState ("");
    const [ userPermissao,setUserPermissao] = useState ("");
    const navigation =  useNavigation();

    const signUp = () => {
      axios.post(api("usuario"), { 
        email:userEmail,
        senha:userSenha,
        nome:userNome,
        permissao:userPermissao
      }).then((response) => navigation.goBack())
      .catch((error) => {
        console.log("error => ", error);
        const { response } = error;
        if (response !== undefined){
          alert (response.data.message);
        }
        else alert (`Nao foi possivel criar funcionario`);
     })
    }; 

return (
<View style={styles.background}>

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

<Picker style={styles.Piker}
 selectedValue={selectedValue}
 style={{ height: 50, width: 150 }}
 onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
>
 <Picker.Item label="Administrador" value="administrador" />
 <Picker.Item label="Portaria" value="portaria" />
 onChangeText={(value) => setUserPermissao(value)}
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
    backgroundColor: '#060613'

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
    backgroundColor: '#778899',
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
  },
  Piker:{
    backgroundColor: '#FFF',
    width: 300,
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10   
  }

});
*/
