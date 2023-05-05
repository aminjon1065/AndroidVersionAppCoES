import React from 'react';
import {View} from "react-native";
import Ru from "./ru";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import Tj from "../Storm/tj";

const Index = () => {
    const {i18n} = useTranslation();
    const darkModeSelector = useSelector(state => state.theme.darkMode);
    return (
        <View className={`${darkModeSelector ? 'bg-slate-800' : 'bg-white'} h-screen`}>
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