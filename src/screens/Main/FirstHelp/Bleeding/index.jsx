import React from 'react';
import { View } from "react-native";
import Ru from "./ru";
import { useTranslation } from "react-i18next";
import Tj from "./tj";

const Index = () => {
    const { i18n } = useTranslation();
    const lang = i18n.language;
    return (
        <View className="bg-white">
            {
                lang === "ru"
                    ?
                    <Ru />
                    :
                    <Tj />
            }
        </View>
    );
};

export default Index;