import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Stories() {
    return (
        <View style={styles.stories}>
          <View style={styles.story}>
            <Image style={styles.story1} source={require('../assets/imagens/ines.jpg')}/>
            <Text style={styles.textoStories}>Inês</Text>
          </View>
          <View style={styles.story}>
            <Image style={styles.story1} source={require('../assets/imagens/gretchen.jpg')}/>
            <Text style={styles.textoStories}>Gretchen</Text>
          </View>
          <View style={styles.story}>
            <Image style={styles.story1} source={require('../assets/imagens/tuluana.jpg')}/>
            <Text style={styles.textoStories}>Tula</Text>
          </View>
          <View style={styles.story}>
            <Image style={styles.story1} source={require('../assets/imagens/chuu.jpg')}/>
            <Text style={styles.textoStories}>Chuu</Text>
          </View>
          <View style={styles.story}>
            <Image style={styles.story1} source={require('../assets/imagens/ladygaga.jpg')}/>
            <Text style={styles.textoStories}>Gaga</Text>
          </View>
          <View style={styles.story}>
            <Image style={styles.story1} source={require('../assets/imagens/jojo.jpg')}/>
            <Text style={styles.textoStories}>Inês</Text>
          </View>
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