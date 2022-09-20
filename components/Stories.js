import React from 'react';
import { StyleSheet, Text, View, Image , FlatList} from 'react-native';

export default function Stories() {
  const stories = [
    {
      id: 1,
      nome: 'Ines',
      src: require('../assets/imagens/ines.jpg'),
    },
    {
      id: 2,
      nome: 'Gretchen',
      src: require('../assets/imagens/gretchen.jpg'),
    },
    {
      id: 3,
      nome: 'Tula',
      src: require('../assets/imagens/tuluana.jpg'),
    },
    {
      id: 4,
      nome: 'Chuu',
      src: require('../assets/imagens/chuu.jpg'),
    },
    {
      id: 5,
      nome: 'Gaga',
      src: require('../assets/imagens/ladygaga.jpg'),
    },
    {
      id: 6,
      nome: 'Jojo',
      src: require('../assets/imagens/jojo.jpg'),
    },
    {
      id: 7,
      nome: 'Lorelay',
      src: require('../assets/imagens/lorelay.jpg'),
    },
    {
      id: 8,
      nome: 'Esponja',
      src: require('../assets/imagens/bobbob.jpg'),
    },
    {
      id: 9,
      nome: 'Cachorro',
      src: require('../assets/imagens/dog.jpg'),
    },
  ];

  function renderItem({item}){
    return <View style={styles.story}>
    <Image style={styles.story1} source={item.src}/>
    <Text style={styles.textoStories}>{item.nome}</Text>
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