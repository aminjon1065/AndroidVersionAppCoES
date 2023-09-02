import React from 'react';
import {ScrollView, View, Text, Image} from "react-native";
import img1 from './../assets/1.jpg';
import img2 from './../assets/2.jpg';
import onShare from "../../../../../components/onShare";
import {FAB} from "react-native-paper";

const Index = ({darkMode}) => {
    const handleShare = async () => {
        const message = 'Солнечный удар' +
            ' Солнечный удар — это разновидность теплового удара, который оказывает негативное влияние на организм\n' +
            '                    человека, особенно на головной мозг и систему кровообращения.\n' +
            '                    ПРИЗНАКИ СОЛНЕЧНЫХ ОЖОГОВ:\n' +
            '                    • Покраснение лица и всего тела в целом\n' +
            '                    • Головная боль\n' +
            '                    • Головокружение\n' +
            '                    • Беспокойство\n' +
            '                    • Тошнота и рвота\n' +
            '                    • Учащение пульса\n' +
            '                    • Потливость тела\n' +
            '                    • Повышение температуры\n' +
            '                    • Частое дыхание\n' +
            '                    • Сухая кожа\n' +
            '                    • Кровотечение из носа\n' +
            '                    • В некоторых случаях появляется потеря сознания\n' +
            '                    ПРОФИЛАКТИКА ОТ СОЛНЕЧНОГО УДАРА:\n' +
            '                    • Одежда должна быть хлопчатобумажной и яркой.\n' +
            '                    • Пейте много воды. При питье большого количества воды из организма выделяется много пота, и это\n' +
            '                    состояние защищает Вас от солнечных лучей.\n' +
            '                    • Не выходите на жаркий воздух примерно с 11 до 16 часов, при необходимости наденьте головной убор\n' +
            '                    или возьмите зонт.\n' +
            '                    • В жаркие дни пейте много воды, не менее 2-2,5 литров в сутки.\n' +
            '                    • Не употребляйте жирную и питательную пищу во время путешествия в солнечный день.\n'

        await onShare(message);
    };
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-2xl text-center font-bold text-red-500"}>
                    Солнечный удар
                </Text>
                <Text className={`text-base  mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Солнечный удар — это разновидность теплового удара, который оказывает негативное влияние на организм
                    человека, особенно на головной мозг и систему кровообращения.
                </Text>
                <Text className={"text-xl text-center font-bold text-red-500"}>
                    ПРИЗНАКИ СОЛНЕЧНЫХ ОЖОГОВ:
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Покраснение лица и всего тела в целом
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Головная боль
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Головокружение
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Беспокойство
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Тошнота и рвота
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Учащение пульса
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Потливость тела
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Повышение температуры
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Частое дыхание
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Сухая кожа
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Кровотечение из носа
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • В некоторых случаях появляется потеря сознания
                </Text>
                <Text className={"text-xl text-center font-bold text-red-500"}>
                    ПРОФИЛАКТИКА ОТ СОЛНЕЧНОГО УДАРА:
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Одежда должна быть хлопчатобумажной и яркой.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Пейте много воды. При питье большого количества воды из организма выделяется много пота, и это
                    состояние защищает Вас от солнечных лучей.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Не выходите на жаркий воздух примерно с 11 до 16 часов, при необходимости наденьте головной убор
                    или возьмите зонт.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • В жаркие дни пейте много воды, не менее 2-2,5 литров в сутки.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Не употребляйте жирную и питательную пищу во время путешествия в солнечный день.
                </Text>
                <View className={"mx-auto"}>
                    <Image source={img1} className={"w-96 h-60"}/>
                </View>
                <View className={"mx-auto"}>
                    <Image source={img2} className={"w-96 h-56"}/>
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