import React, { useEffect, useState} from "react";
import { View , Text} from 'react-native';

export default function ChatScreen({route}){
    const {id} = route.params;
    console.log(id);

    const [chat,setChat] = useState([]);

    useEffect(()=> {
        async function getData(){
            const response = await fetch("https://mobile.ect.ufrn.br:3000/chatList/" +id);
            const chat = await response.json();
            setChat(chat);
            console.log(chat);
        }
        getData();
    },[]);

    return (
        <View>
            <Text> deu certo</Text>
        </View>
    )
}