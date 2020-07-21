import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { Video } from 'expo-av';
import { ScrollView } from 'react-native-gesture-handler';


const filters = ['IGVT', 'Loja', 'Decoração', 'Viagem', 'Arquitetura', 'Comida', 'Arte', 'Musica', 'Faça você mesmo', 'TV e cinema', 'Esportes', 'Quadrinhos', 'Automotivo']

const Sujeridos = ['http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'];

export default function Search_Page({ navigation }) {
    const [mute, setMute] = useState(false)

    return (
        <View style={{ backgroundColor: "white" }} >
            <View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    style={{ marginBottom: 10 }}
                    horizontal={true}
                    data={filters}
                    renderItem={({ item }) => Card_Filters(item)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                style={{ marginBottom: 10 }}
                horizontal={false}
                data={Sujeridos}
                renderItem={({ item }) => <TouchableOpacity onPress={() => setMute(!mute)}>
                    <Video
                        source={{ uri: item }}
                        rate={1.0}
                        volume={1.0}
                        isMuted={mute}
                        resizeMode="cover"
                        shouldPlay
                        isLooping={false}
                        style={{ width: '100%', height: 400, marginBottom: 10 }}
                    />
                </TouchableOpacity>}
                keyExtractor={(item, index) => index.toString()}
            />

        </View>
    )
}

function Card_Post(item) {


    return (
        <TouchableOpacity onPress={() => setMute(true)}>
            <Video
                source={{ uri: item }}
                rate={1.0}
                volume={1.0}
                isMuted={mute}
                resizeMode="cover"
                shouldPlay
                isLooping={false}
                style={{ width: '100%', height: 400, marginBottom: 10 }}
            />
        </TouchableOpacity>

    )
}


function Card_Filters(item) {
    return (
        <View style={{ marginTop: 10, elevation: 1, width: 100, marginLeft: 10, borderRadius: 5, borderColor: "black", height: 30, borderWidth: 1 }} >
            <Text style={{ textAlign: "center", fontWeight: 'bold', marginTop: 3 }}>{item}</Text>
        </View>
    )
}