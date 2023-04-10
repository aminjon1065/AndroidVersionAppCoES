import React from 'react';
import { Image } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from "./Main/";
import Settings from "./Settings/";
import Btn from "../components/UI/Drawer/Btn";
import Bell from "../components/UI/Drawer/Bell";
import Logo from './../assets/img/Icons/logo.png';
import CustomDrawer from './../components/UI/Drawer/customDrawer';

const Drawer = createDrawerNavigator();

const Index = () => {
    return (
        <Drawer.Navigator initialRouteName="Home"
            screenOptions={({ navigation }) => ({
                // drawerType:"slide",
                headerTitleAlign: "center",
                headerShadowVisible: false,
                headerTitle: props => <Image source={Logo} className={"w-10 h-10"} />,
                headerLeft: props => <Btn navigation={navigation} />,
                headerRight: props => <Bell />
            })}
            drawerContent={(props)=><CustomDrawer {...props} />}
        >
            <Drawer.Screen name="Main" component={Main} />
            <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
    );
};

export default Index;