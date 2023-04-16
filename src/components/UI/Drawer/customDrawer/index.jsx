import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import * as Location from 'expo-location';
import WeatherIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from "react-redux";
import locationState, {updateLocation} from "../../../../state/slices/location";
import Weather from "../../../Weather";

const Index = (props) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');
    const [temperature, setTemperature] = useState(null);
    const [conditional, setConditional] = useState(null);
    const dispatchLocation = useDispatch();
    const [isLoading, setLoading] = useState(true);
    const API_KEY = "f94d12d6f240d375f0e762c1eb652d95";
    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
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

    return (
        <View className="flex-1">
            <View className="mt-10 bg-slate-300 rounded-xl mx-3 items-center justify-center h-1/6">
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
        </View>
    );
};

export default Index;