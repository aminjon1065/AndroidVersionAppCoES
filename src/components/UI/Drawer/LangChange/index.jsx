import React, {useEffect, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import tj from "./../../../../assets/img/tj.png";
import ru from "./../../../../assets/img/ru.png";
import {Badge} from "react-native-paper";
import CheckIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {useTranslation} from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useDispatch} from "react-redux";
import {langInterface} from "../../../../state/slices/lang";

const Index = ({props}) => {
    const [lang, setLang] = useState("");
    const {i18n} = useTranslation();
    useEffect(() => {
        async function getLng() {
            const storageLng = await AsyncStorage.getItem("lng");
            storageLng === "tj" ? await changeTj() : await changeRu()
        }
        getLng();
    }, []);
    const dispatch = useDispatch();
    const changeTj = async () => {
        setLang("tj")
        await i18n.changeLanguage("tj")
        await AsyncStorage.setItem("lng", "tj")
        props.navigation.closeDrawer()
        dispatch(langInterface('tj'))
        props.navigation.navigate("Home")
    }
    const changeRu = async () => {
        setLang("ru")
        await i18n.changeLanguage("ru")
        await AsyncStorage.setItem("lng", "ru")
        props.navigation.closeDrawer();
        dispatch(langInterface('ru'))
        props.navigation.navigate("Home")
    };
    return (
        <View className={"pt-0 flex flex-row justify-around"}>
            <TouchableOpacity onPress={changeTj}>
                <Image source={tj} className={"rounded-full w-8 h-8"}/>
                {lang === "tj"
                    ?
                    <Badge size={15} className={"bg-coes-blue"}>
                        <CheckIcon size={10} name={"check"}/>
                    </Badge>
                    :
                    null
                }
            </TouchableOpacity>
            <TouchableOpacity onPress={changeRu}>
                <Image source={ru} className={"rounded-full w-8 h-8"}/>
                {lang === "ru"
                    ?
                    <Badge size={15} className={"bg-coes-blue"}>
                        <CheckIcon size={10} name={"check"}/>
                    </Badge>
                    :
                    null
                }
            </TouchableOpacity>
        </View>
    );
};

export default Index;
