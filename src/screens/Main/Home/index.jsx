import React from 'react';
import { View, Text, Image, TouchableHighlight } from "react-native";
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

const Index = () => {
    return (
        <ScrollView>
            <View
                className={"h-screen bg-white"}
            >
                <View className={"p-2 mt-5"}>
                    <View className={""}>
                        <Searchbar
                            className={"bg-slate-100 mb-5 rounded text-slate-300"}
                            clearTextOnFocus={true}
                            clearIcon={"close"}
                            clearButtonMode="always"
                            // outlineColor={"transparent"}
                            // right={
                            //     <TextInput.Icon icon={() => <SearchIcon name={"search"} size={32}/>}/>
                            // }
                            // underlineStyle={{borderStyle:"dotted"}}
                            iconColor={'#146C94'}
                        />
                    </View>
                    <LinearGradient
                        start={[0.5, 1]} end={[0, 0.1]}
                        // Background Linear Gradient
                        className={"rounded-lg shadow shadow-indigo-800 bg-pink-500 mb-2 mt-5"}
                        colors={['#e18d98', '#d57a80', 'transparent']}
                    // colors={['#e18d98', '#d57a80', 'transparent']}
                    >
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
                    </LinearGradient>
                    <View className=" flex flex-row justify-between">
                        <LinearGradient
                            start={[0, 0]}
                            end={[1, 1]}
                            // Background Linear Gradient
                            className={"rounded-lg shadow shadow-indigo-800 bg-slate-600 mb-2 mt-5 w-6/12 mr-0.5 pb-1"}
                            colors={['#8BC6EC', '#9599E2', 'transparent']}
                            location={[0.25, 0.4, 1]}
                        // colors={['#e18d98', '#d57a80', 'transparent']}
                        >
                            <View className={"items-center"}>
                                <Image source={WhatToDoIcon} className={"object-top bottom-5"} />
                            </View>
                            <View className={"justify-center "}>
                                <Text className={"text-2xl text-center text-white"}>
                                    Что делать?
                                </Text>
                                <Text className={"text-center text-white"}>
                                    Что делать в экстренных ситуаций
                                </Text>
                            </View>
                        </LinearGradient>
                        <LinearGradient
                            start={[0, 0]}
                            end={[1, 1]}
                            location={[0.25, 0.4, 1]}
                            // Background Linear Gradient
                            className={"rounded-lg shadow shadow-indigo-800 bg-indigo-400 mb-2 mt-5 w-6/12  pb-1"}
                            colors={['#74EBD5', '#9FACE6', 'transparent']}
                        // colors={['#e18d98', '#d57a80', 'transparent']}
                        >
                            <View className={"items-center"}>
                                <Image source={SaveKidsIcon} className={"object-top bottom-5"} />
                            </View>
                            <View className={" justify-center "}>
                                <Text className={"text-2xl text-center text-white"}>
                                    КЧС Детям
                                </Text>
                                <Text className={"text-center text-white"}>
                                    Основы безопасности детям
                                </Text>
                            </View>
                        </LinearGradient>
                    </View>
                </View>
                <View className={"p-2 mt-4"}>
                    <Text className="text-center text-xl text-slate-800">
                        Нужна помощь специалиста КЧС?
                    </Text>
                    <View className="flex flex-row pt-2">
                        <TouchableHighlight className="flex-1 mr-1">
                            <View className="flex flex-row items-center justify-center rounded py-3 bg-red-500">
                                <CallIcon name='phone' size={32} color={"white"} />
                                <Text className="text-center text-white ml-3">
                                    Позвонить
                                </Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight className="flex-1 ml-1">
                            <View className="flex flex-row items-center justify-center rounded py-3 bg-cyan-800">
                                <MessageIcon name='message' size={32} color={"white"} />
                                <Text className="text-center text-white ml-3">
                                    Написать
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                <StatusBar style={"auto"} />
            </View>
        </ScrollView>

    );
};

export default Index;