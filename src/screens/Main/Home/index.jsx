import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import FirstHelpIcon from './../../../assets/img/Icons/Frame.png';
import WhatToDoIcon from './../../../assets/img/Icons/1212.png';
import SaveKidsIcon from './../../../assets/img/Icons/saveKids150.png';
import {StatusBar} from "expo-status-bar";
import MessageIcon from 'react-native-vector-icons/MaterialIcons';
import {Searchbar} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import ShowItem from "../../../components/showItem";
import SOSCALL from "../../../components/SOSCALL";
import QuizIcon from './../../../assets/img/quiz_hand.png';

const Index = (props) => {
    const darkModeSelector = useSelector(state => state.theme.darkMode);
    const [searchText, setSearchText] = useState("")
    const [result, setResult] = useState([]);
    const [data, setData] = useState([]);
    const {t} = useTranslation();
    const onChangeSearchText = (text) => {
        setSearchText(text)
        searchFilterFunction(text);
    }
    const searchFilterFunction = (text) => {
        if (text) {
            const newData = data.filter(item => {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setResult(newData);
        } else {
            setResult(data);
        }
    }
    return (
        <ScrollView>
            <View
                className={`h-screen ${darkModeSelector ? 'bg-slate-800' : 'bg-white'}`}
            >
                <View className={"p-2 mt-5"}>
                    <View className={""}>
                        <Searchbar
                            className={`mb-5 rounded text-slate-300 ${darkModeSelector ? 'bg-slate-500' : 'bg-slate-100'}`}
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
                                result.map((item, index) =>
                                    item.find(elem => elem === searchText)(
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
                                    )
                                )
                                :
                                <View>
                                    <View className={"flex flex-row"}>
                                        <Text
                                            className={`text-center text-xl ${darkModeSelector ? 'text-white' : 'text-slate-950'}`}>
                                            Вы можете спросить о </Text>
                                        <Text className={"text-white bg-red-500 px-2 text-xl mr-3"}>
                                            {searchText}
                                        </Text>
                                        <Text
                                            className={`text-center text-xl ${darkModeSelector ? 'text-white' : 'text-slate-950'}`}>
                                            у наших специалистов
                                        </Text>
                                    </View>
                                    <View className="flex flex-row pt-2">
                                        <SOSCALL/>
                                        <TouchableWithoutFeedback onPress={() => console.log("message")}>
                                            <View
                                                className="flex flex-row flex-1 ml-1 items-center justify-center rounded-xl py-3 bg-cyan-800">
                                                <MessageIcon name='message' size={32} color={"white"}/>
                                                <Text className="text-center text-white ml-3">
                                                    {t('Interface.Review')}
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
                                                    {t('Interface.Cards.FirstHelp')}
                                                </Text>
                                                <Text className={"text-center text-white"}>
                                                    {t('Interface.Cards.FirstHelpDescription')}
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
                                                    <Image source={WhatToDoIcon} className={"object-top"}/>
                                                </View>
                                                <View className={"justify-center "}>
                                                    <Text className={"text-2xl text-center text-white"}>
                                                        {t('Interface.Cards.WhatToDo')}
                                                    </Text>
                                                    <Text className={"text-center text-white"}>
                                                        {t('Interface.Cards.WhatToDoDescription')}
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
                                                    <Text className={"text-xl text-center text-white"}>
                                                        {t('Interface.Cards.CoESForKids')}
                                                    </Text>
                                                    <Text className={"text-center text-white"}>
                                                        {t('Interface.Cards.CoESForKidsDescription')}
                                                    </Text>
                                                </View>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    </LinearGradient>
                                </View>
                                <LinearGradient
                                    start={[0.5, 1]} end={[0, 0.1]}
                                    // Background Linear Gradient
                                    className={"rounded-lg shadow shadow-indigo-800 bg-pink-500  mt-5"}
                                    colors={['#e18d98', '#d57a80', 'transparent']}
                                    // colors={['#e18d98', '#d57a80', 'transparent']}
                                >
                                    <TouchableWithoutFeedback onPress={() => props.navigation.navigate('Quiz')}>
                                        <View className={"flex flex-row justify-around rounded h-24"}>
                                            <View className={"flex-1 justify-center "}>
                                                <Text className={"text-2xl text-center text-white"}>
                                                    {t('Interface.Cards.Quiz')}
                                                </Text>
                                                <Text className={"text-center text-white"}>
                                                    {t('Interface.Cards.QuizDescription')}
                                                </Text>
                                            </View>
                                            <View className={""}>
                                                <Image source={QuizIcon} className={"object-bottom"}/>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </LinearGradient>
                                <View className={"mt-4"}>
                                    <Text
                                        className={`text-center text-xl ${darkModeSelector ? 'text-slate-100' : 'text-slate-800'}`}>
                                        {t('Interface.HelpSpecialist')}
                                    </Text>
                                    <View className="flex flex-row pt-2">
                                        <SOSCALL/>
                                        <TouchableWithoutFeedback onPress={() => console.log("message")}>
                                            <View
                                                className="flex flex-row flex-1 mr-1 items-center justify-center rounded-xl py-3 bg-cyan-800">
                                                <MessageIcon name='message' size={32} color={"white"}/>
                                                <Text className="text-center text-white ml-1">
                                                    {t('Interface.Review')}
                                                </Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    </View>
                                </View>
                            </>
                    }
                </View>
                <StatusBar style={darkModeSelector ? 'light' : "dark"}/>
            </View>
        </ScrollView>
    );
};

export default Index;