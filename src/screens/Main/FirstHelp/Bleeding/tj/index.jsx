import React from 'react';
import {Image, ScrollView, Text, View} from "react-native";
import imgT from "../assets/11.jpg";
import imgTT from "../assets/12.jpg";
import imgT1 from "../assets/Рисунок1.jpg";
import imgT2 from "../assets/Рисунок2.jpg";

const Index = ({darkMode}) => {
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-4xl text-center text-red-400 font-bold"}>
                    Хунравӣ
                </Text>
                <Text className={`text-base ml-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Хориҷ шудани хун аз раги ҷабрдидаро хунравӣ меноманд.
                </Text>
                <Text className={`text-base ml-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Захм – ин зарар дидани бофтаҳои пӯст ва луобпардаҳо мебошад.
                </Text>
                <Text className={`text-base ml-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Ҳангоми осеб мушакҳо, рагҳои хунгузар, бофтаҳои асаб ва узвҳои дохилӣ низ метавонанд, осеб бинанд.
                </Text>
                <Text className="text-center text-blue-600 text-xl">
                    НАМУДҲОИ ХУНРАВӢ.
                </Text>
                <View className={"ml-2"}>
                    <Text className={darkMode ? "text-white" : "text-slate-950"}>
                        1 Артериалӣ: ранги хун арғувонии дурахшон ва аз захм фавворазании хун. </Text>
                    <Text className={`ml-5 text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>• Кровь ярко-алого
                        цвета.</Text>
                    <Text className={`ml-5 text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>• Бьет из раны
                        фонтаном.</Text>
                    <Text className={darkMode ? "text-white" : "text-slate-950"}>
                        2 Венозӣ: хуни рангаш торик ва Аз захм ранге ҷӯӣе ҷорӣ мешавад.
                    </Text>
                    <Text className={`ml-5 text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>• Кровь
                        темно-вишневого цвета.</Text>
                    <Text className={`ml-5 text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>• Течет из раны
                        потоком.</Text>
                    <Text className={darkMode ? "text-white" : "text-slate-950"}>
                        3 Капиллярӣ: аз захм хун оҳиста - оҳиста ҷорӣ мешавад.
                    </Text>
                    <Text className={`ml-5 text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        • При небольших порезах; кровь медленно сочится из раны.
                    </Text>
                </View>
                <Text className="text-center text-blue-600 text-xl">
                    МАЪН КАРДАНИ ХУНРАВИИ ШАРАЁНӢ.
                </Text>
                <View className={'mx-auto'}>
                    <Image source={imgT} className={"w-64 h-64"}/>
                </View>
                <Text className={`mb-2 text-base ml-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    1. Бо ангушт пахш кардани рагро болотар аз захм анҷом диҳед.
                </Text>
                <Text className={`mb-2 text-base ml-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    2. Ба захми осебдида тофтабанд, бинт ё латтаи тоза гузоред.
                </Text>
                <Text className={`mb-2 text-base ml-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    3. мондани латтаи тоза ва ба қадри имкон узвҳои осебдидаро тоб диҳед.
                </Text>
                <Text className={`mb-2 text-base ml-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    4. Доруҳои дардкамкунанда диҳед.
                </Text>
                <Text className={`mb-2 text-base ml-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    5. Ба беморхона интиқол диҳед.
                </Text>
                <Text className="text-center text-blue-600 text-xl">
                    МАЪН КАРДАНИ ХУНРАВИИ ВЕНОЗӢ.
                </Text>
                <View className={"mx-auto"}>
                    <Image source={imgTT} className={"w-64 h-64"}/>
                </View>
                <View className={"ml-1"}>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        1. Гирди захмро бо йод молед.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        2. Захмро бо бинти тоза бандед.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        3. Захмро сахт бибандед.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        4. Пӯсти атрофи захмро тоза (дезинфексия) кунед.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        5. Бинти безарар ва фишорро гузоред.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        6. Доруҳои дардкамкунанда диҳед.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        7. Ба беморхона интиқол диҳед.
                    </Text>
                </View>
                <Text className="text-center text-blue-600 text-xl">
                    МАЪН КАРДАНИ ХУНРАВИИ КАПИЛЛЯРӢ.
                </Text>
                <ScrollView horizontal={true} className={"flex flex-row"}>
                    <Image source={imgT1} className={"w-64 h-64 mr-2"}/>
                    <Image source={imgT2} className={"w-64 h-64"}/>
                </ScrollView>
                <View className={"ml-1"}>
                    <Text className={`text-base ml-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        1. Захмро бо перекис бишӯед ё захмро дезинфексия кунед.
                    </Text>
                    <Text className={`text-base ml-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        2. Ба ҷоӣи зарардидаро бо йод ё маҳлули зелёнка молед.
                    </Text>
                    <Text className={`text-base ml-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        3. Бо тампон захмро маҳкам кунед.
                    </Text>
                    <Text className={`text-base ml-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        4. Бинти тозаро гузоред
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default Index;