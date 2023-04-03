import React from 'react';
import {View} from "react-native";
import BellIcon from 'react-native-vector-icons/Feather'

const Index = () => {
    return (
        <View className={"pr-2"}>
            <BellIcon name={"bell"} size={32}/>
        </View>
    );
};

export default Index;