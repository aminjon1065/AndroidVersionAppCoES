import React from 'react';
import {Image, ScrollView, Text, View} from "react-native";
import img from './../assets/1.jpeg';

const Index = ({darkMode}) => {
    return (
        <ScrollView>
            <View>
                <Text className={"text-4xl text-center text-red-400 font-bold"}>
                    ГАЗИДАНИ САГ.
                </Text>
                <Text className={"ml-0.5 text-red-500 text-xl"}>
                    Амалҳо ҳангоми газидани саг:
                </Text>
                <Text className={`text-base ml-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Ҷароҳатҳоро табобат кунед. Агар шуморо саг газида бошад, хатто хурдтарин захмҳоро фавран табобат
                    кардан лозим аст, зеро газидани сагҳо боиси сироят шуданаш мумкин аст.
                </Text>
                <Text className={"ml-0.5 text-red-500 text-xl"}>
                    Бо ҷоӣи захмшуда чунин корҳо ба анҷом расонида шавад:
                </Text>
                <Text className={`text-base ml-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Барои боздоштани хунравии ночиз ба ҷои осебдида аз латтаи тоза ё докаи стерилизатсияшуда истифода
                    баред.
                </Text>
                <Text className={`text-base ml-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Агар хунравӣ шадид бошад ё пас аз гузоштани бинт қатъ нашавад, ба духтур муроҷиат кунед.
                </Text>
                <Text className={`text-base ml-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Ҷароҳатро шӯед. Майдони зарардидаро бо собун ва оби гарм шуед.
                </Text>
                <Text className={`text-base ml-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Бо бинт бандед. Аз пластрҳои хурд (барои захмҳои хурд) ё бинти тоза (барои захмҳои калон) истифода
                    баред.
                </Text>
                <Text className={`text-base ml-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Ҷароҳатҳоро барои нишонаҳои сироят, аз ҷумла сурхӣ, гармӣ, нармӣ ва чирк тафтиш кунед. Агар шумо
                    яке аз ин нишонаҳо дошта бошед, ба духтур муроҷиат кунед.
                </Text>
                <Text className={`text-base ml-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Ба духтур муроҷиат кунед. Агар шуморо саги ношинос газида бошад, саге, ки аз даҳонаш кафк
                    мебарояд ва ё саге, ки гирифтори бемории ҳорӣ аст, шумо бояд фавран ба духтур муроҷиат кунед, то
                    касалиро табобат кунед (ин беморӣ метавонад боиси марг гардад).
                </Text>
                <View className={" ml-0 w-12"}>
                    <Image source={img}/>
                </View>
                <Text className={"ml-0.5 text-red-500 text-xl"}>
                    Чӣ бояд кард, агар саг ба ҳамла омода бошад:
                </Text>
                <Text className={`text-base ml-1 ${darkMode ? 'text-white' : 'text-slate-950'} mb-32`}>
                    Остановиться и давать команды твердым голосом: «Место!», «Стоять!», «Сидеть!» или «Фу!». В некоторых
                    случаях срабатывает ряд команд, приводящих животное в замешательство. Для защиты используйте зонт,
                    камни, палки, при этом отступайте спиной к укрытию, забору или дому и зовите на помощь окружающих.
                    Если
                    возможно, оберните плащ или куртку вокруг предплечья и руки, а затем, выставив его вперед,
                    спровоцируйте
                    собаку на укус и сильно ударьте собаку по верхней челюсти. Помните, что у собаки болевые точки: нос,
                    пах
                    и язык.
                </Text>
            </View>
        </ScrollView>
    );
};

export default Index;