import React from 'react';
import { Button } from "react-native-paper";
import { TouchableOpacity, View } from 'react-native';
import ArrowLeftIcon from 'react-native-vector-icons/Octicons'
import {useSelector} from "react-redux";

const Index = ({ props }) => {
    const darkModeSelector = useSelector(state => state.theme.darkMode);
    return (
        <View className={`items-start pl-2 ${darkModeSelector ? 'bg-slate-800' : 'bg-white'}`}>
            <TouchableOpacity
                onPress={() => props.navigation.goBack()}
            >
                <ArrowLeftIcon name='arrow-left' size={28} color={darkModeSelector ? 'white' : '#146C94'} />
            </TouchableOpacity>
            {/* <Button icon={"arrow-left"}
                onPress={() => props.navigation.goBack()}
                textColor={"#146C94"}
            >
            </Button> */}
        </View>
    );
};

export default Index;