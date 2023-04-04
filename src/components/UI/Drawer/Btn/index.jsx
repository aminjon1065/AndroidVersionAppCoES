import React from 'react';
import {Text, TouchableOpacity} from "react-native";
import AppMenuIcon from 'react-native-vector-icons/AntDesign'

const Index = ({navigation}) => {
    return (
        <TouchableOpacity
            className={"pl-2"}
            onPress={() => navigation.toggleDrawer()}
        >
            <AppMenuIcon name={'appstore-o'} size={28} color={"#146C94"}/>
        </TouchableOpacity>
    );
};

export default Index;