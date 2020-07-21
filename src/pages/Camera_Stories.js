
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Camera_Stories({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [cameraRef, setCameraRef] = useState(null)
    const [flash, setFlash] = useState('off')
    useEffect(() => {


        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 20, paddingTop: 35, paddingBottom: 10, justifyContent: "space-between", backgroundColor: 'black' }} >
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Ionicons name="ios-settings" size={35} color="white" />
                </TouchableOpacity>
                {
                    flash == 'on' ? <TouchableOpacity onPress={() => setFlash('off')} >
                        <MaterialIcons name="flash-on" size={35} color="white" />

                    </TouchableOpacity> : <TouchableOpacity onPress={() => setFlash('on')} >
                            <Ionicons name="md-flash-off" size={35} color="white" />
                        </TouchableOpacity>

                }
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <MaterialIcons name="cancel" size={35} color="white" />
                </TouchableOpacity>
            </View>

            <Camera style={{ flex: 1 }} flashMode={flash} type={type} ref={ref => {
                setCameraRef(ref);
            }}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        justifyContent: 'flex-end'
                    }}>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            bottom: 20,
                            right: 20
                        }}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>

                        <Ionicons name="ios-reverse-camera" size={50} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>

                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignSelf: 'center' }} onPress={async () => {
                        if (cameraRef) {
                            let photo = await cameraRef.takePictureAsync();
                            console.log('photo', photo);
                        }
                    }}>
                        <View style={{
                            borderWidth: 2,
                            borderRadius: 30,
                            borderColor: 'white',
                            height: 50,
                            width: 50,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 10
                        }}
                        >
                            <View style={{
                                borderWidth: 2,
                                borderRadius: 30,
                                borderColor: 'white',
                                height: 40,
                                width: 40,
                                backgroundColor: 'white'

                            }} >
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </Camera>

        </View >
    );
}

