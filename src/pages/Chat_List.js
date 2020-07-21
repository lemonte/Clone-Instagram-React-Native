import React from 'react';
import { Image, StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const List = ['Joao', 'Cleiton', 'Geanderson', 'Caio', 'Walter', 'Andressa', 'Carol', 'Amanda', 'Gustavo']


export default function Chat({ navigation }) {
    console.disableYellowBox = true
    return (
        <ScrollView style={{ paddingLeft: 20, paddingRight: 20, backgroundColor: "white" }}>
            <View style={{ borderColor: "grey", height: 35, borderWidth: 1, borderRadius: 5, marginTop: 20, flexDirection: 'row' }}>
                <EvilIcons name="search" size={30} style={{ marginTop: 3 }} color="grey" />
                <Text style={{ color: 'grey', textAlignVertical: "center", fontSize: 15, paddingLeft: 5 }}>Pesquisar</Text>
            </View>
            <Text style={{ fontSize: 18, fontWeight: "bold", paddingTop: 20, paddingBottom: 20 }}>Mensagens</Text>
            <FlatList
                style={{ marginBottom: 20 }}
                data={List}
                renderItem={({ item }) => Talk_card(item, navigation)}
                keyExtractor={(item, index) => index.toString()}
            />
        </ScrollView>
    )
}



function Talk_card(item, navigation) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
            <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 5, justifyContent: "space-between" }}>
                <Image style={{ width: 70, height: 70, borderRadius: 40, borderColor: 'pink', borderWidth: 4 }} source={{ uri: 'https://avatars1.githubusercontent.com/u/48225849?s=460&u=3f8e9a830d52615b9b00e517f5f82bb8530d4a7b&v=4', }} />
                <View style={{ marginTop: 10, flex: 1 }}>
                    <Text style={{ marginLeft: 20, marginTop: 2, fontWeight: "bold" }} >{item}</Text>
                    <Text style={{ marginLeft: 20, marginTop: 2, color: "grey" }} >Mensagem escrita por mim e tudo</Text>
                </View>
                <Feather name="camera" size={30} color="grey" style={{ marginLeft: 10, marginTop: 20 }} />
            </View>
        </TouchableOpacity>

    )
}