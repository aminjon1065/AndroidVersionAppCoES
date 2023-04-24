import React from 'react';
import {TouchableWithoutFeedback, View} from "react-native";
import BellIcon from 'react-native-vector-icons/Feather'
import {Badge} from 'react-native-paper';

const Index = ({navigation, color}) => {
    return (
        <View className={"pr-2"}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Notifications')}>
                <View className="flex flex-row">
                    <Badge className="w-0 bottom-3" size={10}/>
                    <BellIcon name={"bell"} size={28} color={color}/>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default Index;