import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {useTranslation} from "react-i18next";

const Index = ({error, condition, temperature, isLoading, navigation, color, regionName, latitde, longitude}) => {
    const {t} = useTranslation();
    const weatherOption = {
        Thunderstorm: {
            iconName: "weather-partly-lightning"
        },
        Clear: {
            iconName: "white-balance-sunny"
        },
        Drizzle: {
            iconName: "weather-pouring"
        },
        Rain: {
            iconName: "weather-rainy"
        },
        Snow: {
            iconName: "weather-snowy"
        },
        Mist: {
            iconName: "weather-partly-cloudy"
        },
        Smoke: {
            iconName: "weather-cloudy"
        },
        Haze: {
            iconName: "weather-partly-cloudy"
        },
        Dust: {
            iconName: "weather-sunset"
        },
        Fog: {
            iconName: "weather-fog"
        },
        Sand: {
            iconName: "weather-windy-variant"
        },
        Ash: {
            iconName: "weather-windy-variant"
        },
        Clouds: {
            iconName: "apple-icloud"
        },
        Squall: {
            iconName: "weather-cloudy-arrow-right"
        },
        Tornado: {
            iconName: "weather-tornado"
        }
    }
    let text = 'Загрузка..';
    if (error) {
        text = "Error";
    } else if (temperature) {
        text = `${Math.round(temperature)}°`;
    }
    if (error) {
        return (
            <View className={"mr-2"}>
                <Text className={"text-white"}>{t("Other.Denied")}</Text>
            </View>
        )
    }
    return (
        <View>
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Weathers")} className={"mx-auto"}>
                    <Icon name={`${weatherOption[condition.main].iconName}`}
                          style={{color: color, ...styles.weatherIcon}}
                          size={34}/>
                    <Text style={{color: color, ...styles.weatherText}}>
                        {text}
                    </Text>
                </TouchableOpacity>
                <Text>
                    {latitde} - {longitude}
                </Text>
            </>
        </View>
    );
};

export default Index;

const styles = StyleSheet.create({
    weatherText: {

        fontSize: 28
    },
    weatherIcon: {}
})