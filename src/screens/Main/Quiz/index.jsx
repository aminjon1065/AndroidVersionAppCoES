import React from 'react';
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import Ru from "./ru";
import Tj from "./tj";
import {View} from "react-native";

const Index = () => {
    const {i18n} = useTranslation();
    const darkModeSelector = useSelector(state => state.theme.darkMode);
    return (
        <View className={darkModeSelector ? "bg-slate-800" : "bg-white"}>
            {
                i18n.language === 'ru'
                    ?
                    <Ru darkMode={darkModeSelector}/>
                    :
                    <Tj darkMode={darkModeSelector}/>
            }
        </View>
    );
};

export default Index;