import React from 'react';
import {ScrollView, View, Text, Image} from "react-native";
import img1 from './../assets/1.png';

const Index = ({darkMode}) => {
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-2xl text-center font-bold text-red-500"}>
                    ҲАШАРОТҲО:
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Газидан бо мақсади дифоъ: занбӯри асал, хорнетҳо, мӯрчаҳои сурх.
                    Хунхорҳо: хомӯшакҳо, магасҳо, бургаҳо, канаҳо, пашшаҳо.
                </Text>
                <Text className={"text-xl text-center font-bold text-red-500"}>
                    АЛОМАТҲОИ ГАЗИДАНИ ҲАШАРОТ:
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • хориш дар пӯст ва захм намоён пайдо мешавад.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • дард, дарди сар ва чарх задани сар.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • варамӣ.
                </Text>

                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • сурхӣ.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • баландшавии ҳарорат (маҳаллӣ).
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • дар бадан доғҳо пайдо мешавад;
                </Text>
                <Text className={"text-xl text-center font-bold text-red-500"}>
                    ЁРИИ АВВАЛИН:
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • нешро бо пинцет гирифтан;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Захмро бо спирт ё перманганати калий шӯед;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Ба ҷои газида хунук (ях) молед;
                </Text>

                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • ба ҷабрдида 1-2 ҳаб супрастин диҳед;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • нӯшокии бисёр.
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Агар ҳолати ҷабрдида вазнинтар шавад, ба духтур муроҷиат кунед.
                </Text>
                <Text className={"text-xl text-center font-bold text-red-500"}>
                    ДАР ХОТИР ДОРЕД:
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • ҳангоми газидани ҳашаротҳо ҳассосият дошта бошед, Шумо бояд доруҳои заруриро бо худ дошта бошед ва
                    чораҳои эҳтиётӣ андешед.

                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • нешро, беҳтараш дар 2-3 дақиқаи аввал, то холӣ шудани халтаи захрнок гирифта партоед, баъд ҷойҳои
                    зарардидаи пустро бо этил ё аммиак шуед.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • муҳосираи (беҳискунӣ) бо маҳлули новокаин.
                </Text>

                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • нешзанандаи сершумор дар назди куттиҳои занбурҳо мушохида мешаванд, ки бо ин ё он сабаб барои
                    ҳифзи лона ба амал меояд. Инчунин: бӯйҳои тез (атр, одеколон, машрубот) барои занбӯрҳои асал ҳамчун
                    ҷалбкунанда амал мекунад.
                </Text>
                <View className={"mx-auto mb-5"}>
                    <Image source={img1} className={"w-96 h-72 rounded-xl"}/>
                </View>
            </View>
        </ScrollView>
    );
};

export default Index;