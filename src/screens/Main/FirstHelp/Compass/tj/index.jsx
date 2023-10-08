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
                    Самти махал ба самти қутбнамо мувофиқ гардад.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    4.Определите направление: после того, как вы ориентировали карту, вы можете определить направление,
                    которое вам необходимо пройти. Для этого нужно обратиться к маркировке на карте или определить
                    направление по горизонту.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    5.Следуйте по направлению: после того, как вы определили направление, необходимо следовать по нему,
                    используя компас в качестве ориентира. При этом нужно учитывать местность и естественные
                    препятствия, такие как реки, горы и леса.
                </Text>
                <Text className={`text-lg ${darkMode ? 'text-white' : 'text-slate-950'} mb-32`}>
                    Важно помнить, что использование компаса требует определенных навыков и знаний. Если вы не уверены в
                    своих способностях, лучше обратиться за помощью к опытному гиду или специалисту по ориентированию в
                    горах.
                </Text>
            </View>
        </ScrollView>
    );
};

export default Index;