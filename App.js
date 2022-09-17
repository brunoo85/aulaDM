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
            <Image style={styles.story1} source={require('./assets/imagens/ines.jpg')}/>
            <Text style={styles.textoStories}>Inês</Text>
          </View>
          <View style={styles.story}>
            <Image style={styles.story1} source={require('./assets/imagens/gretchen.jpg')}/>
            <Text style={styles.textoStories}>Gretchen</Text>
          </View>
          <View style={styles.story}>
            <Image style={styles.story1} source={require('./assets/imagens/tuluana.jpg')}/>
            <Text style={styles.textoStories}>Tula</Text>
          </View>
          <View style={styles.story}>
            <Image style={styles.story1} source={require('./assets/imagens/chuu.jpg')}/>
            <Text style={styles.textoStories}>Chuu</Text>
          </View>
          <View style={styles.story}>
            <Image style={styles.story1} source={require('./assets/imagens/ladygaga.jpg')}/>
            <Text style={styles.textoStories}>Gaga</Text>
          </View>
          <View style={styles.story}>
            <Image style={styles.story1} source={require('./assets/imagens/jesus1.jpg')}/>
            <Text style={styles.textoStories}>Inês</Text>
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
            <View style={styles.footer}>
              <FontAwesome5 style={styles.footerIcon}name='heart' size={36} color='black'/>
              <FontAwesome5 style={styles.footerIcon}name='comment' size={36} color='black'/>
            </View>
          </View>

          <View style={styles.post}>
            <View style={styles.postHeader}>
              <View style={styles.postHeaderesquerda}>
              <Image style={styles.postHeaderimg}source={require('./assets/imagens/ladygaga.jpg')}/>
              <Text style={styles.nomeDoUsuario}>Laladydy Gagagaga</Text>
              </View>
              <FontAwesome5 name='ellipsis-h' size={16} color='black'/>
            </View>
            <Image style={styles.postimg} aspectRatio={1.777} source={require('./assets/imagens/vaziaVulgar.jpg')}/>
            <View style={styles.footer}>
              <FontAwesome5 style={styles.footerIcon}name='heart' size={36} color='black'/>
              <FontAwesome5 style={styles.footerIcon}name='comment' size={36} color='black'/>
            </View>
          </View>

          <View style={styles.post}>
            <View style={styles.postHeader}>
              <View style={styles.postHeaderesquerda}>
              <Image style={styles.postHeaderimg}source={require('./assets/imagens/ines.jpg')}/>
              <Text style={styles.nomeDoUsuario}>Pantera Selvagem</Text>
              </View>
              <FontAwesome5 name='ellipsis-h' size={16} color='black'/>
            </View>
            <Image style={styles.postimg} aspectRatio={1.777} source={require('./assets/imagens/inesMeme.jpg')}/>
            <View style={styles.footer}>
              <FontAwesome5 style={styles.footerIcon}name='heart' size={36} color='black'/>
              <FontAwesome5 style={styles.footerIcon}name='comment' size={36} color='black'/>
            </View>
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
    backgroundColor: '#B0E298',
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
    backgroundColor: '#B0E298',
    alignItems: 'center',
  },
  story1:{
    height:70,
    width:70,
    //backgroundColor: '#B0E294',
    borderRadius: 35,
},
textoStories:{
  fontSize:15,
  color: "black",
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
    height:45,
    backgroundColor: '#B0E298',
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  footerIcon:{
    margin: 5,
  }

});
