import React from 'react';
import {Image, TouchableOpacity} from "react-native";
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from "./Main/";
import Settings from "./Settings/";
import Btn from "../components/UI/Drawer/Btn";
import Bell from "../components/UI/Drawer/Bell";
import Logo from './../assets/img/logo.png';
import CustomDrawer from './../components/UI/Drawer/customDrawer';
import MainPageIcon from 'react-native-vector-icons/AntDesign';
import SettingsIcon from 'react-native-vector-icons/AntDesign';
import {useSelector} from "react-redux";

const Drawer = createDrawerNavigator();

const Index = () => {
    const darkModeSelector = useSelector(state => state.theme.darkMode);
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={({navigation}) => ({
                // drawerType:"slide",
                headerStyle: {
                    backgroundColor: darkModeSelector ? '#1E293B' : 'white'
                },
                drawerActiveTintColor: darkModeSelector ? 'white' : '#146C94',
                drawerActiveBackgroundColor: darkModeSelector ? '#475569' : '#E2E8F0',
                drawerInactiveTintColor: darkModeSelector ? 'white' : "#146C94",
                headerTitleAlign: "center",
                headerShadowVisible: false,
                headerTitle: props =>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} className={"px-1"}>
                        <Image
                            source={Logo} className={"w-10 h-10 px-1"}
                        />
                    </TouchableOpacity>,
                headerLeft: props => <Btn navigation={navigation} color={darkModeSelector ? 'white' : '#146C94'}/>,
                headerRight: props => <Bell navigation={navigation} color={darkModeSelector ? 'white' : '#146C94'}/>
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
                        color={darkModeSelector ? 'white' : "#146C94"}
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
                        color={darkModeSelector ? 'white' : "#146C94"}
                        size={24}
                    />
                }}
            />
        </Drawer.Navigator>
    );
};

export default Index;