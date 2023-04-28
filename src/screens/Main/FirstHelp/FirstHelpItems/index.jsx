import React from 'react';
import {Text, View} from 'react-native';
import Ru from './ru';
import {useTranslation} from "react-i18next";
import Tj from "./tj";

const Index = () => {
    const {i18n} = useTranslation();
    return (
        <View className="bg-white px-2">
            {
                i18n.language === 'tj'
                    ?
                    <Tj/>
                    :
                    <Ru/>
            }
        </View>
    );
};

export default Index;