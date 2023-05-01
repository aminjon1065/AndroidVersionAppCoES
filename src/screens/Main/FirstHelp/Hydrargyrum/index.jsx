import React from 'react';
import {View} from "react-native";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import Ru from "./ru";
import Tj from "./tj";

const Index = () => {
    const darkModeSelector = useSelector(state => state.theme.darkMode);
    const {i18n} = useTranslation();
    return (
        <View className={`${darkModeSelector ? 'bg-slate-800' : 'bg-white'}`}>
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