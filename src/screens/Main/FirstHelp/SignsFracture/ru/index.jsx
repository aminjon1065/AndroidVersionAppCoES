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
                    ПРИЗНАКИ ПЕРЕЛОМА
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - Болезненные ощущения в месте перелома при обездвиженном состоянии или во время движений. Также,
                    если сделать осевую нагрузку, то боль усиливается
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - Отечность в месте перелома может возникнуть быстро (в течение 15 минут после травмы) или
                    развиваться в течение нескольких часов.
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - Гематома. Она может и отсутствовать, но зачастую все же возникает на месте перелома, при чем не
                    всегда сразу. Если она пульсирует, значит, кровотечение продолжается.
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - Ограничение подвижности. Как правило, поврежденная часть не может функционировать либо вовсе, либо
                    частично.
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - может наблюдаться движение кости не в области сустава
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - Деформация конечности или неестественная подвижность сустава.
                </Text>
                <Text className={"text-blue-600 text-center text-xl"}>
                    ПОРЯДОК ДЕЙСТВИЙ ПРИ НАЛИЧИИ РАНЫ:
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - ОСТАНОВИТЬ КРОВОТЕЧЕНИЕ;
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - ОСВОБОДИТЬ ОТ ОДЕЖДЫ;
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - ЗАКРЫТЬ СТЕРИЛЬНОЙ ПОВЯЗКОЙ;
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - ВВЕСТИ ОБЕЗБОЛИВАЮЩЕЕ СРЕДСТВО (если пострадавший в сознании);
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - ПРИСТУПИТЬ К ИММОБИЛИЗАЦИИ.
                </Text>
                <ScrollView horizontal={true} className={"mb-5"}>
                    <Image source={img1} classname={"w-56 h-56"}/>
                </ScrollView>
                <Text className={"text-blue-600 text-center text-xl"}>
                    ИММОБИЛИЗАЦИЯ: НИЖНИЕ КОНЕЧНОСТИ.
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