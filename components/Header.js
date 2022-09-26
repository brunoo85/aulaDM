import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { FontAwesome5} from '@expo/vector-icons';


export default function Header({navigation}) {
    return (
        <View style={styles.header}>
            <Image style={styles.cringe} source={require('../assets/imagens/brunoo.png')}/>
            <FontAwesome5 style={styles.beijo}name="kiss-wink-heart" size={25} color="black" onPress={()=>navigation.navigate('ChatListScreen')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      padding: 10,
      height: 50,
      backgroundColor: '#FFFFFF',
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