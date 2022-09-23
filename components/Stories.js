import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image , FlatList} from 'react-native';

export default function Stories() {
  const [stories, setStories] = useState([]);

  useEffect(function(){
    async function getData(){
      const response = await fetch('https://mobile.ect.ufrn.br:3000/stories');
      const storiesServidor = await response.json();
      console.log(storiesServidor);
      setStories(storiesServidor)
    }
    getData();
  }, [])

  function renderItem({item}){
    return <View style={styles.story}>
    <Image style={styles.story1} source={{uri: item.imgPerfilUri}}/>
    <Text style={styles.textoStories}>{item.nomeUsuario}</Text>
  </View>
  }
      return (
        <View style={styles.stories}>
          <FlatList
          data={stories}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          />
        </View>
    );
  
}

const styles = StyleSheet.create({
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
  });