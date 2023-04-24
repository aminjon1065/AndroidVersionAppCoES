import React from 'react';
import {Image, SafeAreaView, TouchableOpacity, View} from "react-native";
import Logo from "../../../../assets/img/logo_new.png";
import Btn from "../Btn";
import Bell from "../Bell";

const Index = ({navigation}) => {
    return (
        <SafeAreaView>
            <View className={"flex flex-row justify-between"}>
                <Btn navigation={navigation}/>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image
                        source={Logo} className={"w-10 h-10"}
                    />
                </TouchableOpacity>
                <Bell navigation={navigation}/>
            </View>
        </SafeAreaView>
    );
};

export default Index;