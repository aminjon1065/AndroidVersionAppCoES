import React from 'react';
import {Image, ScrollView, Text, View} from "react-native";
import img1 from './../assets/1.jpg';
import img2 from './../assets/2.jpg';
import img3 from './../assets/3.jpg';
import img4 from './../assets/4.jpg';
import img5 from './../assets/5.jpg';
import img6 from './../assets/6.jpg';
import img7 from './../assets/7.jpg';

const Index = () => {
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-2xl font-bold text-red-500 text-center mb-5"}>
                    ЁРИИ АВВАЛИН ҲАНГОМИ ҶИСМҲОИ БЕГОНА.
                    НИШОНАҲО:
                </Text>
                <View className={"mx-auto"}>
                    <Image source={img1} className={"w-64 h-64"}/>
                </View>
                <Text className={"text-xl text-center mb-5 "}>
                    КУШИШИ СУЛФАИ ТАСОДУФӢ
                </Text>

                <View className={"mx-auto"}>
                    <Image source={img2} className={"w-64 h-64"}/>
                </View>
                <Text className={"text-xl text-center mb-5 "}>
                    МУШТ ДАР БАЙНИ ТАХТАПУШТ
                </Text>
                <View className={"mx-auto mb-5"}>
                    <Image source={img3} className={"w-64 h-64"}/>
                </View>
                <Text className={"text-xl text-center"}>
                    БА ШИКАМИ ОН ФИШОР ДЕҲ
                </Text>
                <View className={"mx-auto"}>
                    <Image source={img4} className={"w-64 h-64"}/>
                    <Image source={img5} className={"w-64 h-64"}/>
                </View>
                <Text className={"text-xl text-center"}>
                    ЗАРБАҲО БА ПУШТ
                </Text>
                <View className={"mx-auto"}>
                    <Image source={img6} className={"w-64 h-64"}/>
                </View>
                <Text className={"text-xl text-center"}>
                    ФИШОР ДОДАН БА ҚАФАСИ СИНА
                </Text>
                <View className={"mx-auto"}>
                    <Image source={img7} className={"w-64 h-64"}/>
                </View>
            </View>
        </ScrollView>
    );
};

export default Index;