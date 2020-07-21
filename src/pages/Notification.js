import React from 'react';
import { View, Text, TouchableOpacity, Image, SectionList } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Compromissos = [
    {
        "icon": "check-square", 'title': "Hoje", "data": [

            { "nick": "@geanderson", 'mensao': "mencionou \n voce em um comentario", 'descricao': 'Ambiente de teste', "comentario": "A entrega era para terca 8 de julho", "hr": "8 de Jul", "bloco": "dev-raiz: ", "status": "A fazer", 'id': "kjsdasjhsjsad" }]
    },
    { "icon": "heart", 'title': "Ontem", "data": [{ "nick": "@geanderson", 'mensao': "mencionou voce em um comentario", 'descricao': 'Adicionar campos no cadastro da empresa', "comentario": "A entrega era para terca 8 de julho de 2020 as 13:30", "hr": "8 de Jul", "bloco": "Desenvolvimento: ", "status": "A fazer", 'id': "kjsdasjhsjsad" }, { "nick": "@geanderson", 'mensao': "mencionou \n voce em um comentario", 'descricao': 'Adicionar campos no cadastro da empresa', "comentario": "A entrega era para terca 8 de julho", "hr": "8 de Jul", "bloco": "Desenvolvimento: ", "status": "A fazer", 'id': "kjsdasjhsjsad" }] },
    { "icon": "heart", 'title': "Esta semana", "data": [{ "nick": "@geanderson", 'mensao': "mencionou \n voce em um comentario", 'descricao': 'Adicionar campos no cadastro da empresa', "comentario": "A entrega era para terca 8 de julho de 2020 as 13:30", "hr": "8 de Jul", "bloco": "Desenvolvimento: ", "status": "A fazer", 'id': "kjsdasjhsjsad" }, { "nick": "@geanderson", 'mensao': "mencionou\n voce em um comentario", 'descricao': 'Adicionar campos no cadastro da empresa', "comentario": "A entrega era para terca 8 de julho", "hr": "8 de Jul", "bloco": "Desenvolvimento: ", "status": "A fazer", 'id': "kjsdasjhsjsad" }] },
    { "icon": "heart", 'title': "Este mês", "data": [{ "nick": "@geanderson", 'mensao': "mencionou voce em um comentario", 'descricao': 'Adicionar campos no cadastro da empresa', "comentario": "A entrega era para terca 8 de julho de 2020 as 13:30", "hr": "8 de Jul", "bloco": "Desenvolvimento: ", "status": "A fazer", 'id': "kjsdasjhsjsad" }, { "nick": "@geanderson", 'mensao': "mencionou \n voce em um comentario", 'descricao': 'Adicionar campos no cadastro da empresa', "comentario": "A entrega era para terca 8 de julho", "hr": "8 de Jul", "bloco": "Desenvolvimento: ", "status": "A fazer", 'id': "kjsdasjhsjsad" }] },
]

export default function Notifications({ navigation }) {
    return (
        <View style={{ backgroundColor: "white", flex: 1 }} >
            <SectionList
                sections={Compromissos}
                renderItem={({ item }) => Card_List(item)
                }
                renderSectionHeader={({ section }) => Header_notification(section)
                }
                keyExtractor={(item, index) => index}
            />
        </View>
    )
}


function Header_notification(section) {
    return (
        <Text style={{ marginLeft: 10, marginTop: 10, marginBottom: 20, fontSize: 18, fontWeight: "700" }}>{section.title}</Text>
    )
}

function Card_List(item) {
    return (
        <View style={{ flexDirection: "row", justifyContent: 'space-around', marginBottom: 10 }}>
            <Image style={{ width: 50, height: 50, borderRadius: 40, borderColor: 'pink', borderWidth: 4, marginLeft: 10, marginRight: 10 }} source={{ uri: 'https://avatars1.githubusercontent.com/u/48225849?s=460&u=3f8e9a830d52615b9b00e517f5f82bb8530d4a7b&v=4', }} />
            <View style={{ flexDirection: "row", flex: 1 }}>
                <Text style={{ fontSize: 15 }}> <Text style={{ fontWeight: '700' }}>{item.nick} </Text>{item.mensao}: {item.descricao}</Text>
            </View>
            <Image style={{ width: 50, height: 50, marginLeft: 10, marginRight: 10 }} source={{ uri: 'https://avatars1.githubusercontent.com/u/48225849?s=460&u=3f8e9a830d52615b9b00e517f5f82bb8530d4a7b&v=4', }} />
        </View>
    )
}