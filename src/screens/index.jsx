import React, {useEffect, useRef, useState} from 'react';
import {Alert, Image, Platform, TouchableOpacity, View} from "react-native";
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
import {useTranslation} from "react-i18next";
import * as Notifications from 'expo-notifications';
import * as Device from "expo-device";
import {Modal, Portal, Text, Button, Provider} from 'react-native-paper';

const Drawer = createDrawerNavigator();
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});


async function registerForPushNotificationsAsync() {
    let token;
    const {status: existingStatus} = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
        const {status} = await Notifications.requestPermissionsAsync();
        finalStatus = status;
    }
    if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    // console.log(token);
    console.log('token');

    Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
    });
    return token;
}

const Index = ({navigation}) => {
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const [visible, setVisible] = React.useState(false);

    const notificationListener = useRef();
    const responseListener = useRef();

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const redirectToNotifications = async () => {
        hideModal()
        await navigation.navigate("Notifications")
    }
    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
            showModal();
        });
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            // console.log(response);
            console.log('response');
        });
        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);
    const darkModeSelector = useSelector(state => state.theme.darkMode);
    const {t} = useTranslation();
    return (
        <>
            <Provider>
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
                        headerLeft: props => <Btn navigation={navigation}
                                                  color={darkModeSelector ? 'white' : '#146C94'}/>,
                        headerRight: props => <Bell navigation={navigation}
                                                    color={darkModeSelector ? 'white' : '#146C94'}/>
                    })}
                    drawerContent={(props) => <CustomDrawer {...props} />}
                >
                    <Drawer.Screen
                        name="Main"
                        component={Main}
                        options={{
                            title: t('Interface.Drawer.Home'),
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
                            title: t('Interface.Drawer.Settings'),
                            drawerIcon: () => <SettingsIcon
                                name={"setting"}
                                color={darkModeSelector ? 'white' : "#146C94"}
                                size={24}
                            />
                        }}
                    />
                </Drawer.Navigator>
                {
                    visible
                        ?
                        <Portal>
                            <Modal visible={visible} onDismiss={hideModal} className={"items-center"}>
                                <View
                                    className={"flex justify-center bg-zinc-900/80 backdrop-blur-3xl px-5 py-2 rounded-xl"}>
                                    <Text className={"text-white"}>Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Animi aspernatur
                                        delectus, dolores ducimus, earum enim eos eum exercitationem ipsa ipsum
                                        molestiae mollitia non, placeat quibusdam rem tempora totam ullam
                                        voluptate!
                                    </Text>
                                    <View className={"flex flex-row justify-around"}>
                                        <Button onPress={hideModal}>
                                            cancel
                                        </Button>
                                        <Button onPress={redirectToNotifications}>
                                            Show
                                        </Button>
                                    </View>
                                </View>
                            </Modal>
                        </Portal>
                        :
                        null
                }
            </Provider>
        </>
    );
};

export default Index;