import React,{useState,useEffect} from 'react';
import { View, KeyboardAvoidingView,Image,TextInput, TouchableOpacity,Text,StyleSheet, Animated } from 'react-native';
import axios from "axios";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import CadastroUsuario from "./pages/cadastroUsuario";
import Login from "./pages/login";
import ADM from './pages/adm';
import PERFIL from './pages/profile';
import GUARD from './pages/guard';

const Stack = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName = {"login"}>
      <Stack.Screen name="cadastroUsuario" options={{headerShown: false}} component={CadastroUsuario}/>
      <Stack.Screen name="login" options={{headerShown: false}} component={Login}/>
      <Stack.Screen name="adm" options={{title: "Administração"}} component={ADM}/>
      <Stack.Screen name="perfil" options={{title: "Perfil do Aluno"}} component={PERFIL}/>
      <Stack.Screen name="guarda" options={{title: "Portaria"}} component={GUARD}/>
    </Stack.Navigator>
  </NavigationContainer>
    
  );
}
 