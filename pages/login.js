import React,{useState,useEffect} from 'react';
import { View, KeyboardAvoidingView,TextInput, TouchableOpacity,Text,StyleSheet, Animated, ImageBackground } from 'react-native';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import { api } from '../util/env';
import { useDispatch } from 'react-redux';
import { updateDataAction } from '../store/data/action';



export default function Login() {

    const dispatch = useDispatch();

    const [ offset ] = useState(new Animated.ValueXY({x: 0, y: 80}));
    const [ userName,setUserName] = useState ("");
    const [ userPassword,setUserPassword] = useState ("");
    const navigation =  useNavigation();

    //Navegando para o formulario de cadastro 
    const signUp = () => navigation.navigate("cadastroUsuario");
    

    
    //Logando com um usuario 
    const signIn = () => {
      axios.post( api("usuario/login"), { 
        email:userName,
        senha:userPassword
      }).then((response) => {
        alert (` Seja Bem vindo, ${response.data.nome}`);
        console.log("response.data: ", response.data);
        dispatch(updateDataAction(response.data));
        switch(response.data.tipo){
          
          case "ADM": navigation.navigate("adm"); break;
          case "GUARD": navigation.navigate("guarda"); break;
          default: navigation.navigate("perfil"); break;

        }
      })
      .catch((error) => {
        const { response } = error;
        if (response !== undefined){
          alert (response.data.message);
        }
        else alert (`Nao foi possivel logar`);
     })
    }; 
    //Tela inicial 
    useEffect(() => {
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,

      }).start();
    }, []);
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
       
        <Text style={styles.TextBemvindo}>Bem-Vindo!</Text>
        
      </View>

      <Animated.View styles={[
        styles.container,
        {
          transform: [
            {translateY: offset.y }
          ]
        }
        ]}>
          <TextInput
            value = {userName}
            style={styles.input}
            placeholder="Email"
            autoCorrect={false}
            onChangeText={(value) => setUserName(value)}
          />

           <TextInput
           value = {userPassword}
            style={styles.input}
            placeholder="Senha"
            autoCorrect={false}
            onChangeText={(value) => setUserPassword(value)}
            secureTextEntry = {true}
          />

          <TouchableOpacity style={styles.btnSubmit} onPress = {signIn}>
            <Text style={styles.submitText}> Acessar </Text>
          </TouchableOpacity>

          
          <TouchableOpacity style={styles.btnRegister} onPress={signUp}>
            <Text style={styles.registerText}> Criar </Text>
          </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>

  );
}
//Alterando Estilos 
 const styles = StyleSheet.create({

  background:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#284b63'

  },
  containerLogo:{
    flex: 0.6,
    justifyContent: 'center'
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    paddingBottom: 50

  },
  input:{
    backgroundColor: '#FFF',
    width: 300,
    marginBottom: 15,
    color: '#3c6e71',
    fontSize: 17,
    borderRadius: 7,
    padding: 10   
  },
  btnSubmit:{
    backgroundColor: '#3c6e71',
    width: 300,
    height: 45,
    alignItems: 'center',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center'


  },
  submitText:{
    color: '#FFF',
    fontSize: 18
  },
  btnRegister:{
    marginTop: 10,
    backgroundColor: '#3c6e71',
    width: 300,
    height: 45,
    alignItems: 'center',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center'
    

  },

  registerText:{
    color: '#FFF',
    fontSize: 18  
  },
  TextBemvindo:{
    color:'#FFF',
    fontSize: 50
  }
 });

