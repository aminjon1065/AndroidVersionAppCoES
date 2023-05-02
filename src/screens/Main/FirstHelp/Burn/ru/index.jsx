import React from 'react'
import {View, Text, Image, ScrollView} from 'react-native';
import img1 from './../assets/1.jpg';
import img2 from './../assets/2.jpg';
import img3 from './../assets/3.jpg';
import img4 from './../assets/4.png';
import img5 from './../assets/5.png';
import img6 from './../assets/6.png';
import img7 from './../assets/7.png';
import img8 from './../assets/8.png';

function Index({darkMode}) {
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-4xl text-center text-red-400 font-bold"}>
                    СТЕПЕНИ ОЖОГОВ
                </Text>
                <View className="mx-auto">
                    <Image source={img1} className="w-56 h-56"/>
                </View>
                <Text className={`text-center text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    I степень – покраснение кожи.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    ПОВРЕЖДЕНИЯ РОГОВОГО СЛОЯ КЛЕТОК КОЖИ. НЕЗНАЧИТЕЛЬНЫЙ ОТЕК И ЖГУЧИЕ БОЛИ, БЫСТРО ПРОХОДЯЩИЕ.
                </Text>
                <View className="mx-auto">
                    <Image source={img2} className="w-56 h-56"/>
                </View>
                <Text className={`text-center text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    II степень – появление пузырей, заполненных прозрачной жидкостью.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    ОБОЖЖЕННАЯ КОЖА – ИНТЕНСИВНО КРАСНОГО ЦВЕТА. ПУЗЫРИ НАПОЛНЕНЫ ПРОЗРАЧНОЙ ЖИДКОСТЬЮ. РЕЗКАЯ БОЛЬ.
                </Text>
                <View className="mx-auto">
                    <Image source={img3} className="w-56 h-44"/>
                </View>
                <Text className={`text-center text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    III – IV степени – полное разрушение кожи и подлежащего мышечного слоя.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    ПОВРЕЖДЕНИЯ БОЛЕЕ ГЛУБОКИХ СЛОЕВ КОЖИ. ОБРАЗУЮТСЯ ПУЗЫРИ И КОРОЧКИ-СТРУПЬЯ.
                    ОБУГЛИВАНИЕ КОЖИ, ПОДКОЖНОЙ КЛЕТЧАТКИ И ПОДЛЕЖАЩИХ ТКАНЕЙ ВПЛОТЬ ДО КОСТЕЙ.
                </Text>
                <Text className={`text-center text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Оказание неотложной помощи при термических ожогах.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    1. При ожогах I степени без образования пузырей и сохраненной целостности кожных покровов —
                    приложите холод на место ожога или подставьте его под струю холодной воды на 5 — 10 минут.
                    Обработайте обожженную поверхность спиртом, одеколоном или водкой.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    2. При ожогах II — IV степени с повреждением кожных покровов обработайте ожоговую поверхность
                    пенообразующими аэрозолями или накройте стерильной (чистой) простыней или салфеткой.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    3. Поверх чистой ткани положите пузыри со льдом, пакеты со снегом или холодной водой.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    4. Дайте пострадавшему 2 — 3 таблетки анальгина.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    5. До прибытия и при длительном ожидании «Скорой помощи» дайте обильное теплое питье.
                </Text>
                <View className={"mx-auto mb-5"}>
                    <Image source={img4} className={"w-64 h-44 mb-3"}/>
                    <Image source={img5} className={"w-64 h-44"}/>
                </View>
                <Text className={`text-2xl text-center font-bold ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    ОХЛАДИТЬ МЕСТО ОЖОГА
                </Text>
                <ScrollView horizontal={true} className={"mb-5"}>
                    <Image source={img6} className={"w-64 h-56 mr-1"}/>
                    <Image source={img7} className={"w-64 h-56 mr-1"}/>
                    <Image source={img8} className={"w-64 h-56"}/>
                </ScrollView>
                <Text className={"text-2xl text-center font-bold text-red-500"}>
                    Запомните! Недопустимо!
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    1. Смазывать ожоговую поверхность жиром, посыпать крахмалом или мукой;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    2. Сдирать с поврежденной поверхности остатки одежды;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    3. Вскрывать ожоговые пузыри;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    4. Туго бинтовать обожженную поверхность, накладывать пластырь;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    5. Смывать грязь и сажу с поврежденной кожи;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    6. Обрабатывать спиртом, йодом и другими спиртсодержащими растворами поврежденную поверхность кожи;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    7. Без назначения врача прибегать к использованию наркотических анальгетиков.
                </Text>
            </View>
        </ScrollView>
    )
}

export default Index