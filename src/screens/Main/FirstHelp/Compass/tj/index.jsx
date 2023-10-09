import React from 'react';
import {Image, ScrollView, Text, View} from "react-native";
import Compass from "../../../../../components/Compass";
import compassInMap from './../assets/a_compass_is_on_the_map.jpg';
const Index = ({darkMode}) => {
    return (
        <ScrollView>
            <Image source={compassInMap} className={"rounded mx-auto w-[90%]"} />
            <View className={"pl-2"}>
                <Text className={`text-lg ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    <Text className={"text-red-500 font-bold text-2xl text-center"}>Истифода бурдани қутбнамо </Text>
                </Text>
                <Text className={"text-base font-bold"}>1.Шиносои бо қутбнамои Шумо.</Text>
                <Text>
                    Тирчаи сурх одатан ба шимол нишон медиҳад.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    1. Шимоли магнитиро муайян кунед: Пеш аз истифодаи қутбнамо, шумо бояд шимоли магнитиро муайян
                    кунед. Барои ин шумо метавонед нишондиҳандаҳои магнитиро дар қутбнамо истифода баред ё харитаро
                    истифода баред ки дар он самтхои магнитй нишон дода шудаанд.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    2. Қутбнаморо тоб диҳед: барои муайян кардани самт шумо бояд қутбнаморо тавре тоб диҳед, ки
                    тир ба шимоли магнитӣ ишора намояд.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    3.Истифода бо харита: Вақте ки шумо шимоли магнитиро муайян кардед, шумо метавонед харитаро тарзе монед
                    то ки он ба маҳали будаатон мувофик бошад. Барои ин кор, ба шумо лозим аст, ки харитаро тоб диҳед, то ки
                    самти махал ба самти қутбнамо мувофиқ гардад.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    4. Самтро муайян кунед: Шумо метавонед харитаро тоб дода самтро муайян кунед.
                    Шумо метавонед ба аломатҳои дар харита овардашуда муроҷиат кунед.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    5. Ба самт пайравӣ кунед: Вақте ки шумо самтро муайян кардед, шумо бояд онро риоя кунед,
                    истифода бурдани қутбнамо ҳатмист. Дар ин сурат ҳолатҳою монеаҳои табииро ба назар гирифтан лозим аст,
                    монеахое монанди дарёхо, куххо ва чангалхо.
                </Text>
                <Text className={`text-lg ${darkMode ? 'text-white' : 'text-slate-950'} mb-32`}>
                    Дар хотир доштан муҳим аст, ки истифодаи қутбнамо малака ва дониши муайянро талаб мекунад. Агар малакаи шумо бораи истифодаи қутбнамо хуб надобшад,
                    беҳтар аст, ки аз роҳбалади ботаҷриба кӯмак пурсед.
                </Text>
            </View>
        </ScrollView>
    );
};

export default Index;