import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome5} from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image style={styles.cringe} source={require('./assets/imagens/brunoo.png')}/>
        <FontAwesome5 style={styles.beijo}name="kiss-wink-heart" size={25} color="black"/>
        </View>
        <View style={styles.stories}>
          <View style={styles.story}>

          </View>
          <View style={styles.story}>

          </View>
          <View style={styles.story}>
            
            </View>
            <View style={styles.story}>
            
            </View>
            <View style={styles.story}>
            
            </View>
        </View>
        <View style={styles.feed}>
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <View style={styles.postHeaderesquerda}>
              <Image style={styles.postHeaderimg}source={require('./assets/imagens/chuu.jpg')}/>
              <Text style={styles.nomeDoUsuario}>Chuu do Loona</Text>
              </View>
              <FontAwesome5 name='ellipsis-h' size={16} color='black'/>
            </View>
            <Image style={styles.postimg} aspectRatio={1.777} source={require('./assets/imagens/propostasChuu.jpeg')}/>
          </View>
          <View style={styles.footer}>

          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dc136c',
    marginTop: Constants.statusBarHeight,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    height: 50,
    backgroundColor: '#3C91E6',
    alignItens: 'center',
    justifyContent: 'space-between',
  },
  cringe:{
    height: '100%',
    width:100,
  
  },
  beijo:{
    alignSelf: 'flex-end',
  },
  stories:{
    flexDirection: 'row',
    height: 90,
    backgroundColor:'#B0E298',
  },
  story: {
    height:90,
    width:90,
    backgroundColor: '#3D3B8E',
  },
  feed: {
    flex: 1,
  },
  post: {
    backgroundColor:'#B0E298',

  },
  postHeader: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
  },
  postHeaderesquerda:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  postHeaderimg:{
    height:50,
    width: 50,
    borderRadius: 25,
    marginRight: 5,
  },
  nomeDoUsuario: {
    color: 'black',
    fontSize: 15,
  },
  postimg:{
    width:'100%',
    height: undefined,
  },
  footer:{
    height:60,
    backgroundColor: '#B0E298',
    flexDirection: 'row',
  },

});
