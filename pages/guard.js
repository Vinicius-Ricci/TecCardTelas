import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button,TextInput } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from "axios";
import { api } from '../util/env';
import { event } from 'react-native-reanimated';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [query, setQuery] = useState("");

  const validate = (RM) => {
    axios.post( api("acesso/validate"), { 
      RM: RM
      
    }).then((response) => {
      alert (` Resultado da validação: ${response.data.descricao}`);
    })
    .catch((error) => {
      const { response } = error;
      if (response !== undefined){
        alert (response.data.message);
      }
      else alert (`Nao foi possivel validar`);
   })
  }; 

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    validate(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  


  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#284b63',
        
        
      }}>
        <View style={styles.containerCamera}>
      <BarCodeScanner style={styles.camera}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      </View>
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}

      <View style={styles.textContainer}>

      <Text style={styles.textAviso}> Caso o Scanner não funcionar, consulte manualmente abaixo: </Text>

      </View>
      <View style={styles.containerInput}>

      <TextInput style={styles.rmInput} 

      keyboardType = "number-pad" 
      placeholder='Digite um Rm'
      value={query}
      onChange={text => setQuery(text)}
      
      /> 

    

      <TouchableOpacity style={styles.botao} onPress={() => validate(parseInt(query))}> 

        <Text style={styles.textBotao}> Consultar </Text>

      </TouchableOpacity>
      

      </View>

    </View>

  );

}
const styles = StyleSheet.create({

  containerCamera:{
    flex: 1,
    marginTop: 20,
  },

  containerInput:{
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 15
  },

  rmInput:{
    width: 110,
    height: 40,
    borderRadius: 17,
    backgroundColor:'#2b2d42',
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    margin: 10,
    padding: 5
  },

  TextInput:{
    color:'#FFF',
    fontStyle:'italic',
  },

  botao:{
    width: 110,
    height: 40,
    borderRadius: 17,
    backgroundColor:'#2b2d42',
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    margin: 10 
  },

  textBotao:{
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#FFF',
    padding: 2,
  },

  textAviso:{
    margin: 10,
    fontStyle: 'italic',
    color: '#FFF',
    textAlign: 'center',
    justifyContent:'center'
  },

  camera:{
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },

  textContainer:{
    marginTop: 20,
    justifyContent: 'flex-end', 
  }
})