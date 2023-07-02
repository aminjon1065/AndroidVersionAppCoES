import React from 'react';
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {View} from "react-native";
import Ru from "./ru";
import Tj from "./tj";

const Index = () => {
    const {i18n} = useTranslation();
    const darkModeSelector = useSelector(state => state.theme.darkMode);
    return (
        <View className={`${darkModeSelector ? 'bg-slate-800' : 'bg-white'}  px-2`}>
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