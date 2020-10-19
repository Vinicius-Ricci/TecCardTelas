import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button,TextInput } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`O seu RM é ${data}`);
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


      <Text style={styles.textAviso}> Caso o Scanner não funcionar, consulte manualmente abaixo: </Text>
      <View style={styles.containerInput}>

      <TextInput style={styles.rmInput} 

      keyboardType = "number-pad" 
      placeholder='Digite um Rm'
      
      > 

      
      </TextInput>

      <TouchableOpacity style={styles.botao}> 

        <Text style={styles.textBotao}> Consultar </Text>

      </TouchableOpacity>
      

      </View>

    </View>

  );

}
const styles = StyleSheet.create({

  containerCamera:{
    flex: 2,
    
    
  },

  containerInput:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
    

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
    fontWeight: 'bold'
    
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
    fontStyle:'italic'
  },
  textAviso:{
    margin: 10,
    fontStyle: 'italic',
    color: '#FFF',
    textAlign: 'center',
    justifyContent:'center'
  }
})