import { useNavigation,useEffect,useState } from '@react-navigation/native';
//This is an example code to generate QR code//
import React, { Component } from 'react';
//import react in our code.
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Platform,
  Image
} from 'react-native';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
// import all basic components
import QRCode from 'react-native-qrcode-svg';
import { useSelector } from 'react-redux';
import { getUserRm } from '../store/data/action';


export default Profile =() => {
  const [selectImg, setSelectedImg] = React.useState(null)

  let openImage = async () =>{
    let permission = await ImagePicker.requestCameraRollPermissionsAsync();


    if(permission.granted === false){
      return;
    }

    let picker = await ImagePicker.launchImageLibraryAsync()

    if(picker.cancelled === true ){
      return;
    }
    setSelectedImg({localUri:picker.uri})
    console.log(picker)
  }

    const navigation = useNavigation();
    return (
      <View style={styles.MainContainer}>
        {
          selectImg !== null ?
          (
            <Image 

            style={styles.image} source={{uri:(selectImg.localUri !== null) ? selectImg.localUri : 'https://cdn.pixabay.com/photo/2015/09/02/12/58/woman-918788_960_720.jpg'}}
            />
          ): <Text>  </Text>
        }
    <View stle={styles.container}>
      <TouchableOpacity 
      onPress={openImage}
      style={styles.Click}
      >
        <Text style={styles.textButton}> Adicione/Altere sua foto de perfil </Text>
      </TouchableOpacity>
    </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("qrcode")}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.TextStyle}> Gerar QR Code </Text>
        </TouchableOpacity>
      </View>
    );
  }
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
  Click:{
    borderRadius: 10,
    backgroundColor:'#3c6e71',
    margin: 10,
    width: 315,
    height: 40


  },
  textButton:{

    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
    margin: 5
  },
  image:{
    width: 350,
    height: 250,
    resizeMode:'contain',
    borderRadius: 300,
    justifyContent: 'center'
  },

});