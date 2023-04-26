import React from 'react';
import {View, Text, TouchableOpacity, Image} from "react-native";
import ArrowIcon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from "react-redux";
const Index = (props) => {
    const darkModeSelector = useSelector(state => state.theme.darkMode);

    return (
        <TouchableOpacity
            onPress={() => props.navigation.navigate(props.slug)}
        >
            <View className={"flex flex-row  items-center justify-between"}>
                <View className={"flex flex-row items-center"}>
                    <Image source={props.icon} className={"w-16 h-16 mr-2"}/>
                    <Text className={`font-normal text-lg ${darkModeSelector ? 'text-white' : 'text-slate-900'}`}>
                        {props.title}
                    </Text>
                </View>
                <View className={"pr-4"}>
                    <ArrowIcon name={"arrow-forward-ios"} color={darkModeSelector ? 'white' : '#0F172A'}/>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default Index;