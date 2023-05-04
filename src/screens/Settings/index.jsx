import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {Switch} from 'react-native-paper';
import {darkMode} from "../../state/slices/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Index = () => {
    const darkModeSelector = useSelector(state => state.theme.darkMode);
    const [dark, setDark] = useState(darkModeSelector);
    const dispatch = useDispatch()
    useEffect(() => {
        // console.log(boolTheme)
        setDark(darkModeSelector);
    }, []);
    const onToggleSwitch = async () => {
        try {
            setDark(!dark)
            const stringTheme = !dark ? 'dark' : 'light'
            await dispatch(darkMode(!dark))
            await AsyncStorage.setItem('darkMode', stringTheme)
        } catch (e) {
            console.log('error')
        }
    }

    return (
        <View className={`h-screen ${darkModeSelector ? 'bg-slate-800' : 'bg-white'}`}>
            <View>
                <View>


                    <Text
                        className={`text-center font-bold text-lg ${darkModeSelector ? 'text-white' : 'text-slate-900'}`}>
                        Настройка темы
                    </Text>
                    <View className={`flex- flex-row justify-around items-center `}>
                        <Text className={`font-bold ${darkModeSelector ? 'text-white' : 'text-slate-900'}`}>
                            Тёмная тема
                        </Text>
                        <Switch value={dark} onValueChange={onToggleSwitch}/>
                    </View>

                </View>
            </View>
        </View>
    );
};

export default Index;