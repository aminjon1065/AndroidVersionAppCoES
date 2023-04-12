import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import FirstHelpIcon from './../../../assets/img/Icons/Frame.png';
import WhatToDoIcon from './../../../assets/img/Icons/icons8-inquiry-100.png';
import SaveKidsIcon from './../../../assets/img/Icons/defend-family.png';
import { StatusBar } from "expo-status-bar";
import SearchIcon from 'react-native-vector-icons/EvilIcons';
import CallIcon from 'react-native-vector-icons/MaterialIcons';
import MessageIcon from 'react-native-vector-icons/MaterialIcons';
import { TextInput, Searchbar } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import MapImg from './../../../assets/img/map.jpg';
const Index = (props) => {
    const ref = React.useRef(null);
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return (
        <ScrollView>
            <View
                className={"h-screen bg-white"}
            >
                <View className={"p-2 mt-5"}>
                    <View className={""}>
                        <Searchbar
                            className={"bg-slate-100 mb-5 rounded text-slate-300"}
                            onIconPress={() => ref.current.focus()}
                            ref={ref}
                            placeholder="Поиск"
                            placeholderTextColor='#E0E0E0'
                            onChangeText={onChangeSearch}
                            value={searchQuery}
                            iconColor={'#146C94'}
                        />
                    </View>
                    <LinearGradient
                        start={[0.5, 1]} end={[0, 0.1]}
                        // Background Linear Gradient
                        className={"rounded-lg shadow shadow-indigo-800 bg-pink-500  mt-5"}
                        colors={['#e18d98', '#d57a80', 'transparent']}
                    // colors={['#e18d98', '#d57a80', 'transparent']}
                    >
                        <TouchableWithoutFeedback onPress={() => props.navigation.navigate('FirstHelp')}>
                            <View className={"flex flex-row justify-around rounded h-24"}>
                                <View className={""}>
                                    <Image source={FirstHelpIcon} className={"object-top bottom-5"} />
                                </View>
                                <View className={"flex-1 justify-center "}>
                                    <Text className={"text-2xl text-center text-white"}>
                                        Помощь
                                    </Text>
                                    <Text className={"text-center text-white"}>
                                        Первая помощь пострадавшему
                                    </Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </LinearGradient>
                    <View className=" flex flex-row justify-between">
                        <LinearGradient
                            start={[0, 0]}
                            end={[1, 1]}
                            // Background Linear Gradient
                            className={"rounded-lg  shadow-indigo-800 bg-slate-600 mb-2 mt-5 w-6/12 mr-0.5 pb-1"}
                            colors={['#8BC6EC', '#9599E2', 'transparent']}
                            location={[0.25, 0.4, 1]}
                        // colors={['#e18d98', '#d57a80', 'transparent']}
                        >
                            <TouchableWithoutFeedback onPress={() => props.navigation.navigate('WhatToDo')}>

                                <View>
                                    <View className={"items-center"}>
                                        <Image source={WhatToDoIcon} className={"object-top "} />
                                    </View>
                                    <View className={"justify-center "}>
                                        <Text className={"text-2xl text-center text-white"}>
                                            Что делать?
                                        </Text>
                                        <Text className={"text-center text-white"}>
                                            Что делать в экстренных ситуациях
                                        </Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </LinearGradient>
                        <LinearGradient
                            start={[0, 0]}
                            end={[1, 1]}
                            location={[0.25, 0.4, 1]}
                            // Background Linear Gradient
                            className={"rounded-lg shadow-indigo-800 bg-indigo-400 mb-2 mt-5 w-6/12  pb-1"}
                            colors={['#74EBD5', '#9FACE6', 'transparent']}
                        // colors={['#e18d98', '#d57a80', 'transparent']}
                        >
                            <TouchableWithoutFeedback onPress={() => props.navigation.navigate('CoesKids')}>
                                <View>
                                    <View className={"items-center"}>
                                        <Image source={SaveKidsIcon} className={"object-top"} />
                                    </View>
                                    <View className={" justify-center "}>

                                        <Text className={"text-2xl text-center text-white"}>
                                            КЧС Детям
                                        </Text>
                                        <Text className={"text-center text-white"}>
                                            Основы безопасности детям
                                        </Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </LinearGradient>
                    </View>
                    <View className={"mt-4"}>
                        <Text className="text-center text-xl text-slate-800">
                            Нужна помощь специалиста КЧС?
                        </Text>
                        <View className="flex flex-row pt-2">
                            <TouchableWithoutFeedback onPress={() => console.log("call")}>
                                <View className="flex flex-row flex-1 mr-1 items-center justify-center rounded-xl py-3 bg-red-500">
                                    <CallIcon name='phone' size={32} color={"white"} />
                                    <Text className="text-center text-white ml-3">
                                        Позвонить
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => console.log("message")}>
                                <View className="flex flex-row flex-1 ml-1 items-center justify-center rounded-xl py-3 bg-cyan-800">
                                    <MessageIcon name='message' size={32} color={"white"} />
                                    <Text className="text-center text-white ml-3">
                                        Написать
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <View className="bg-slate-50 mt-4 rounded-2xl">
                        <TouchableWithoutFeedback onPress={() => props.navigation.navigate('Map')}>
                            <ImageBackground source={MapImg} blurRadius={5} imageStyle={{ borderRadius: 10 }} className="  h-32 flex flex-row items-center justify-center">
                                <Text className="text-center text-xl">
                                    Map
                                </Text>
                            </ImageBackground>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                <StatusBar style={"auto"} />
            </View>
        </ScrollView>

    );
};

export default Index;