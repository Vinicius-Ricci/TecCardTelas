import React,{useState,useEffect} from 'react';
import { View, KeyboardAvoidingView,Image,TextInput, TouchableOpacity,Text,StyleSheet, Animated } from 'react-native';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import { api } from '../util/env';


export default function Login() {

  

    const [ offset ] = useState(new Animated.ValueXY({x: 0, y: 80}));
    const [ userName,setUserName] = useState ("");
    const [ userPassword,setUserPassword] = useState ("");
    const navigation =  useNavigation();

    const signUp = () => navigation.navigate("cadastroUsuario");
    

    

    const signIn = () => {
      axios.post( api("aluno/login"), { 
        email:userName,
        senha:userPassword
      }).then((response) => alert (` Seja Bem vindo, ${response.data.nome}`))
      .catch((error) => {
        const { response } = error;
        if (response !== undefined){
          alert (response.data.message);
        }
        else alert (`Nao foi possivel logar`);
     })
    }; 
    useEffect(() => {
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,

      }).start();
    }, []);
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image 
          source={require('../assets/logo-etec.png')}
        />
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
 const styles = StyleSheet.create({

  background:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#060613'

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
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10   
  },
  btnSubmit:{
    backgroundColor: '#778899',
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
    backgroundColor: '#778899',
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
  }
 });

