import React from 'react';
import {View, Text, Image, ScrollView, Linking, TouchableWithoutFeedback} from "react-native";
import image1 from './../assets/1.jpg'
import image2 from './../assets/2.jpg'
import image3 from './../assets/3.jpg'
import image4 from './../assets/4.jpg'
import image5 from './../assets/5.jpg'
import image6 from './../assets/6.jpg'
import image7 from './../assets/7.jpg'
import image8 from './../assets/8.jpg'
import image9 from './../assets/9.jpg'
import image10 from './../assets/10.jpg'
import image11 from './../assets/11.jpg'
import image12 from './../assets/12.jpg'
import image13 from './../assets/13.jpg'
import image14 from './../assets/14.jpg'
import image15 from './../assets/15.jpg'
import CallIcon from "react-native-vector-icons/MaterialIcons";

const Index = ({darkMode}) => {
    const call = async (number) => {
        try {
            await Linking.openURL(`tel:${number}`)
        } catch (e) {
            console.log('error')
        }
    }
    return (
        <ScrollView>
            <View className={"px-2"}>
                <Text className={"text-4xl text-center text-red-400 font-bold"}>
                    СЕРДЕЧНО-ЛЕГОЧНАЯ РЕАНИМАЦИЯ
                </Text>
                <Text className="text-center text-blue-600 text-xl">
                    ЧТО НЕОБХОДИМО ЗНАТЬ О СЕБЕ?
                </Text>
                <Text className={`ml-1 text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Для взрослого человека:
                </Text>
                <Text className={`ml-2 text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    - Частота дыхания в норме – <Text className={"text-red-400 font-bold"}>12-18</Text> вдохов в 1 мин
                </Text>
                <Text className={`ml-2 text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    - Частота сердечных сокращений <Text className={"text-red-400 font-bold"}>69-80</Text> в 1 мин
                </Text>
                <Text className={`ml-2 text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    - Величина артериального давления <Text className={"text-red-400 font-bold"}>120/80</Text>мм.рт.ст.
                </Text>
                <Text className="text-center text-blue-600 text-xl">
                    УСТАНОВЛЕНИЕ ФАКТА ОСТАНОВКИ КРОВООБРАЩЕНИЯ
                </Text>
                <View className={"w-3/6 mx-auto p-5"}>
                    <View className={"mx-auto"}>
                        <Image source={image1}/>
                    </View>
                    <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        Отсутствие сознания
                    </Text>
                </View>
                <View className={"w-3/6 mx-auto p-5"}>

                    <View className={"mx-auto mt-2"}>
                        <Image source={image2}/>
                    </View>
                    <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        Отсутствие дыхания
                    </Text>
                </View>
                <View className={"w-5/6 mx-auto p-5"}>
                    <View className={"mx-auto"}>
                        <Image source={image3} className={"w-32 h-32"}/>
                    </View>
                    <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        Отсутствие пульса на сонных артериях:
                    </Text>
                    <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        1 Изменение цвета кожных покровов
                    </Text>
                    <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        2 Расширение зрачка
                    </Text>
                </View>
                <View className={"w-5/6 mx-auto p-5"}>
                    <View className={"mx-auto"}>
                        <Image source={image4} className={"w-32 h-32"}/>
                    </View>
                    <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        Проверить наличие сознания (окликнуть пострадавшего, потрясти за плечо.
                    </Text>
                </View>

                <View className={"w-5/6 mx-auto p-5"}>
                    <View className={"mx-auto"}>
                        <Image source={image5} className={"w-32 h-32"}/>
                    </View>
                    <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        Проверить наличие дыхания (на слух, при помощи зеркала).
                    </Text>
                </View>
                <View className={"w-5/6 mx-auto p-5"}>
                    <View className={"mx-auto"}>
                        <Image source={image6} className={"w-32 h-32"}/>
                    </View>
                    <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        Проверить пульс на сонной
                    </Text>
                </View>

                <View className={"w-5/6 mx-auto p-5"}>
                    <View className={"mx-auto"}>
                        <Image source={image7} className={"w-32 h-32"}/>
                    </View>
                    <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        Проверить реакцию зрачка на свет.
                    </Text>
                </View>
            </View>
            <View className={"px-2"}>
                <Text className="text-center text-blue-600 text-xl">
                    ПРОДОЛЖИТЕЛЬНОСТЬ КЛИНИЧЕСКОЙ СМЕРТИ 3-5 МИНУТ
                </Text>
                <Text className="text-center text-blue-600 text-xl">
                    ОСНОВНЫЕ ПРАВИЛА ПРОВЕДЕНИЯ СЕРДЕЧНО – ЛЕГОЧНОЙ РЕАНИМАЦИИ
                </Text>
                <Text className={`text-start text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    - Обеспечение проходимости верхних дыхательных путей
                </Text>
                <Text className={`text-start text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    - Поддержание дыхания
                </Text>
                <Text className={`text-start text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    - Поддержание кровообращения
                </Text>
                <View>
                    <Text className="text-center text-blue-600 text-xl">
                        ОБЕСПЕЧЕНИЕ ПРОХОДИМОСТИ ВЕРХНИХ ДЫХАТЕЛЬНЫХ ПУТЕЙ
                    </Text>
                    <Text className={`text-start text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        • Осторожно запрокиньте голову
                    </Text>
                    <Text className={`text-start text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        • Подтяните подбородок вверх
                    </Text>
                    <View className={"mx-auto"}>
                        <Image source={image8} className={"w-44 h-44"}/>
                    </View>
                </View>
                <Text className="text-center text-blue-600 text-xl">
                    ПРОВЕДЕНИЕ ИСКУССТВЕННОГО ДЫХАНИЯ
                </Text>
                <Text className={`text-start text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Запрокиньте голову
                </Text>
                <Text className={`text-start text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Сделайте спокойный вдох
                </Text>
                <Text className={`text-start text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Зажмите мягкую часть носа пострадавшего двумя пальцами
                </Text>
                <Text className={`text-start text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Сделайте спокойный выдох в рот пострадавшего, плотно обхватив его рот своими губами
                </Text>
                <ScrollView horizontal={true} className={"mb-3"}>
                    <Image source={image9} className={"w-44 h-44 mr-2 rounded"}/>
                    <Image source={image10} className={"w-44 h-44 mr-2 rounded"}/>
                    <Image source={image11} className={"w-44 h-44 rounded"}/>
                </ScrollView>
                <View className={"mb-3"}>
                    <Text className="text-center text-blue-600 text-xl">
                        ПРОВЕДЕНИЕ ИСКУССТВЕННОГО ДЫХАНИЯ
                    </Text>
                    <Text className={`text-start text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        • Продолжительность вдоха -1 сек
                    </Text>
                    <Text className={`text-start text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        • Наблюдайте за подъемом грудной клетки пострадавшего
                    </Text>
                </View>
                <View>
                    <Text className="text-center text-blue-600 text-xl">
                        КОМПРЕССИЯ ГРУДНОЙ КЛЕТКИ
                    </Text>
                    <View className={"mb-2"}>
                        <View className={"mx-auto"}>
                            <Image source={image12} className={"w-44 h-44 rounded mr-1"}/>
                        </View>
                        <Text className={`text-center text-base  ${darkMode ? 'text-white' : 'text-slate-950'}`}>Встаньте сбоку от пострадавшего</Text>
                    </View>
                    <View className={"mb-2"}>
                        <View className={"mx-auto"}>
                            <Image source={image13} className={"w-44 h-44 rounded mr-1"}/>
                        </View>
                        <Text className={`text-center text-base  ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            Выполнение ИВЛ и непрямого массажа сердца одним
                            спасателем: 2 вдоха + 15 надавливаний.
                        </Text>
                    </View>
                    <View className={"mb-2"}>
                        <View className={"mx-auto"}>
                            <Image source={image14} className={"w-44 h-44 rounded mr-1"}/>
                        </View>
                        <Text className={`text-center text-base  ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            Выполнение ИВЛ и непрямого массажа сердца двумя спасателями: 1 вдох + 5 надавливаний
                        </Text>
                    </View>
                    <View className={"mb-2"}>
                        <View className={"mx-auto"}>
                            <Image source={image15} className={"w-44 h-44 rounded mr-1"}/>
                        </View>
                        <Text className={`text-center text-base  ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            - Вызвать скорую помощь
                        </Text>
                        <View className={"flex flex-row"}>
                            <TouchableWithoutFeedback onPress={() => call('03')}>
                                <View
                                    className="flex flex-row flex-1 mr-1 items-center justify-center rounded-xl py-3 bg-red-500">
                                    <CallIcon name='phone' size={32} color={"white"}/>
                                    <Text className="text-center text-white ml-3 text-2xl font-bold">
                                        03
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => call('112')}>
                                <View
                                    className="flex flex-row flex-1 mr-1 items-center justify-center rounded-xl py-3 bg-red-500">
                                    <CallIcon name='phone' size={32} color={"white"}/>
                                    <Text className="text-center text-white ml-3 text-2xl font-bold">
                                        112
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>

            </View>
        </ScrollView>
    );
};
export default Index;