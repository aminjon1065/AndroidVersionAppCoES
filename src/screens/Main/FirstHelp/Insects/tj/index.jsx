import React from 'react';
import {ScrollView, View, Text, Image} from "react-native";
import img1 from './../assets/1.png';
import {FAB} from "react-native-paper";
import onShare from "../../../../../components/onShare";

const Index = ({darkMode}) => {
    const handleShare = async () => {
        const message = '\n' +
            'ҲАШАРОТҲО:\n' +
            'Газидан бо мақсади дифоъ: занбӯри асал, хорнетҳо, мӯрчаҳои сурх.\n' +
            'Хунхорҳо: хомӯшакҳо, магасҳо, бургаҳо, канаҳо, пашшаҳо.\n' +
            'АЛОМАТҲОИ ГАЗИДАНИ ҲАШАРОТ:\n' +
            '• хориш дар пӯст ва захм намоён пайдо мешавад.\n' +
            '• дард, дарди сар ва чарх задани сар.\n' +
            '• варамӣ.\n' +
            '• сурхӣ.\n' +
            '• баландшавии ҳарорат (маҳаллӣ).\n' +
            '• дар бадан доғҳо пайдо мешавад;\n' +
            'ЁРИИ АВВАЛИН:\n' +
            '•\tнешро бо пинцет гирифтан;\n' +
            '•\tЗахмро бо спирт ё перманганати калий шӯед;\n' +
            '•\tБа ҷои газида хунук (ях) молед;\n' +
            '•\tба ҷабрдида 1-2 ҳаб супрастин диҳед;\n' +
            '•\tнӯшокии бисёр.\n' +
            '•\tАгар ҳолати ҷабрдида вазнинтар шавад, ба духтур муроҷиат кунед.\n' +
            'ДАР ХОТИР ДОРЕД:\n' +
            '•\tҳангоми газидани ҳашаротҳо ҳассосият дошта бошед, Шумо бояд доруҳои заруриро бо худ дошта бошед ва чораҳои эҳтиётӣ андешед.\n' +
            '•\tнешро, беҳтараш дар 2-3 дақиқаи аввал, то холӣ шудани халтаи захрнок гирифта партоед, баъд ҷойҳои зарардидаи пустро бо этил ё аммиак шуед.\n' +
            '•\tмуҳосираи (беҳискунӣ) бо маҳлули новокаин.\n' +
            '•\tнешзанандаи сершумор дар назди куттиҳои занбурҳо мушохида мешаванд, ки бо ин ё он сабаб барои ҳифзи лона ба амал меояд. Инчунин: бӯйҳои тез (атр, одеколон, машрубот) барои занбӯрҳои асал ҳамчун ҷалбкунанда амал мекунад.\n'; // Здесь вы можете указать свое сообщение
        await onShare(message);
    };
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
            <View className={"items-end mb-5"}>
                <FAB
                    icon="share"
                    className={" w-36 bg-slate-800 mt-2 text-white"}
                    onPress={handleShare}
                    color={"#fff"}
                    label={"Равон кардан"}
                />
            </View>
        </ScrollView>
    );
};

export default Index;