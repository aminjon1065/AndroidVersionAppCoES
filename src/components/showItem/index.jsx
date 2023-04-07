import React from 'react';
import {View, Text, TouchableOpacity, Image} from "react-native";
import ArrowIcon from 'react-native-vector-icons/MaterialIcons';
const Index = (props) => {
    return (
        <TouchableOpacity
            onPress={() => props.navigation.navigate(props.slug)}
        >
            <View className={"flex flex-row  items-center justify-between"}>
                <View className={"flex flex-row items-center"}>
                    <Image source={props.icon} className={"w-16 h-16 mr-2"}/>
                    <Text className={"font-normal text-lg"}>
                        {props.title}
                    </Text>
                </View>
                <View className={"pr-4"}>
                    <ArrowIcon name={"arrow-forward-ios"}/>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default Index;