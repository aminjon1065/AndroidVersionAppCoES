import React from 'react';
import { Button } from "react-native-paper";
import { TouchableOpacity, View } from 'react-native';
import ArrowLeftIcon from 'react-native-vector-icons/Octicons'
const Index = ({ props }) => {
    return (
        <View className="bg-white items-start pl-2">
            <TouchableOpacity
                onPress={() => props.navigation.goBack()}
            >
                <ArrowLeftIcon name='arrow-left' size={28} color={'#146C94'} />
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