import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableWithoutFeedback, ImageBackground, Linking} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import FirstHelpIcon from './../../../assets/img/Icons/Frame.png';
import WhatToDoIcon from './../../../assets/img/Icons/icons8-inquiry-100.png';
import SaveKidsIcon from './../../../assets/img/Icons/defend-family.png';
import {StatusBar} from "expo-status-bar";
import CallIcon from 'react-native-vector-icons/MaterialIcons';
import MessageIcon from 'react-native-vector-icons/MaterialIcons';
import {Searchbar} from 'react-native-paper';
import {routesDataRu} from "../../../data/routesDataRu";
import {routesDataTj} from "../../../data/routesDataTj";
import {ScrollView} from 'react-native-gesture-handler';
import MapImg from './../../../assets/img/map.jpg';
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ShowItem from "../../../components/showItem";
import {darkMode, themeMode} from "../../../state/slices/theme";

const Index = (props) => {
    const darkModeSelector = useSelector(state => state.theme.darkMode);
    const [searchText, setSearchText] = useState("")
    const [lng, setLng] = useState('');
    const [result, setResult] = useState([]);
    const [data, setData] = useState([]);
    const dispatch = useDispatch()
    const {t} = useTranslation();
    // const FontSize = useSelector(state => state.font.fontSize)
    const langStore = useSelector(state => state.lang)
    const onChangeSearchText = (text) => {
        setSearchText(text)
        searchFilterFunction(text);
    }
    const call = async () => {
        try {
            await Linking.openURL(`tel:112`)
        } catch (e) {
            console.log('error')
        }
    }
    const searchFilterFunction = (text) => {
        if (text) {
            const newData = data.filter(item => {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            })
            setResult(newData);
        } else {
            setResult(data);
        }
    }
    useEffect(() => {
        async function getLng() {
            const storageLng = await AsyncStorage.getItem("lng");
            const themeMode = await AsyncStorage.getItem('darkMode');
            setLng(storageLng);
            const boolTheme = themeMode === 'dark'
            await dispatch(darkMode(boolTheme))
        }

        setData(langStore.langInterface === "tj" ? routesDataTj.items : routesDataRu.items)
        setResult(langStore.langInterface === "tj" ? routesDataTj.items : routesDataRu.items)
        getLng();
    }, [langStore]);
    return (
        <ScrollView>
            <View
                className={`h-screen ${darkModeSelector ? 'bg-slate-800' : 'bg-white'}`}
            >
                <View className={"p-2 mt-5"}>
                    <View className={""}>
                        <Searchbar
                            className={`mb-5 rounded text-slate-300 ${darkModeSelector ? 'bg-slate-500' : 'bg-slate-100'}`}
                            // onIconPress={() => ref.current.focus()}
                            // ref={ref}
                            placeholder="Поиск"
                            placeholderTextColor={darkModeSelector ? 'white' : '#E0E0E0'}
                            onChangeText={onChangeSearchText}
                            value={searchText}
                            iconColor={'#94A3B8'}
                        />
                    </View>
                    {
                        searchText
                            ?
                            result.length >= 1
                                ?
                                result.map((item, index) => (
                                    <View key={index} className={"mt-2 py-2 bg-slate-200 rounded-lg pl-1"}>
                                        {
                                            searchText && <Text>{item.category}</Text>
                                        }
                                        <ShowItem
                                            title={item.title}
                                            icon={item.icon}
                                            slug={item.slug}
                                            navigation={props.navigation}
                                        />
                                    </View>
                                ))
                                :
                                <View>
                                    <Text className="text-center text-xl text-slate-800">
                                        Вы можете спросить о
                                        <Text className={"text-red-500 bg-slate-400 py-3"}>
                                            {searchText}
                                        </Text> у наших специалистов
                                    </Text>
                                    <View className="flex flex-row pt-2">
                                        <TouchableWithoutFeedback onPress={call}>
                                            <View
                                                className="flex flex-row flex-1 mr-1 items-center justify-center rounded-xl py-3 bg-red-500">
                                                <CallIcon name='phone' size={32} color={"white"}/>
                                                <Text className="text-center text-white ml-3">
                                                    Позвонить
                                                </Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                                        <TouchableWithoutFeedback onPress={() => console.log("message")}>
                                            <View
                                                className="flex flex-row flex-1 ml-1 items-center justify-center rounded-xl py-3 bg-cyan-800">
                                                <MessageIcon name='message' size={32} color={"white"}/>
                                                <Text className="text-center text-white ml-3">
                                                    Написать
                                                </Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    </View>
                                </View>
                            :
                            <>

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
                                                    <Image source={WhatToDoIcon} className={"object-top "}/>
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
                                                    <Image source={SaveKidsIcon} className={"object-top"}/>
                                                </View>
                                                <View className={" justify-center "}>

                                                    <Text className={"text-2xl text-center text-white"}>
                                                        КЧС для детей
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
                                    <Text
                                        className={`text-center text-xl ${darkModeSelector ? 'text-slate-100' : 'text-slate-800'}`}>
                                        Нужна помощь специалиста КЧС?
                                    </Text>
                                    <View className="flex flex-row pt-2">
                                        <TouchableWithoutFeedback onPress={call}>
                                            <View
                                                className="flex flex-row flex-1 mr-1 items-center justify-center rounded-xl py-3 bg-red-500">
                                                <CallIcon name='phone' size={32} color={"white"}/>
                                                <Text className="text-center text-white ml-3">
                                                    Позвонить
                                                </Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                                        <TouchableWithoutFeedback onPress={() => console.log("message")}>
                                            <View
                                                className="flex flex-row flex-1 ml-1 items-center justify-center rounded-xl py-3 bg-cyan-800">
                                                <MessageIcon name='message' size={32} color={"white"}/>
                                                <Text className="text-center text-white ml-3">
                                                    Написать
                                                </Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    </View>
                                </View>
                                {/*<View className="bg-slate-50 mt-4 rounded-2xl">*/}
                                {/*    <TouchableWithoutFeedback onPress={() => props.navigation.navigate('Map')}>*/}
                                {/*        <ImageBackground source={MapImg} blurRadius={5} imageStyle={{borderRadius: 10}}*/}
                                {/*                         className="  h-32 flex flex-row items-center justify-center">*/}
                                {/*            <Text className="text-center text-xl">*/}
                                {/*                Map*/}
                                {/*            </Text>*/}
                                {/*        </ImageBackground>*/}
                                {/*    </TouchableWithoutFeedback>*/}
                                {/*</View>*/}
                            </>
                    }
                </View>
                <StatusBar style={darkModeSelector ? 'light' : "dark"}/>
            </View>
        </ScrollView>
    );
};

export default Index;