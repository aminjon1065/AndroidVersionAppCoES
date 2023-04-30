import React from 'react';
import {ScrollView, View, Text, Image} from "react-native";
import img1 from './../assets/1.png';

const Index = () => {
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-2xl text-center font-bold text-red-500"}>
                    ҲАШАРОТҲО:
                </Text>
                <Text className={"text-base mb-5"}>
                    Газидан бо мақсади дифоъ: занбӯри асал, хорнетҳо, мӯрчаҳои сурх.
                    Хунхорҳо: хомӯшакҳо, магасҳо, бургаҳо, канаҳо, пашшаҳо.
                </Text>
                <Text className={"text-xl text-center font-bold text-red-500"}>
                    АЛОМАТҲОИ ГАЗИДАНИ ҲАШАРОТ:
                </Text>
                <Text className={"text-base"}>
                    • хориш дар пӯст ва захм намоён пайдо мешавад.
                </Text>
                <Text className={"text-base"}>
                    • дард, дарди сар ва чарх задани сар.
                </Text>
                <Text className={"text-base"}>
                    • варамӣ.
                </Text>

                <Text className={"text-base"}>
                    • сурхӣ.
                </Text>
                <Text className={"text-base"}>
                    • баландшавии ҳарорат (маҳаллӣ).
                </Text>
                <Text className={"text-base mb-5"}>
                    • дар бадан доғҳо пайдо мешавад;
                </Text>
                <Text className={"text-xl text-center font-bold text-red-500"}>
                    ЁРИИ АВВАЛИН:
                </Text>
                <Text className={"text-base"}>
                    • нешро бо пинцет гирифтан;
                </Text>
                <Text className={"text-base"}>
                    • Захмро бо спирт ё перманганати калий шӯед;
                </Text>
                <Text className={"text-base"}>
                    • Ба ҷои газида хунук (ях) молед;
                </Text>

                <Text className={"text-base"}>
                    • ба ҷабрдида 1-2 ҳаб супрастин диҳед;
                </Text>
                <Text className={"text-base"}>
                    • нӯшокии бисёр.
                </Text>
                <Text className={"text-base mb-5"}>
                    • Агар ҳолати ҷабрдида вазнинтар шавад, ба духтур муроҷиат кунед.
                </Text>
                <Text className={"text-xl text-center font-bold text-red-500"}>
                    ДАР ХОТИР ДОРЕД:
                </Text>
                <Text className={"text-base"}>
                    • ҳангоми газидани ҳашаротҳо ҳассосият дошта бошед, Шумо бояд доруҳои заруриро бо худ дошта бошед ва
                    чораҳои эҳтиётӣ андешед.

                </Text>
                <Text className={"text-base"}>
                    • нешро, беҳтараш дар 2-3 дақиқаи аввал, то холӣ шудани халтаи захрнок гирифта партоед, баъд ҷойҳои
                    зарардидаи пустро бо этил ё аммиак шуед.
                </Text>
                <Text className={"text-base"}>
                    • муҳосираи (беҳискунӣ) бо маҳлули новокаин.
                </Text>

                <Text className={"text-base"}>
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