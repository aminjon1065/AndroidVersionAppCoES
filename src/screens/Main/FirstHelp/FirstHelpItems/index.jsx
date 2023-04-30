import React from 'react';
import {Text, View} from 'react-native';
import Ru from './ru';
import {useTranslation} from "react-i18next";
import Tj from "./tj";
import {useSelector} from "react-redux";

const Index = () => {
    const darkModeSelector = useSelector(state => state.theme.darkMode);

    const {i18n} = useTranslation();
    return (
        <View className={`${darkModeSelector ? 'bg-slate-800' : 'bg-white'}  px-2`}>
            {
                i18n.language === 'tj'
                    ?
                    <Tj darkMode={darkModeSelector}/>
                    :
                    <Ru darkMode={darkModeSelector}/>
            }
        </View>
    );
};

export default Index;