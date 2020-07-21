import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const List = ['Joao', 'Cleiton', 'Geanderson', 'Caio', 'Walter', 'Andressa', 'Carol', 'Amanda', 'Gustavo']



export default function App({ navigation }) {
    console.disableYellowBox = true
    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <ScrollView >
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={List}
                    renderItem={({ item }) => StorieCard(item)}
                    keyExtractor={(item, index) => index.toString()}
                />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={List}
                    renderItem={({ item }) => CardFeed(item, navigation)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </ScrollView>


        </View>
    );
}

function StorieCard(item) {
    return (
        <TouchableOpacity onPress={() => console.log(item)}>
            <View style={{ marginTop: 10, marginLeft: 13, marginBottom: 5 }}>
                <Image style={{ width: 70, height: 70, borderRadius: 40, borderColor: 'pink', borderWidth: 4 }} source={{ uri: 'https://avatars1.githubusercontent.com/u/48225849?s=460&u=3f8e9a830d52615b9b00e517f5f82bb8530d4a7b&v=4', }} />
                <Text style={{ textAlign: 'center', marginTop: 2 }} >{item}</Text>
            </View>
        </TouchableOpacity>

    )
}
function CardFeed(item, navigation) {
    return (
        <View >
            <View style={{ flexDirection: "row", marginBottom: 10, marginTop: 10 }}>
                <Image style={{ marginRight: 10, marginLeft: 10, width: 40, height: 40, borderRadius: 40, borderColor: 'pink', borderWidth: 4 }} source={{ uri: 'https://avatars1.githubusercontent.com/u/48225849?s=460&u=3f8e9a830d52615b9b00e517f5f82bb8530d4a7b&v=4' }} />
                <Text style={{ textAlignVertical: "center", fontSize: 15 }}>{item}</Text>
                <SimpleLineIcons name="options-vertical" size={20} color="black" style={{ position: "absolute", right: 10, marginTop: 10 }} />
            </View>
            <Image style={{ width: "100%", height: 400 }} source={{ uri: 'https://avatars1.githubusercontent.com/u/48225849?s=460&u=3f8e9a830d52615b9b00e517f5f82bb8530d4a7b&v=4', }} />
            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                <AntDesign name="hearto" size={30} style={{ marginLeft: 10 }} color="black" />
                <Feather name="message-circle" style={{ marginLeft: 15, transform: [{ rotateZ: "270deg" }] }} size={30} color="black" />
                <TouchableOpacity onPress={() => navigation.navigate("Chat_List")}>
                    <FontAwesome name="send-o" size={30} style={{ marginLeft: 15 }} color="black" />
                </TouchableOpacity>
                <FontAwesome name="life-saver" size={30} color="black" style={{ position: "absolute", right: 10, marginTop: 10 }} />
            </View>
            <View style={{ flexDirection: "row", paddingTop: 10 }}>
                <Image style={{ position: "absolute", borderColor: 'white', borderWidth: 2, left: 30, top: 10, width: 25, height: 25, borderRadius: 40 }} source={{ uri: 'https://avatars1.githubusercontent.com/u/48225849?s=460&u=3f8e9a830d52615b9b00e517f5f82bb8530d4a7b&v=4' }} />
                <Image style={{ position: "absolute", borderColor: 'white', borderWidth: 2, left: 20, top: 10, width: 25, height: 25, borderRadius: 40 }} source={{ uri: 'https://avatars1.githubusercontent.com/u/48225849?s=460&u=3f8e9a830d52615b9b00e517f5f82bb8530d4a7b&v=4' }} />
                <Image style={{ marginRight: 10, borderColor: 'white', borderWidth: 2, marginLeft: 10, width: 25, height: 25, borderRadius: 40 }} source={{ uri: 'https://avatars1.githubusercontent.com/u/48225849?s=460&u=3f8e9a830d52615b9b00e517f5f82bb8530d4a7b&v=4' }} />
                <View style={{ paddingLeft: 12, flexDirection: 'row', alignItems: "center" }} >
                    <Text style={{ marginRight: 3 }}> Curtido por</Text>
                    <Text style={{ fontWeight: "bold", marginRight: 3 }}>geanderson.gl</Text>
                    <Text style={{ marginRight: 3 }}>e</Text>
                    <Text style={{ fontWeight: "bold" }}>outras pessoas</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 10, }}>
                <Text style={{ fontWeight: "bold", marginRight: 3 }}> geanderson.gl</Text>
                <Text >Curti a foto ficou bacana</Text>
            </View>
            <View>
                <Text style={{ fontWeight: "bold", color: 'grey', marginLeft: 10, marginTop: 10 }}>Ver toda as mensagens</Text>
            </View>
            <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 10 }}>
                <Text style={{ fontWeight: "bold", marginRight: 3 }}> geanderson.gl</Text>
                <Text>Curti a foto ficou bacana </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 10 }}>
                <Image style={{ marginRight: 10, marginLeft: 10, width: 30, height: 30, borderRadius: 40 }} source={{ uri: 'https://avatars1.githubusercontent.com/u/48225849?s=460&u=3f8e9a830d52615b9b00e517f5f82bb8530d4a7b&v=4' }} />
                <Text style={{ marginLeft: 10, textAlignVertical: "center", color: "grey" }}>Adicione um comentario</Text>
            </View>
        </View>
    )
}


/*
  <View style={{ height: 50, elevation: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
                <Entypo name="home" size={35} color="black" />
                <Ionicons name="ios-search" size={35} color={'black'} />
                <Ionicons name="ios-add" size={35} color="black" />
                <AntDesign name="hearto" size={35} color={'black'} />
                <Image style={{ width: 30, height: 30, borderRadius: 20 }} source={{ uri: 'https://avatars1.githubusercontent.com/u/48225849?s=460&u=3f8e9a830d52615b9b00e517f5f82bb8530d4a7b&v=4', }} />
            </View>

*/


