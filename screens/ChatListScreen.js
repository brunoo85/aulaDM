import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View , Image, StyleSheet, FlatList} from 'react-native';


export default function ChatListScreen({navigation}){
    const [chatlist, setChatlist] = useState([]);

    useEffect(()=> {
        async function getData(){
            const response = await fetch('https://mobile.ect.ufrn.br:3000/chatList');
            const chatList = await response.json();
            setChatlist(chatlist);
        }
        getData();
    },[]);

    function renderItem({item}){
        return <View style={styles.chat}>
            <Image></Image>
        </View>;
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
    );
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    chat:{
        height: 60,
        flexDirection :'row',
        backgroundColor:'blue',
    }



});