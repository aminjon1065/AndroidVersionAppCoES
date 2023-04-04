import React from 'react';
import {View, Text, Image} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import FirstHelpIcon from './../../../assets/img/Icons/Frame.png';
import WhatToDoIcon from './../../../assets/img/Icons/icons8-inquiry-100.png';
import SaveKidsIcon from './../../../assets/img/Icons/defend-family.png';
import {StatusBar} from "expo-status-bar";
import SearchIcon from 'react-native-vector-icons/EvilIcons';
import {TextInput, Searchbar} from 'react-native-paper';

const Index = () => {
    return (
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
                    className={"rounded-lg shadow-xl shadow-indigo-800 bg-pink-500 mb-2 mt-5"}
                    colors={['#e18d98', '#d57a80', 'transparent']}
                    // colors={['#e18d98', '#d57a80', 'transparent']}
                >
                    <View className={"flex flex-row justify-around rounded h-24"}>
                        <View className={""}>
                            <Image source={FirstHelpIcon} className={"object-top bottom-5"}/>
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

            </View>
            <StatusBar style={"auto"}/>
        </View>
    );
};

export default Index;