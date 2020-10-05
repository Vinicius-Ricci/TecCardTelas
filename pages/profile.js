import { useNavigation } from '@react-navigation/native';
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

const Profile =() => {
    const navigation = useNavigation();
    return (
      <View style={styles.MainContainer}>
        
       
        <TouchableOpacity
          onPress={() => navigation.navigate("qrcode")}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.TextStyle}> Gerar QR Code </Text>
        </TouchableOpacity>
      </View>
    );
  }

export default Profile;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#284b63'
    
  },
  TextInputStyle: {
    width: '100%',
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    textAlign: 'center',
  },
  button: {
    width: 200,
    paddingTop: 8,
    marginTop: 10,
    paddingBottom: 8,
    backgroundColor: '#778899',
    marginBottom: 20,
    borderRadius: 11,
    backgroundColor:'#3c6e71',
    
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});