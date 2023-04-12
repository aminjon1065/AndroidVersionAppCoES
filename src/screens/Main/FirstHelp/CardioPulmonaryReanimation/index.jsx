import React from 'react';
import {View} from "react-native";
import {useTranslation} from "react-i18next";
import Ru from "./ru";
import Tj from "./tj";

const Index = () => {
    const {i18n} = useTranslation();
    const lang = i18n.language;
    return (
        <View>
            {
                lang === 'ru'
                    ?
                    <Ru/>
                    :
                    <Tj/>
            }
        </View>
    );
};

export default Index;