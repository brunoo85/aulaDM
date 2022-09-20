import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome5} from '@expo/vector-icons';

export default function Feed() {
    return (
        <View style={styles.feed}>
        <View style={styles.post}>
          <View style={styles.postHeader}>
            <View style={styles.postHeaderesquerda}>
            <Image style={styles.postHeaderimg}source={require('../assets/imagens/chuu.jpg')}/>
            <Text style={styles.nomeDoUsuario}>Chuu do Loona</Text>
            </View>
            <FontAwesome5 name='ellipsis-h' size={16} color='black'/>
          </View>
          <Image style={styles.postimg} aspectRatio={1.777} source={require('../assets/imagens/propostasChuu.jpeg')}/>
          <View style={styles.footer}>
            <FontAwesome5 style={styles.footerIcon}name='heart' size={36} color='black'/>
            <FontAwesome5 style={styles.footerIcon}name='comment' size={36} color='black'/>
          </View>
        </View>

        <View style={styles.post}>
          <View style={styles.postHeader}>
            <View style={styles.postHeaderesquerda}>
            <Image style={styles.postHeaderimg}source={require('../assets/imagens/ladygaga.jpg')}/>
            <Text style={styles.nomeDoUsuario}>Laladydy Gagagaga</Text>
            </View>
            <FontAwesome5 name='ellipsis-h' size={16} color='black'/>
          </View>
          <Image style={styles.postimg} aspectRatio={1.777} source={require('../assets/imagens/vaziaVulgar.jpg')}/>
          <View style={styles.footer}>
            <FontAwesome5 style={styles.footerIcon}name='heart' size={36} color='black'/>
            <FontAwesome5 style={styles.footerIcon}name='comment' size={36} color='black'/>
          </View>
        </View>

        <View style={styles.post}>
          <View style={styles.postHeader}>
            <View style={styles.postHeaderesquerda}>
            <Image style={styles.postHeaderimg}source={require('../assets/imagens/ines.jpg')}/>
            <Text style={styles.nomeDoUsuario}>Pantera Selvagem</Text>
            </View>
            <FontAwesome5 name='ellipsis-h' size={16} color='black'/>
          </View>
          <Image style={styles.postimg} aspectRatio={1.777} source={require('../assets/imagens/inesMeme.jpg')}/>
          <View style={styles.footer}>
            <FontAwesome5 style={styles.footerIcon}name='heart' size={36} color='black'/>
            <FontAwesome5 style={styles.footerIcon}name='comment' size={36} color='black'/>
          </View>
        </View>

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