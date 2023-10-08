import React from 'react';
import {ScrollView, View, Text, Image} from "react-native";
import Compass from "../../../../../components/Compass";
import compassInMap from "../assets/a_compass_is_on_the_map.jpg";
const Index = ({darkMode}) => {
    return (
        <ScrollView>
            <Image source={compassInMap} className={"rounded mx-auto w-[90%]"} />
            <View className={"pl-2"}>
                <Text className={`text-lg ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    <Text className={"text-red-500 font-bold text-2xl text-center"}>Использование компаса </Text>
                </Text>
                <Text className={"text-lg font-bold"}>1.Ознакомьтесь с вашим компасом.</Text>
                <Text>
                    Стрелка, окрашенная в красный цвет, обычно указывает на север.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    1. Определите магнитный север: перед использованием компаса необходимо определить магнитный север на
                    местности. Для этого можно воспользоваться магнитными указателями на компасе или использовать карту,
                    на которой указаны магнитные направления.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    2.Поверните компас: для определения направления на местности необходимо повернуть компас так, чтобы
                    стрелка указывала на магнитный север.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    3.Ориентируйте карту: после того, как вы определили магнитный север, вы можете ориентировать карту
                    так, чтобы она соответствовала местности. Для этого необходимо повернуть карту так, чтобы
                    направление на местности соответствовало направлению на компасе.
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