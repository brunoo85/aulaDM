import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { FontAwesome5} from '@expo/vector-icons';

export default function Feed() {
  const feed = [
    {
      id: 1,
      nome: 'Chuu do Loona',
      imgPerfil: require('../assets/imagens/chuu.jpg'),
      img: require('../assets/imagens/propostasChuu.jpeg'),
      aspectRatio: 1.777,
    },
    {
      id: 2,
      nome: 'Laladydy Gagagaga',
      imgPerfil: require('../assets/imagens/ladygaga.jpg'),
      img: require('../assets/imagens/vaziaVulgar.jpg'),
      aspectRatio: 1.777,
    },
    {
      id: 3,
      nome: 'Pantera Selvagem',
      imgPerfil: require('../assets/imagens/ines.jpg'),
      img: require('../assets/imagens/inesMeme.jpg'),
      aspectRatio: 1.666,
    },
    {
      id: 4,
      nome: 'Viadinho das animações',
      imgPerfil: require('../assets/imagens/bobbob.jpg'),
      img: require('../assets/imagens/astro.jpg'),
      aspectRatio: 1.589,
    },
    {
      id: 5,
      nome: 'Que tiro foi esse',
      imgPerfil: require('../assets/imagens/jojo.jpg'),
      img: require('../assets/imagens/raven.jpg'),
      aspectRatio: 1.5,
    },
    {
      id: 6,
      nome: 'Senhorinha Drag',
      imgPerfil: require('../assets/imagens/lorelay.jpg'),
      img: require('../assets/imagens/encontro.jpg'),
      aspectRatio: 1,
    },
  ];

  function renderItem({ item }){
    return <View style={styles.post}>
      <View style={styles.postHeader}>
        <View style={styles.postHeaderesquerda}>
        <Image style={styles.postHeaderimg}source={item.imgPerfil}/>
        <Text style={styles.nomeDoUsuario}>{item.nome}</Text>
        </View>
        <FontAwesome5 name='ellipsis-h' size={16} color='black'/>
      </View>
      <Image style={styles.postimg} aspectRatio={item.aspectRatio} source={item.img}/>
      <View style={styles.footer}>
        <FontAwesome5 style={styles.footerIcon}name='heart' size={36} color='black'/>
        <FontAwesome5 style={styles.footerIcon}name='comment' size={36} color='black'/>
      </View>
    </View>
  }

    return (
        <View style={styles.feed}>
        <FlatList
          data={feed}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />

      </View>  
    );}

    const styles = StyleSheet.create({
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
          fontWeight: 'bold',
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