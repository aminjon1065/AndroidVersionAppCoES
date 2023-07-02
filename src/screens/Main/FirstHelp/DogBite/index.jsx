import React from 'react';
import {View} from "react-native";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import Ru from "./ru";
import Tj from "./tj";

const Index = () => {
    const darkModeSelector = useSelector(state => state.theme.darkMode);
    const {i18n} = useTranslation();
    return (
        <View className={`${darkModeSelector ? 'bg-slate-800' : 'bg-white'} px-2`}>
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