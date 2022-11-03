import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View , Image, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';


export default function ChatListScreen({navigation}){
    const [chatlist, setChatlist] = useState([]);

    useEffect(()=> {
        async function getData(){
            const response = await fetch('https://mobile.ect.ufrn.br:3000/chatList');
            const chatlistServidor = await response.json();
            setChatlist(chatlistServidor);
            console.log(chatlistServidor);
        }
        getData();
    },[]);

    function renderItem({item}){
        return <TouchableOpacity style={styles.chat} onPress={() => navigation.navigate('ChatScreen',{id:item.id})}>
            <Image style={styles.image} source={{uri: item.imgPerfilUri}}/>
                <View style={styles.textBox}>
                    <Text style={styles.nome}>{item.nomeUsuario}</Text>
                    <Text>{item.ultimaMensagem}</Text>
                </View>
            </TouchableOpacity>;
    }


    return(
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <FlatList
                data={chatlist}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    chat:{
        height: 90,
        flexDirection :'row',
    },
    image:{
        height: 80,
        width: 80,
        margin: 5,
        borderRadius: 40,
    },
    textBox:{
        justifyContent: 'center',
    },
    nome:{
        fontWeight: 'bold',
    }



});