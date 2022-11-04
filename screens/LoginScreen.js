import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <View style={styles.loginContainer}>
            <TextInput style={styles.input} placeholder="Usuário..."/>
            <TextInput style={styles.input} placeholder="Senha..." secureTextEntry={true}/>
            <TouchableOpacity style={styles.sendButton}>
                <Text> Enviar</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:"center",
  },
  loginContainer:{
    backgroundColor:"yellow",
    justifyContent:"center",
    margin: 20,
    padding:40,
    borderColor:"gray",
    borderWidth:1,
    backgroundColor:"#003452",
    borderRadius:5,
  },
  input:{
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius:5,
    backgroundColor: "white",
    paddingLeft: 10,
  },
  sendButton:{
    padding: 10,
    width: 120,
    backgroundColor: "green",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:5,
    marginTop: 20,
    alignSelf:"center",
  },
});