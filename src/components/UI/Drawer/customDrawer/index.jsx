import React from 'react';
import { Text, View } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import WeatherIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const Index = (props) => {
    return (
        <View className="flex-1">
            <View className="mt-10 bg-slate-300 rounded-xl mx-3 items-center justify-center h-1/6">
                <WeatherIcon name="weather-hail" size={48}/>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View >
    );
};

export default Index;