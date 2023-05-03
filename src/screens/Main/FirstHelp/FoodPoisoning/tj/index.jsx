import React from 'react';
import {ScrollView, View, Text, Image} from "react-native";
import img from './../assets/1.jpg';

const Index = ({darkMode}) => {
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-center font-bold text-red-500 text-2xl"}>
                    ЗАҲРОЛУДШАВӢ АЗ ҒИЗО.
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Заҳролудшавӣ аз ғизо метавонад, аз намудҳои гуногуни микробҳо ба вуҷуд ояд.
                </Text>
                <Text className={"text-xl text-center font-bold text-blue-600"}>
                    Аломатҳои заҳролудшавӣ:
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Беҳолшавии умумӣ.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Овоз ва дард дар шикам.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Дилбеҳузурӣ.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Қайкунӣ.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Наҷосати зуд-зуд - дар намуди биринҷоба, бо омехтаи луоб, баъзан бо хун.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Дардҳои кашишхуранда дар шикам.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Баландшавии эҳтимолии ҳарорати бадан.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Дард ва сарчархзании сар ва беҳолии шадид.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Ташнагӣ.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Сафедшавии пӯст.
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Беҳушӣ (дар ҳолатҳои вазнин).
                </Text>
                <Text className={"text-center font-bold text-red-500 text-2xl"}>
                    ЁРИИ АВВАЛИН ҲАНГОМИ ЗАҲРОЛУДШАВӢ АЗ ҒИЗО.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Меъдаи ҷабрдидаро фавран бо роҳи қайкунӣ бо об шуст: ба ӯ тақрибан 1 литр об нӯшедонед (бо маҳлули
                    каме гулобии перманганати калий (перманганати калий), агар бемории ботулизм бошад - маҳлули содаи
                    2%) ва қайкуниро ба вуҷуд оред. кафои гулӯ ва решаи забонро озор диҳед. Ба ҷабрдида ангишти
                    фаъолшуда ба андозаи 0,5-1 г ба 10 кг вазни ӯ диҳед.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    1. Як исҳолкунандаи шӯр (масалан, сулфати магний) диҳед.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    2. Клизмаи тозакунанда гузаронед.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    3. Ба миқдори зиёд оби гарм диҳед.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    4. Аз ҳама гуна хӯрок худдорӣ кунед.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Агар чораҳои андешидашуда самарабахш набошанд, ҳолати бемор бадтар шавад ва ҳангоми нишонаҳои
                    аввалини ботулизм фавран ёрии таъҷилӣ даъват кунед.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Дар ҳолати беҳушӣ, вале ҷабрдида набз ва нафаскашӣ дорад, дар ҷойи ҳамвор хобонед, ки ба ӯ имкон
                    медиҳад, ки озод нафас кашад ва имкони нафасгирӣ ё нафаскашии қайкуниро пешгирӣ кунад. Ин мавқеъ бо
                    шикам хобидан ва сар ба паҳлӯ мебошад.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Агар дили ҷабрдида аз кор монда бошаду, нафас накашад, фавран ба нафасдиҳии сунъӣ шурӯъ намоед.
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Хӯрокҳои боқимондаеро, ки боиси заҳролудшавӣ шудааст, ба духтур супоред.
                </Text>
                <Text className={"text-center font-bold text-red-500 text-2xl"}>
                    БО ЗАҲРОЛУДШАВӢ АЗ ҒИЗО ЧӢ КОР КАРДАН МУМКИН НЕСТ.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Ҷабрдидаро танҳо нагузоред.
                    Ҷабрдидаро бе ёрии аввал нагузоред, ки ин метавонад боиси афзоиши заҳролудшавӣ, рушди босуръати
                    нокомии дил ва ҳатто марг гардад.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Ҳар гуна хӯрокро барои 1-2 рӯз нахӯред.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Доруҳои дардкамкунанда истеъмол накунед.
                </Text>
                <View className={"mx-auto"}>
                    <Image source={img} className={"w-96 h-96"}/>
                </View>
            </View>
        </ScrollView>
    );
};

export default Index;