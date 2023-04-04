import React from 'react';
import {Text, View, TouchableOpacity, Image} from "react-native";
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from "./Main/Home";
import Btn from "../components/UI/Drawer/Btn";
import Bell from "../components/UI/Drawer/Bell";
import Logo from './../assets/img/Icons/logo.png';

const Drawer = createDrawerNavigator();

const Index = () => {
    return (
        <Drawer.Navigator initialRouteName="Home"
                          screenOptions={({navigation}) => ({
                              headerTitleAlign: "center",
                              headerShadowVisible: false,
                              headerTitle: props => <Image source={Logo} className={"w-10 h-10"}/>,
                              headerLeft: props => <Btn navigation={navigation}/>,
                              headerRight: props => <Bell/>
                          })}
        >
            <Drawer.Screen name="Home" component={Home}/>
        </Drawer.Navigator>
    );
};

export default Index;