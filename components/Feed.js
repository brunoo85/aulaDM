import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { FontAwesome5} from '@expo/vector-icons';

export default function Feed() {
  const [feed, setFeed] = useState([]);

  useEffect(function(){
    async function getData(){
      const response = await fetch('https://mobile.ect.ufrn.br:3000/feed');
      const feedServidor = await response.json();
       setFeed(feedServidor);
    }
    getData();
  }, []);

  function renderItem({ item }){
    return <View style={styles.post}>
      <View style={styles.postHeader}>
        <View style={styles.postHeaderesquerda}>
        <Image style={styles.postHeaderimg}source={{ uri: item.imgPerfilUri }}/>
        <Text style={styles.nomeDoUsuario}>{item.nomeUsuario}</Text>
        </View>
        <FontAwesome5 name='ellipsis-h' size={16} color='black'/>
      </View>
      <Image style={styles.postimg} aspectRatio={item.aspectRatio} source={{uri: item.imgPostUri}}/>
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
          backgroundColor:'#FFFFFF',
      
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
          backgroundColor: '#FFFFFF',
          flexDirection: 'row',
          alignItems: 'center',
          
        },
        footerIcon:{
          margin: 5,
        }
      
      });