//This is an example code to generate QR code//
import React, { } from 'react';
//import react in our code.
import {
  StyleSheet,
  View,
} from 'react-native';
// import all basic components
import { QRCode } from 'react-native-custom-qr-codes-expo';
import { useSelector } from 'react-redux';
import { getUserRm } from '../store/data/action';

const QRcode =() => {
    const rm = useSelector(getUserRm).toString();
    console.log("rm: ",rm);
    return (
      <View style={styles.MainContainer}>
        <View style={styles.qrcodeContainer}>

        <QRCode
          content={rm}
          size={300}
          ecl ="M"
          backgroundColor ='#FFF'
        />

        </View>
       
      </View>
    );
  }

export default QRcode;
const styles = StyleSheet.create({
  MainContainer: {  
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#284b63'
    
  },
  qrcodeContainer:{
    backgroundColor: '#FFF',
    padding: 10
  }
});