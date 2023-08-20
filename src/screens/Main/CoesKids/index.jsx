import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity, Keyboard, ScrollView, StyleSheet} from 'react-native';
import {Searchbar} from 'react-native-paper';
import ArrowLeftIcon from 'react-native-vector-icons/Octicons'
import {useSelector} from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {routesDataTj} from "./../../../data/FirstHelpTj";
import {routesDataRu} from "./../../../data/FirstHelpRu";
import {useTranslation} from "react-i18next";
import {BlurView} from 'expo-blur';

const uri = 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1600';

const Index = (props) => {
    const text = 'Hello, my container is blurring contents underneath!';
    const ref = React.useRef(null);
    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState([]);
    const [result, setResult] = useState([]);
    const [lng, setLng] = useState('');
    const langStore = useSelector(state => state.lang)
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
            })
            setResult(newData);
        } else {
            setResult(data);
        }
    }
    useEffect(() => {
        async function getLng() {
            const storageLng = await AsyncStorage.getItem("lng");
            setLng(storageLng);
        }

        setData(langStore.langInterface === "tj" ? routesDataTj.items : routesDataRu.items)
        setResult(langStore.langInterface === "tj" ? routesDataTj.items : routesDataRu.items)
        getLng();
    }, [langStore]);
    const {i18n} = useTranslation();
    const darkModeSelector = useSelector(state => state.theme.darkMode);

    return (
        <>
            <View className={`h-screen ${darkModeSelector ? 'bg-slate-800' : 'bg-white'}`}>
                <View className={"px-2"}>
                    <View className={"flex flex-row items-center mb-2"}>
                        <View className="mr-1">
                            <TouchableOpacity
                                className=" items-center"
                                onPress={() => props.navigation.goBack()}
                            >
                                <ArrowLeftIcon name='arrow-left' size={28}
                                               color={darkModeSelector ? 'white' : '#146C94'}/>
                                <Text className={darkModeSelector ? 'text-white' : `text-[#146C94]`}>
                                    Назад
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View className="flex-1 ml-1">
                            <Searchbar
                                icon={() => null
                                }
                                onIconPress={() => Keyboard.dismiss}
                                className={`rounded text-slate-300 ${darkModeSelector ? 'bg-slate-600' : 'bg-slate-100 '}`}
                                // onIconPress={() => ref.current.focus()}
                                // ref={ref}
                                placeholder="Поиск"
                                placeholderTextColor='#E0E0E0'
                                onChangeText={onChangeSearchText}
                                value={searchText}
                                iconColor={'#146C94'}
                                // clearIcon={'close'}
                            />
                        </View>
                    </View>
                    <Text>Lorem ipsum dolor sit amet, consectetur.</Text>
                    <View className={"container"}>
                        <Image style={[StyleSheet.absoluteFill]} className={"h-screen"} source={{uri}}/>
                        <ScrollView className={"h-screen"}>
                            <View className={"flex flex-row justify-around"}>
                                <View
                                    className={" w-48 h-48 rounded-xl"}
                                >
                                    <BlurView intensity={70} tint={"light"} className={"h-full rounded-xl"}>
                                        <Text className={"mt-5 text-center"}>{text}</Text>
                                    </BlurView>
                                </View>
                                <View
                                    className={" w-48 h-48 rounded-xl"}
                                >
                                    <BlurView intensity={70} tint={"dark"} className={"h-full rounded-xl"}>
                                        <Text className={"mt-5 text-center"}>{text}</Text>
                                    </BlurView>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </>
    );
};

export default Index;