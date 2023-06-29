import React from 'react';
import {Linking, Text, TouchableWithoutFeedback, View} from "react-native";
import CallIcon from "react-native-vector-icons/MaterialIcons";
import {useTranslation} from "react-i18next";

const Index = () => {
    const {t} = useTranslation();
    const call = async () => {
        try {
            await Linking.openURL(`tel:112`)
        } catch (e) {
            console.log('error')
        }
    }
    return (
        <>
            <TouchableWithoutFeedback onPress={call}>
                <View
                    className="flex flex-row flex-1 mr-1 items-center justify-center rounded-xl py-3 bg-red-500">
                    <CallIcon name='phone' size={32} color={"white"}/>
                    <Text className="text-center text-white ml-3">
                        {t('Interface.Call')}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
};

export default Index;