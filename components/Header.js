import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { FontAwesome5} from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={styles.header}>
            <Image style={styles.cringe} source={require('../assets/imagens/brunoo.png')}/>
            <FontAwesome5 style={styles.beijo}name="kiss-wink-heart" size={25} color="black"/>
        </View>
    );
}

const styles = StyleSheet.create({
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
  });