import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Image, Platform, TouchableOpacity, View} from "react-native";
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from "./Main/";
import Settings from "./Settings/";
import Btn from "../components/UI/Drawer/Btn";
import Bell from "../components/UI/Drawer/Bell";
import Logo from './../assets/img/logo.png';
import CustomDrawer from './../components/UI/Drawer/customDrawer';
import MainPageIcon from 'react-native-vector-icons/AntDesign';
import SettingsIcon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import * as Notifications from 'expo-notifications';
import * as Device from "expo-device";
import {Modal, Portal, Text, Button, Provider} from 'react-native-paper';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {darkMode} from "../state/slices/theme";
import {routesDataTj} from "../data/routesDataTj";
import {routesDataRu} from "../data/routesDataRu";

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
    if (Device.isDevice) {
        const {status: existingStatus} =
            await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== "granted") {
            const {status} = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== "granted") {
            alert("Failed to get push token for push notification!");
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        try {
            await fetch("https://only.tj/api/v1/store-token", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    expoToken: token,
                    deviceName: Device.deviceName,
                }),
            }).then((res) => {
                console.log("success");
            });
        } catch (e) {
            console.log("error", e.message);
        }
    } else {
        alert("Must use physical device for Push Notifications");
    }
    if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
            name: "default",
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: "#FF231F7C",
        });
    }
    return token;
}

const Index = ({navigation}) => {
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const [visible, setVisible] = React.useState(false);
    const [appIsReady, setAppIsReady] = useState(false);
    const [searchText, setSearchText] = useState("")
    const [lng, setLng] = useState('');
    const [result, setResult] = useState([]);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    // const FontSize = useSelector(state => state.font.fontSize)
    const langStore = useSelector(state => state.lang)
    const notificationListener = useRef();
    const responseListener = useRef();
    // console.log(notification.request.content.title)
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
        responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
            navigation.navigate("Notifications");
            // console.log(response);
        });
        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);
    const darkModeSelector = useSelector(state => state.theme.darkMode);
    // console.log(expoPushToken)
    const {t} = useTranslation();

    useEffect(() => {
        async function getLng() {
            try {
                const storageLng = await AsyncStorage.getItem("lng");
                const themeMode = await AsyncStorage.getItem('darkMode');
                setLng(storageLng);
                const boolTheme = themeMode === 'dark'
                await dispatch(darkMode(boolTheme))
                setIsLoading(false)
            } catch (e) {
                console.log(e)
            } finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        }

        setData(langStore.langInterface === "tj" ? routesDataTj.items : routesDataRu.items)
        setResult(langStore.langInterface === "tj" ? routesDataTj.items : routesDataRu.items)
        getLng();
    }, [langStore]);
    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setAppIsReady`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);
    if (!appIsReady) {
        return (
            <View className={"mx-auto h-screen w-screen justify-center items-center bg-slate-600"}>
                <Text>
                    ......
                </Text>
            </View>
        );
    }
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
                                    className={`flex justify-center ${darkModeSelector ? 'bg-slate-900' : 'bg-white'} backdrop-blur-3xl px-5 py-2 rounded-xl`}>
                                    <Text className={darkModeSelector ? "text-white" : "text-slate-950"}>
                                        {notification.request.content.title}
                                    </Text>
                                    <Text className={darkModeSelector ? "text-white" : "text-slate-950"}>
                                        {notification.request.content.body}
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