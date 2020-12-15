
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';

async function accessCamera() {
    if (this.state.isCapturing) {
        let photo = await this.camera.takePictureAsync();
        this.setState({ isCapturing: false, accessCameraLabel: 'Retake', capturedPhoto: photo.uri });
    }
    else {
        this.setState({ isCapturing: true, accessCameraLabel: 'Capture', capturedPhoto: null });
    }
}



export default function Camera_Feed({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [cameraRef, setCameraRef] = useState(null)
    const [press, setPress] = useState('Foto')
    useEffect(() => {


        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
    }

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={{ paddingTop: 40, paddingLeft: 10, backgroundColor: 'black' }} onPress={() => navigation.goBack()} >
                <MaterialIcons name="cancel" size={30} color="white" />
            </TouchableOpacity>
            <Camera style={{ flex: 0.9 }} type={type} ref={ref => {
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
                            left: 20
                        }}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>

                        <Ionicons name="ios-reverse-camera" size={40} color="white" />
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


            <View style={{ flexDirection: 'row', position: "absolute", bottom: 20, paddingTop: 10, justifyContent: "space-around", width: '100%' }}>
                <TouchableOpacity onPress={() => setPress("Foto")}>
                    <Text style={press == 'Foto' ? { color: 'blue' } : { color: 'black' }}>FOTO</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={openImagePickerAsync} >
                    <Text style={press == 'Galeria' ? { color: 'blue' } : { color: 'black' }}>GALERIA</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPress("video")} >
                    <Text style={press == 'video' ? { color: 'blue' } : { color: 'black' }}>VIDEO</Text>
                </TouchableOpacity>
            </View>

        </View >
    );
}

