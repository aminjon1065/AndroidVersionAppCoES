import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Keyboard, ScrollView} from 'react-native';
import {Searchbar} from 'react-native-paper';
import ArrowLeftIcon from 'react-native-vector-icons/Octicons'
import {useSelector} from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {routesDataTj} from "../../../data/WhatToDoRoutesTj";
import {routesDataRu} from "../../../data/WhatToDoRoutesRu";
import ShowItem from "../../../components/showItem";

const Index = (props) => {
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
    return (
        <>
            <View className="h-screen bg-white">
                <View className={"px-2"}>
                    <View className={"flex flex-row items-center"}>
                        <View className="mr-1">
                            <TouchableOpacity
                                className=" items-center"
                                onPress={() => props.navigation.goBack()}
                            >
                                <ArrowLeftIcon name='arrow-left' size={28} color={'#146C94'}/>
                                <Text className="text-[#146C94]">
                                    Назад
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View className="flex-1 ml-1">
                            <Searchbar
                                icon={() => null
                                }
                                onIconPress={() => Keyboard.dismiss}
                                className={"bg-slate-100 rounded text-slate-300"}
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
                    <ScrollView className="pt-2 mb-32">
                        {
                            result.length >= 1
                                ?
                                result.map((item, index) => (
                                    <View key={index} className={"mt-2 py-2 bg-slate-200 rounded-lg"}>
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
                                <Text className={"text-red-500 mt-2"}>
                                    Not found
                                </Text>
                        }
                    </ScrollView>
                </View>
            </View>
        </>
    );
};

export default Index;