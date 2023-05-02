import React from 'react';
import {View, Text, ScrollView} from "react-native";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";

const Index = () => {
    const {i18n} = useTranslation();
    const darkModeSelector = useSelector(state => state.theme.darkMode);
    return (
        <View className={`h-screen ${darkModeSelector ? 'bg-slate-800' : 'bg-white'}`}>
            <ScrollView>
                
            </ScrollView>
        </View>
    );
};

export default Index;