import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import { YaMap, Marker } from 'react-native-yamap';


const Index = () => {

    return (
        <View className={"bg-white h-screen"}>
            <YaMap className={"h-screen w-screen"}/>
        </View>
    );
};

export default Index;