import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import CadastroUsuario from "./pages/cadastroUsuario";
import Login from "./pages/login";
import ADM from './pages/adm';
import PERFIL from './pages/profile';
import GUARD from './pages/guard';
import { Provider } from 'react-redux';
import { store } from './store';
import QRCode from './pages/QR';


const Stack = createStackNavigator();


export default function App() {

  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator initialRouteName = {"login"}>
      <Stack.Screen name="cadastroUsuario" options={{headerShown: false}} component={CadastroUsuario}/>
      <Stack.Screen name="login" options={{headerShown: false}} component={Login}/>
      <Stack.Screen name="adm" options={{title: "Administração"}} component={ADM}/>
      <Stack.Screen name="perfil" options={{title: "Perfil do Aluno"}} component={PERFIL}/>
      <Stack.Screen name="guarda" options={{title: "Portaria"}} component={GUARD}/>
      <Stack.Screen name="qrcode" options={{title: "QR Code"}} component={QRCode}/>
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  );
}
 