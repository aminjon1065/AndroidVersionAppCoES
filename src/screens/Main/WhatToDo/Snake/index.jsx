import React from 'react';
import {View} from "react-native";
import Ru from "./ru";
import {useSelector} from "react-redux";

const Index = () => {
    const darkModeSelector = useSelector(state => state.theme.darkMode);

    return (
        <View className={darkModeSelector ? "bg-slate-800" : "bg-white"}>
            <Ru darkMode={darkModeSelector}/>
        </View>
    );
};

export default Index;