import React from 'react';
import { View } from "react-native";
import BellIcon from 'react-native-vector-icons/Feather'
import { Badge } from 'react-native-paper';
const Index = () => {
    return (
        <View className={"pr-2"}>
            <View className="flex flex-row">
                <Badge className="w-0 bottom-3" size={10} />
                <BellIcon name={"bell"} size={28} color={"#146C94"} />
            </View>
        </View>
    );
};

export default Index;