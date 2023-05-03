import React from 'react';
import {ScrollView, View, Text, Image} from "react-native";
import img1 from './../assets/1.jpg';
import img2 from './../assets/2.jpg';

const Index = ({darkMode}) => {
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-2xl text-center font-bold text-red-500"}>
                    ОФТОБЗАНӢ
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Офтобзанӣ– ин як намуди гармозанӣ мебошад, ки бо таъсири нурҳои ултробунафши офтоб ба организми
                    инсон, хусусан ба мағзи сар ва системаи хунгарди он таъсири манфӣ мерасонад.
                </Text>
                <Text className={"text-xl text-center font-bold text-red-500"}>
                    Нишонаҳои офтобзанӣ:
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Сурхшавии рўй ва умуман тамоми бадан
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Дарди сар
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Сарчархзанӣ
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Беҳолӣ
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Дилбеҳузарӣ ва қайкунӣ
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Тез шудани тапиши дил
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Араққунии бадан
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Баланд шудани ҳарорат
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Нафасгирии зуд-зуд
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Хушкшавии пўст
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Хунравӣ аз бинӣ
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Дар базе ҳолатҳо беҳушави ба назар мерасад
                </Text>
                <Text className={"text-xl text-center font-bold text-red-500"}>
                    ПЕШГИРИИ АЗ ОФТОБЗАНӢ:
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Сару либос бояд пахтагину равшан бошад.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Бисёр об нушидан
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Ҳангоми бисёр нушидани об аз бадан арақи зиёд хориҷ мешавад ва ин ҳолат Шуморо аз нурҳои офтоб андозае эмин нигоҳ медорад.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Тақрибан аз соати 11 то 16 ба ҳавои гарм набароед, дар сурати зарур аст кулоҳ пушед ё чатр бигиред.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Дар айёми гармо обро бисёр нўшед на камтар аз 2-2,5 л дар як шабонарўз.
                </Text>

                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Ҳангоми саёҳат дар рўзи офтоби хўроки серавған ва серғизо истеъмол накунед.
                </Text>
                <View className={"mx-auto"}>
                    <Image source={img1} className={"w-96 h-60"}/>
                </View>
                <View className={"mx-auto"}>
                    <Image source={img2} className={"w-96 h-56"}/>
                </View>
            </View>
        </ScrollView>
    );
};

export default Index;