//This is an example code to generate QR code//
import React, { Component } from 'react';
//import react in our code.
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
// import all basic components
import QRCode from 'react-native-qrcode-svg';
import { useSelector } from 'react-redux';
import { getUserRm } from '../store/data/action';

const QRcode =() => {
    const rm = useSelector(getUserRm);
    console.log("rm: ",rm);
    return (
      <View style={styles.MainContainer}>
        <QRCode
          //QR code value
          value={rm + ""}
          //size of QR Code
          size={500}
          //Color of the QR Code (Optional)
          color="black"
          //Background Color of the QR Code (Optional)
          backgroundColor="white"
          //Logo of in the center of QR Code (Optional)
        />
       
      </View>
    );
  }

export default QRCode;
const styles = StyleSheet.create({
  MainContainer: {  
    flex: 1,
    margin: 10,
    alignItems: 'center',
    paddingTop: 40,
    
  },
});