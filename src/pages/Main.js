import React from 'react';
import { Image, StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';


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
                <Image style={styles.image_stories} source={{ uri: 'https://avatars1.githubusercontent.com/u/48225849?s=460&u=3f8e9a830d52615b9b00e517f5f82bb8530d4a7b&v=4', }} />
                <Text style={[styles.nick, {textAlign:"center", fontSize:14, fontWeight:"400"}]} >{item}</Text>
            </View>
        </TouchableOpacity>

    )
}
function CardFeed(item, navigation) {
    return (
        <View >
            <View style={{ flexDirection: "row", marginBottom: 10, marginTop: 10 }}>
                <Image style={styles.avatar} source={{ uri: 'https://avatars1.githubusercontent.com/u/48225849?s=460&u=3f8e9a830d52615b9b00e517f5f82bb8530d4a7b&v=4' }} />
                <Text style={styles.nick}>{item}</Text>
                <SimpleLineIcons name="options-vertical" size={20} color="black" style={{ position: "absolute", right: 10, marginTop: 10 }} />
            </View>
            <Image style={styles.image_publication_feed} source={{ uri: 'https://avatars1.githubusercontent.com/u/48225849?s=460&u=3f8e9a830d52615b9b00e517f5f82bb8530d4a7b&v=4', }} />
            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                <AntDesign name="hearto" size={30} style={{ marginLeft: 10 }} color="black" />
                <Feather name="message-circle" style={{ marginLeft: 15, transform: [{ rotateZ: "270deg" }] }} size={30} color="black" />
                <TouchableOpacity onPress={() => navigation.navigate("Chat_List")}>
                    <FontAwesome name="send-o" size={30} style={{ marginLeft: 15 }} color="black" />
                </TouchableOpacity>
                <FontAwesome name="life-saver" size={30} color="black" style={{ position: "absolute", right: 10, marginTop: 10 }} />
            </View>
            {Comments()}
        </View>
    )
}


function Comments() {
    return (
        <>
            <View style={{ flexDirection: "row", paddingTop: 10 }}>
                <Image style={[styles.icon_comment, { left: 30 }]} source={{ uri: 'https://avatars1.githubusercontent.com/u/48225849?s=460&u=3f8e9a830d52615b9b00e517f5f82bb8530d4a7b&v=4' }} />
                <Image style={[styles.icon_comment, { left: 20 }]} source={{ uri: 'https://avatars1.githubusercontent.com/u/48225849?s=460&u=3f8e9a830d52615b9b00e517f5f82bb8530d4a7b&v=4' }} />
                <Image style={styles.firt_icon_comment} source={{ uri: 'https://avatars1.githubusercontent.com/u/48225849?s=460&u=3f8e9a830d52615b9b00e517f5f82bb8530d4a7b&v=4' }} />
                <View style={{ paddingLeft: 12, flexDirection: 'row', alignItems: "center", zIndex: 900 }} >
                    <Text style={{ marginRight: 3 }}> Liked by</Text>
                    <Text style={styles.nick}>geanderson.gl</Text>
                    <Text style={{ marginRight: 3 }}> and</Text>
                    <Text style={{ fontWeight: "bold" }}>other people</Text>
                </View>
            </View>
            <View style={styles.comment}>
                <Text style={[styles.nick, {marginRight: 4}]}> geanderson.gl</Text>
                <Text >I liked the photo</Text>
            </View>
            <View>
                <Text style={{ fontWeight: "bold", color: 'grey', marginLeft: 10, marginTop: 10 }}>See all posts</Text>
            </View>
            <View style={styles.comment}>
                <Text style={[styles.nick,{marginRight: 4}]}> geanderson.gl</Text>
                <Text>I liked the photo</Text>
            </View>
            <View style={styles.add_comment}>
                <Image style={styles.icon_add_comment} source={{ uri: 'https://avatars1.githubusercontent.com/u/48225849?s=460&u=3f8e9a830d52615b9b00e517f5f82bb8530d4a7b&v=4' }} />
                <Text style={{ textAlignVertical: "center", color: "grey" }}>Add a comment</Text>
            </View>
        </>
    )
}




const styles = StyleSheet.create({
    nick: { 
        textAlignVertical: "center", 
        fontSize: 15,
        fontWeight:"bold"
    },
    image_publication_feed:{
        width: "100%", 
        height: 400
    },
    image_stories : { 
        width: 70, 
        height: 70, 
        borderRadius: 40, 
        borderColor: 'pink', 
        borderWidth: 4 
    },
    icon_comment: {
        position: "absolute",
        borderColor: 'white',
        borderWidth: 2,
        top: 10,
        width: 25,
        height: 25,
        borderRadius: 40
    },
    firt_icon_comment: {
        marginRight: 10,
        borderColor: 'white',
        borderWidth: 2,
        marginLeft: 10,
        width: 25,
        height: 25,
        borderRadius: 40
    },
    avatar: {
        marginRight: 10,
        marginLeft: 10,
        width: 40,
        height: 40,
        borderRadius: 40,
        borderColor: 'pink',
        borderWidth: 4
    },
    comment: {
        flexDirection: "row",
        marginLeft: 10,
        marginTop: 10
    },
    icon_add_comment: {
        marginRight: 10,
        width: 30,
        height: 30,
        borderRadius: 40
    },
    add_comment: {
        flexDirection: "row",
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10
    },

})

