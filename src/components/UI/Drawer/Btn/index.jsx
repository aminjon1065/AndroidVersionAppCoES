import React from 'react';
import {TouchableOpacity} from "react-native";
import AppMenuIcon from 'react-native-vector-icons/Entypo'

const Index = ({navigation, color}) => {

    return (
        <TouchableOpacity
            className={"pl-2"}
            onPress={() => navigation.toggleDrawer()}
        >
            <AppMenuIcon name={'menu'} size={28} color={color}/>
        </TouchableOpacity>
    );
};

export default Index;