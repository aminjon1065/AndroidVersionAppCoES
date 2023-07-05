import React from 'react';
import {ScrollView, View, Text, Image} from "react-native";
import image1 from './../assets/1.png';
import image2 from './../assets/2.png';
import image3 from './../assets/3.jpg';
import image4 from './../assets/4.jpg';
import image5 from './../assets/5.jpg';
import image6 from './../assets/6.png';
import image7 from './../assets/7.png';
import image8 from './../assets/8.jpg';
import image9 from './../assets/9.jpg';
import image10 from './../assets/10.jpg';
import onShare from "../../../../../components/onShare";
import {FAB} from "react-native-paper";

const Index = ({darkMode}) => {
    const handleShare = async () => {
        const message = 'ОКАЗАНИЕ ПЕРВОЙ ПОМОЩИ ПРИ ОТСУТСТВИИ СОЗНАНИЯ, ОСТАНОВКЕ ДЫХАНИЯ И КРОВООБРАЩЕНИЯ\n' +
            'ОБЕСПЕЧЕНИЕ БЕЗОПАСНОСТИ\n' +
            'ПРОВЕРКА СОЗНАНИЯ\n' +
            'ОТКРЫТИЕ ДЫХАТЕЛЬНЫХ ПУТЕЙ\n' +
            'ПРОВЕРКА ДЫХАНИЯ\n' +
            'ВЫЗОВ СКОРОЙ МЕДИЦИНСКОЙ ПОМОЩИ\n' +
            'ДАВЛЕНИЕ НА ГРУДИНУ\n' +
            'ИСКУССТВЕННОЕ ДЫХАНИЕ\n' +
            '\n' +
            '\n'; // Здесь вы можете указать свое сообщение
        await onShare(message);
    };
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-xl text-center font-bold text-red-500"}>
                    ОКАЗАНИЕ ПЕРВОЙ ПОМОЩИ ПРИ ОТСУТСТВИИ СОЗНАНИЯ, ОСТАНОВКЕ ДЫХАНИЯ И КРОВООБРАЩЕНИЯ
                    ОБЕСПЕЧЕНИЕ БЕЗОПАСНОСТИ
                </Text>
                <View className={"flex flex-row mx-auto mb-5"}>
                    <Image source={image1}/>
                    <Image source={image2}/>
                </View>
                <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    ПРОВЕРКА СОЗНАНИЯ
                </Text>
                <View className={"mx-auto mb-5"}>
                    <Image source={image3} className={"w-56 h-44"}/>
                </View>
                <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    ОТКРЫТИЕ ДЫХАТЕЛЬНЫХ ПУТЕЙ
                </Text>
                <View className={"mx-auto mb-5"}>
                    <Image source={image4} className={"w-56 h-44"}/>
                </View>
                <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    ПРОВЕРКА ДЫХАНИЯ
                </Text>
                <View className={"mx-auto  mb-5"}>
                    <Image source={image5} className={"w-56 h-44"}/>
                </View>
                <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    ВЫЗОВ СКОРОЙ МЕДИЦИНСКОЙ ПОМОЩИ
                </Text>
                <View className={"mx-auto mb-5"}>
                    <Image source={image6} className={"w-56 h-44"}/>
                </View>
                <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    ДАВЛЕНИЕ НА ГРУДИНУ
                </Text>
                <ScrollView horizontal={true} className={"mb-5"}>
                    <Image source={image7} className={"w-56 h-36"}/>
                    <Image source={image8} className={"w-56 h-36"}/>
                    <Image source={image9} className={"w-56 h-36"}/>
                </ScrollView>
                <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    ИСКУССТВЕННОЕ ДЫХАНИЕ
                </Text>
                <View className={"mx-auto mb-5"}>
                    <Image source={image10} className={"w-64 h-56"}/>
                </View>
            </View>
            <View className={"items-end mb-5"}>
                <FAB
                    icon="share"
                    className={" w-36 bg-slate-800 mt-2 text-white"}
                    onPress={handleShare}
                    color={"#fff"}
                    label={"Поделиться"}
                />
            </View>
        </ScrollView>
    );
};

export default Index;