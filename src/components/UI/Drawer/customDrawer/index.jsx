import React, {useEffect, useState} from 'react';
import {TouchableWithoutFeedback, View, Linking, Text, Image, TouchableOpacity} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import * as Location from 'expo-location';
import {useDispatch, useSelector} from "react-redux";
import {updateLocation} from "../../../../state/slices/location";
import Weather from "../../../Weather";
import TelegramIcon from 'react-native-vector-icons/FontAwesome';
import FacebookIcon from 'react-native-vector-icons/FontAwesome';
import YoutubeIcon from 'react-native-vector-icons/FontAwesome';
import WebIcon from 'react-native-vector-icons/Ionicons';
import LangChange from "../LangChange";


const Index = (props) => {
    const darkModeSelector = useSelector(state => state.theme.darkMode);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');
    const [temperature, setTemperature] = useState(null);
    const [conditional, setConditional] = useState(null);
    const dispatchLocation = useDispatch();
    const [isLoading, setLoading] = useState(true);
    const API_KEY = "f94d12d6f240d375f0e762c1eb652d95";
    const [lang, setLang] = useState("");
    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location.coords);
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
    return (
        <View className={`flex-1 ${darkModeSelector ? 'bg-slate-900' : 'bg-slate-100'}`}>
            <View className={"mt-12"}>
                <LangChange props={props}/>
            </View>
            <View className={`mt-10 rounded-xl mx-3 items-center justify-center h-1/6 bg-slate-200`}>
                <Weather
                    temperature={temperature}
                    condition={conditional}
                    error={errorMsg}
                    isLoading={isLoading}
                    navigation={props.navigation}
                />
                {/*<WeatherIcon name="weather-hail" size={48}/>*/}
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View className={"px-2 mb-16"}>
                <Text className={`text-xl text-center mb-5 ${darkModeSelector ? 'text-white' : 'text-slate-300'}`}>
                    Мы в соиальных сетях
                </Text>
                <View className={`flex flex-row justify-around py-2 rounded-xl ${darkModeSelector ? 'bg-slate-600' : 'bg-slate-100'}`}>
                    <TouchableWithoutFeedback
                        onPress={() => socialRedirect('https://t.me/joinchat/AAAAAFYS-kB8t1NMv1t4QA')}
                    >
                        <TelegramIcon name={"telegram"} color={'#139fe0'} size={48}/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => socialRedirect('https://www.youtube.com/channel/UC2CorI3Cv_eRlQ6JL1LcBJQ')}
                    >
                        <YoutubeIcon name={"youtube-play"} color={'#c5091f'} size={48}/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => socialRedirect('https://www.facebook.com/khf.tj/')}
                    >
                        <FacebookIcon name={"facebook-square"} color={'#139fe0'} size={48}/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => socialRedirect('https://khf.tj/')}
                    >
                        <WebIcon name={"ios-globe-outline"} color={darkModeSelector ? 'white' : '#495960'} size={48}/>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
    );
};

export default Index;
