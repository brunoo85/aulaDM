import React, { useEffect, useState} from "react";
import {StatusBar} from 'expo-status-bar';
import { StyleSheet, View , Text, TouchableOpacity, FlatList, TextInput} from 'react-native';

export default function ChatScreen({route}){
    const {id} = route.params;

    const [chat,setChat] = useState([]);

    useEffect(()=> {
        async function getData(){
            const response = await fetch("https://mobile.ect.ufrn.br:3000/chatList/" +id);
            const chat = await response.json();
            setChat(chat);
        }
        getData();
    },[]);

    function renderItem({item}){
        return <View style={item.autor ? styles.mensagemAutor : styles.mensagem}>
            <Text>{item.texto}</Text>
        </View>
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <View style={styles.chatContainer}>
                <FlatList
                    data={chat.mensagens}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIntdicator={false}
                />

            </View>
            <View style={styles.imputContainer}>
                <TextInput style={styles.input}></TextInput>
                <TouchableOpacity style={styles.botao}><Text>Enviar</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    chatContainer:{
        flex:1,
        margin:5,
    },
    imputContainer:{
        flexDirection:"row",
        height:50,
        padding:5,
    },
    mensagem:{
        height:30,
        backgroundColor:'gray',
        borderRadius: 5,
        justifyContent:'center',
        padding: 5,
        alignSelf:'flex-start',
    },
    mensagemAutor:{
        height:30,
        backgroundColor:'purple',
        borderRadius: 5,
        justifyContent:'center',
        padding: 5,
        alignSelf:'flex-end',
    },
    input:{
        flex:1,
        height: 40,
        borderWidth : 1,
        borderColor: 'gray',
        borderRadius: 5,
    },
    botao:{
        width:60,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
});