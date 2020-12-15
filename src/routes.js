import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Main from "./pages/Main";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Chat_List from './pages/Chat_List';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Camera_Feed from '../src/pages/Camera_Feed';
import Chat_Page from "./pages/Chat_Page";
import { SimpleLineIcons } from '@expo/vector-icons';
import Search_Page from '../src/pages/Search_Page';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Page_Notifications from '../src/pages/Notification'
import Camera_Stories from "./pages/Camera_Stories";
import Profile from "./pages/Profile";
const Routes = createAppContainer(
    createBottomTabNavigator({
        Home: {
            screen: createStackNavigator(
                {
                    Main: {
                        screen: Main,
                        navigationOptions: ({ navigation }) => ({

                            title: "Instagram",
                            headerLeft: Camera(navigation),
                            headerRight: Chat(navigation)
                        })
                    },

                    Chat_List: {
                        screen: Chat_List,
                        navigationOptions: ({ navigation }) => ({
                            title: "Direct",
                            headerLeft: Back(navigation),
                            headerRight: Header_Right_Chat(navigation),

                        }),
                    },

                    Chat: {
                        screen: Chat_Page,
                        navigationOptions: ({ navigation }) => ({
                            title: "Chat",
                            headerLeft: Back(navigation),
                            headerRight: Header_Right_Chat(navigation)
                        })

                    },
                    Camera: {
                        screen: Camera_Stories,
                        navigationOptions: ({ navigation }) => ({
                            header: null
                        })

                    }
                }
            ),

            navigationOptions: ({ navigation }) => {
                let tabBarVisible;
                if (navigation.state.routes.length > 1) {
                    navigation.state.routes.map(route => {
                        if (route.routeName === "Main") {
                            tabBarVisible = true;
                        } else {
                            tabBarVisible = false;

                        }
                    });
                }

                return {
                    tabBarVisible,
                    tabBarIcon: ({ focused }) => (
                        focused ? <Entypo name="home" size={30} color="black" />
                            : <SimpleLineIcons name="home" size={25} color="black" />
                    ),
                    tabBarOptions: {
                        showLabel: false
                    }
                };
            }
        },

        Search: {
            screen: createStackNavigator(
                {
                    Notification: {
                        screen: Search_Page,
                        navigationOptions: ({ navigation }) => ({
                            title: 'search',
                            headerTintColor: "grey",
                            headerLeft: Search_Icon(navigation),
                            headerRight: Tag(navigation)
                        }
                        )
                    },
                }
            ),
            navigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused }) => (
                    focused ? <FontAwesome name="search" size={30} color="black" />
                        : <Ionicons name="ios-search" size={30} color={'black'} />
                ),
                tabBarOptions: {
                    showLabel: false
                },
                headerLeft: Back(navigation),
                headerRight: Header_Right_Chat(navigation)
            })
        },
        Post: {
            screen: Camera_Feed,
            navigationOptions: ({ navigation }) => ({
                tabBarIcon: <View style={{ height: 30, width: 30, borderColor: "black", borderWidth: 2, borderRadius: 10 }}>
                    <Ionicons name="ios-add" style={{ position: 'absolute', top: 0, left: 6.3 }} size={27} color="black" />
                </View>,
                tabBarOptions: {
                    showLabel: false
                },
                tabBarVisible: false,
                headerLeft: Back(navigation),
                headerRight: Header_Right_Chat(navigation)
            })
        },

        Lovely: {
            screen: createStackNavigator(
                {
                    Notification: {
                        screen: Page_Notifications,
                        navigationOptions: ({ navigation }) => ({
                            title: 'Activity',
                        }
                        )
                    },
                }
            ),
            navigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused }) => (
                    focused ? <AntDesign name="heart" size={30} color="black" />
                        : <AntDesign name="hearto" size={30} color={'black'} />
                ),
                tabBarOptions: {
                    showLabel: false
                },
                headerLeft: Back(navigation),
                headerRight: Header_Right_Chat(navigation)
            })
        },
        Profile: {
            screen: Profile,
            navigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused }) => (
                    focused ? <View style={{ borderColor: "black", borderWidth: 2, borderRadius: 20, height: 34, width: 34 }} >
                        <Image style={{ width: 30, height: 30, borderRadius: 20, borderColor: 'white', borderWidth: 2 }} source={{ uri: 'https://avatars1.githubusercontent.com/u/48225849?s=460&u=3f8e9a830d52615b9b00e517f5f82bb8530d4a7b&v=4', }} />
                    </View>
                        : <Image style={{ width: 30, height: 30, borderRadius: 20 }} source={{ uri: 'https://avatars1.githubusercontent.com/u/48225849?s=460&u=3f8e9a830d52615b9b00e517f5f82bb8530d4a7b&v=4', }} />
                ),
                tabBarOptions: {
                    showLabel: false
                },
            })

        },

    }
    )



)


function Search_Icon(navigation) {
    return (
        <TouchableOpacity style={{ marginLeft: 10 }}>
            <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
    )
}

function Tag(navigation) {
    return (
        <TouchableOpacity style={{ marginRight: 10 }}>
            <Ionicons name="ios-qr-scanner" size={24} color="black" />
        </TouchableOpacity>
    )
}



function Header_Right_Chat(navigation) {
    return (
        <View style={{ flexDirection: "row", marginRight: 10 }}>
            <TouchableOpacity style={{ marginRight: 20 }} onPress={() => { }}>
                <AntDesign name="videocamera" size={28} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
                <FontAwesome5 name="edit" size={24} color="black" />
            </TouchableOpacity>
        </View>

    )
}
function Back(navigation) {
    return (
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
            <Ionicons name="ios-arrow-round-back" size={40} color="black" />
        </TouchableOpacity>
    )
}


function Chat(navigation) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Chat_List")} style={{ marginRight: 10 }}>
            <FontAwesome name="send-o" size={24} color="black" />
        </TouchableOpacity>
    )
}


function Camera(navigation) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Camera")} style={{ marginLeft: 10 }}>
            <Feather name="camera" size={30} color="black" />
        </TouchableOpacity>
    )
}

export default Routes





