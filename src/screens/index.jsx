import React from 'react';
import {Text, View, TouchableOpacity} from "react-native";
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from "./Main/Home";
import Btn from "../components/UI/Drawer/Btn";
import Bell from "../components/UI/Drawer/Bell";

const Drawer = createDrawerNavigator();

const Index = () => {
    return (
        <Drawer.Navigator initialRouteName="Home"
                          screenOptions={({navigation}) => ({
                              headerTitleAlign: "center",
                              headerShadowVisible: false,
                              headerLeft: props => <Btn navigation={navigation}/>,
                              headerRight:props => <Bell />
                          })}
        >
            <Drawer.Screen name="Home" component={Home}/>
        </Drawer.Navigator>
    );
};

export default Index;