import React from 'react';
import { View, Text, TouchableOpacity, Image, SectionList } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

const markings = [
    {
        "icon": "check-square", 'title': "Today", "data": [
            { "nick": "@geanderson", 'message': "mentioned you in a comment", 'description': 'testing', "comment": "A entrega era para terca 8 de julho", "hr": "8 de Jul", "block": "dev-raiz: ", "status": "A fazer", 'id': "kjsdasjhsjsad" }]
    },
    {
        "icon": "heart", 'title': "Yesterday", "data": [
            { "nick": "@geanderson", 'message': "mentioned you in a comment", 'description': 'Add fields in the company record', "comment": "Delivery was on Tuesday, July 8, 2020 at 1:30 PM", "hr": "8 de Jul", "block": "Desenvolvimento: ", "status": "A fazer", 'id': "kjsdasjhsjsad" },
            { "nick": "@geanderson", 'message': "mentioned you in a comment", 'description': 'Add fields in the company record', "comment": "Delivery was on Tuesday, July 8, 2020 at 1:30 PM", "hr": "8 de Jul", "block": "Desenvolvimento: ", "status": "A fazer", 'id': "kjsdasjhsjsad" }]
    },
    {
        "icon": "heart", 'title': "This week", "data": [
            { "nick": "@geanderson", 'message': "mentioned you in a comment", 'description': 'Add fields in the company record', "comment": "Delivery was on Tuesday, July 8, 2020 at 1:30 PM", "hr": "8 de Jul", "block": "Desenvolvimento: ", "status": "A fazer", 'id': "kjsdasjhsjsad" },
            { "nick": "@geanderson", 'message': "mentioned you in a comment", 'description': 'Add fields in the company record', "comment": "Delivery was on Tuesday, July 8, 2020 at 1:30 PM", "hr": "8 de Jul", "block": "Desenvolvimento: ", "status": "A fazer", 'id': "kjsdasjhsjsad" }]
    },
    {
        "icon": "heart", 'title': "This month", "data": [
            { "nick": "@geanderson", 'message': "mentioned you in a comment", 'description': 'Add fields in the company record', "comment": "Delivery was on Tuesday, July 8, 2020 at 1:30 PM", "hr": "8 de Jul", "block": "Desenvolvimento: ", "status": "A fazer", 'id': "kjsdasjhsjsad" },
            { "nick": "@geanderson", 'message': "mentioned you in a comment", 'description': 'Add fields in the company record', "comment": "Delivery was on Tuesday, July 8, 2020 at 1:30 PM", "hr": "8 de Jul", "block": "Desenvolvimento: ", "status": "A fazer", 'id': "kjsdasjhsjsad" }]
    },
]

export default function Notifications({ navigation }) {
    return (
        <View style={{ backgroundColor: "white", flex: 1 }} >
            <SectionList
                sections={markings}
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
                <Text style={{ fontSize: 15 }}> <Text style={{ fontWeight: '700' }}>{item.nick} </Text>{item.message}: {item.description}</Text>
            </View>
            <Image style={{ width: 50, height: 50, marginLeft: 10, marginRight: 10 }} source={{ uri: 'https://avatars1.githubusercontent.com/u/48225849?s=460&u=3f8e9a830d52615b9b00e517f5f82bb8530d4a7b&v=4', }} />
        </View>
    )
}