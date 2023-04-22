import React from 'react';
import {Image, TouchableOpacity} from "react-native";
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from "./Main/";
import Settings from "./Settings/";
import Btn from "../components/UI/Drawer/Btn";
import Bell from "../components/UI/Drawer/Bell";
import Logo from './../assets/img/Icons/logo.png';
import CustomDrawer from './../components/UI/Drawer/customDrawer';
import MainPageIcon from 'react-native-vector-icons/AntDesign';
import SettingsIcon from 'react-native-vector-icons/AntDesign';

const Drawer = createDrawerNavigator();

const Index = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={({navigation}) => ({
                // drawerType:"slide",
                headerTitleAlign: "center",
                headerShadowVisible: false,
                headerTitle: props => <TouchableOpacity onPress={() => navigation.navigate('Home')}><Image
                    source={Logo} className={"w-10 h-10"}/></TouchableOpacity>,
                headerLeft: props => <Btn navigation={navigation}/>,
                headerRight: props => <Bell navigation={navigation}/>
            })}
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <Drawer.Screen
                name="Main"
                component={Main}
                options={{
                    title: "Главная",
                    drawerIcon: () => <MainPageIcon
                        name={"home"}
                        color={"#146C94"}
                        size={24}
                    />
                }}
            />
            <Drawer.Screen
                name="Settings"
                component={Settings}
                options={{
                    title: "Настройки",
                    drawerIcon: () => <SettingsIcon
                        name={"setting"}
                        color={"#146C94"}
                        size={24}
                    />
                }}
            />
        </Drawer.Navigator>
    );
};

export default Index;