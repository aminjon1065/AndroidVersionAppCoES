import React, {useEffect, useState} from 'react';
import {TouchableWithoutFeedback, View, Linking, Text, ActivityIndicator} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import * as Location from 'expo-location';
import {useDispatch, useSelector} from "react-redux";
import {updateLocation} from "../../../../state/slices/location";
import Weather from "../../../Weather";
import TelegramIcon from 'react-native-vector-icons/EvilIcons';
import FacebookIcon from 'react-native-vector-icons/EvilIcons';
import YoutubeIcon from 'react-native-vector-icons/EvilIcons';
import WebIcon from 'react-native-vector-icons/Fontisto';
import LangChange from "../LangChange";
import * as Clipboard from 'expo-clipboard';
import CopyIcon from 'react-native-vector-icons/Feather';
import {Snackbar} from 'react-native-paper';
import {useTranslation} from "react-i18next";

const Index = (props) => {
    const darkModeSelector = useSelector(state => state.theme.darkMode);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');
    const [temperature, setTemperature] = useState(null);
    const [conditional, setConditional] = useState(null);
    const dispatchLocation = useDispatch();
    const [isLoading, setLoading] = useState(true);
    const [copyText, setCopyText] = useState('')
    const [copiedMsg, setCopiedMsg] = useState(false)
    const API_KEY = "f94d12d6f240d375f0e762c1eb652d95";
    const [lang, setLang] = useState("");
    const {t} = useTranslation();
    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            await setLocation(location.coords);
            const {latitude, longitude} = location.coords;
            dispatchLocation(updateLocation({latitude, longitude}))
            await getWeather(latitude, longitude)
        })();
        const getWeather = async (latitude, longitude) => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
                );
                const json = await response.json();
                setTemperature(json.main.temp);
                setConditional(...json.weather);
                setLoading(false);
            } catch (error) {
                setErrorMsg(error);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        };
    }, []);
    const socialRedirect = async (link) => {
        try {
            await Linking.openURL(link)
        } catch (e) {
            console.log(e)
        }
    }
    const copiedText = async () => {
        try {
            setCopyText(`${location.latitude}, ${location.longitude}`)
            await Clipboard.setStringAsync(copyText)
            await setCopiedMsg(true);
        } catch (e) {
            console.log(e)
        }
    }
    const onDismissSnackBar = () => setCopiedMsg(false);
    return (
        <View className={`flex-1 ${darkModeSelector ? 'bg-slate-800' : 'bg-slate-100'}`}>
            <View className={"mt-12"}>
                <LangChange props={props}/>
            </View>
            <View
                className={`mt-10 rounded-xl mx-3 items-center justify-center h-1/6 ${darkModeSelector ? 'bg-slate-500' : 'bg-slate-200'} `}>
                {
                    isLoading
                        ?
                        <ActivityIndicator/>

                        :
                        <>
                            <Weather
                                temperature={temperature}
                                condition={conditional}
                                error={errorMsg}
                                isLoading={isLoading}
                                navigation={props.navigation}
                                color={darkModeSelector ? 'white' : '#146C94'}
                            />
                            <View className={"flex flex-row justify-around"}>
                                <Text
                                    className={`mr-2 ${darkModeSelector ? 'text-white' : 'text-slate-900'}`}>{location.latitude}, {location.longitude}</Text>
                                <TouchableWithoutFeedback
                                    onPress={copiedText}
                                >
                                    <CopyIcon name={'copy'} size={18} color={darkModeSelector ? 'white' : 'black'}/>
                                </TouchableWithoutFeedback>
                            </View>
                        </>
                }
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View className={"px-2 mb-16"}>
                <Text className={`text-xl text-center mb-5 ${darkModeSelector ? 'text-white' : 'text-slate-800'}`}>
                    {
                        t('Interface.Drawer.Socials')
                    }
                </Text>
                <View
                    className={`flex flex-row justify-around py-2 rounded-xl ${darkModeSelector ? 'bg-slate-600' : 'bg-slate-100'}`}>
                    <TouchableWithoutFeedback
                        onPress={() => socialRedirect('https://t.me/joinchat/AAAAAFYS-kB8t1NMv1t4QA')}
                    >
                        <TelegramIcon name={"sc-telegram"} color={'#139fe0'} size={48}/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => socialRedirect('https://www.youtube.com/channel/UC2CorI3Cv_eRlQ6JL1LcBJQ')}
                    >
                        <YoutubeIcon name={"sc-youtube"} color={'#c5091f'} size={48}/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => socialRedirect('https://www.facebook.com/khf.tj/')}
                    >
                        <FacebookIcon name={"sc-facebook"} color={'#139fe0'} size={48}/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => socialRedirect('https://khf.tj/')}
                    >
                        <WebIcon name={"world"} color={darkModeSelector ? 'white' : '#495960'} size={36}/>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <Snackbar
                visible={copiedMsg}
                onDismiss={onDismissSnackBar}
                duration={3000}
            >
                Ваши координаты скопированы
            </Snackbar>
        </View>
    );
};

export default Index;
