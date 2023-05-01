import React from 'react';
import {ScrollView, View, Text, Image} from "react-native";
import img1 from './../assets/1.jpg';
import img2 from './../assets/2.jpg';
import img3 from './../assets/3.jpg';
import img4 from './../assets/4.jpg';

const Index = ({darkMode}) => {
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={`text-red-500 font-bold text-2xl text-center`}>
                    НИШОНАҲОИ ШИКАСТИ УСТУХОН:
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - Дард дар ҷои шикаста ҳангоми ҳаракат. ҷунбонда натавонистани дасту пой. ихтилоли шакл ва дарозии
                    он мебошанд.

                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - Варам дар ҷои шикаста метавонад зуд (дар давоми 15 дақиқа пас аз ҷароҳат) ё дар тӯли якчанд соат
                    пайдо мешавад.
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - Хуномос (гематома) ҷамшавии маҳдуди хун - метавонад вуҷуд надошта бошад, аммо аксар вақт дар ҷойи
                    шикаст на ҳамеша рух диҳад. Агар набз дошта бошад, пас хунравӣ идома меёбад.
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - Маҳдудияти ҳаракат.
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - Ҳаракати устухон метавонад аз минтақаи буғум дур бошад.
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - Тазйиқ хурдан (Деформатсия) дар натиҷаи таъсир овардани қувваи ин ё он дараҷа, яъне андоза ё шакли
                    дасту пойҳо ё ҳаракати ғайритабиии буғумҳо. </Text>
                <Text className={"text-blue-600 text-center text-xl"}>
                    ЁРИИ АВВАЛИН ҲАНГОМИ ШИКАСТИ УСТУХОНҲО:
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - манъ намудани хунравӣ;
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - кашидани либоси ҷабрдида дар ҷойи захм;
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - бо бандинаи тоза пушидани захм;
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - доруҳои дардкамкунанда диҳед, агар ҷабрдида ҳуш дошта бошад;
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - интиқоли ҷабрдида.
                </Text>
                <ScrollView horizontal={true} className={"mb-5"}>
                    <Image source={img1} classname={"w-56 h-56"}/>
                </ScrollView>
                <Text className={"text-blue-600 text-center text-xl"}>
                    ИНТИҚОЛ (ИММОБИЛИЗАЦИЯ) – И ПОЙҲО.
                </Text>
                <View className={"mx-auto"}>
                    <Image source={img2} className={"w-96 h-48"}/>
                </View>
                <View className={"mx-auto"}>
                    <Image source={img3} className={"w-96 h-36"}/>
                </View>
                <View className={"mx-auto"}>
                    <Image source={img4} className={"w-96 h-28"}/>
                </View>
            </View>
        </ScrollView>
    );
};

export default Index;