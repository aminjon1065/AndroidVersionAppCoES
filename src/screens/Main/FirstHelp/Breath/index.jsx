import React from 'react';
import {View} from "react-native";
import {useTranslation} from "react-i18next";
import Ru from "./ru";
import Tj from "./tj";
import {useSelector} from "react-redux";

const Index = () => {
    const {i18n} = useTranslation();
    const darkModeSelector = useSelector(state => state.theme.darkMode);

    return (
        <View className={darkModeSelector ? 'bg-slate-800' : "bg-white"}>
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