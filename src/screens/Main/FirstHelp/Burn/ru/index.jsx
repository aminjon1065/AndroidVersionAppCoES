import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native';
import img1 from './../assets/1.jpg'
import img2 from './../assets/2.jpg'
import img3 from './../assets/3.jpg'
function Index() {
    return (
        <ScrollView>
            <View>
                <Text className={"text-4xl text-center text-red-400 font-bold"}>
                    СТЕПЕНИ ОЖОГОВ
                </Text>
                <View className="mx-auto">
                    <Image source={img1} className="w-56 h-56" />
                </View>
                <Text className="text-center text-lg font-bold">
                    I степень – покраснение кожи.
                </Text>
                <Text className="text-base">
                    ПОВРЕЖДЕНИЯ РОГОВОГО СЛОЯ КЛЕТОК КОЖИ. НЕЗНАЧИТЕЛЬНЫЙ ОТЕК И ЖГУЧИЕ БОЛИ, БЫСТРО ПРОХОДЯЩИЕ.
                </Text>
                <View className="mx-auto">
                    <Image source={img2} className="w-56 h-56" />
                </View>
                <Text className="text-center text-lg font-bold">
                    II степень – появление пузырей, заполненных прозрачной жидкостью.
                </Text>
                <Text className="text-base">
                    ОБОЖЖЕННАЯ КОЖА – ИНТЕНСИВНО КРАСНОГО ЦВЕТА. ПУЗЫРИ НАПОЛНЕНЫ ПРОЗРАЧНОЙ ЖИДКОСТЬЮ. РЕЗКАЯ БОЛЬ.
                </Text>
                <View className="mx-auto">
                    <Image source={img3} className="w-56 h-44" />
                </View>
                <Text className="text-center text-lg font-bold">
                    III – IV степени – полное разрушение кожи и подлежащего мышечного слоя.
                </Text>
                <Text className="text-base">
                    ПОВРЕЖДЕНИЯ БОЛЕЕ ГЛУБОКИХ СЛОЕВ КОЖИ. ОБРАЗУЮТСЯ ПУЗЫРИ И КОРОЧКИ-СТРУПЬЯ.
                    ОБУГЛИВАНИЕ КОЖИ, ПОДКОЖНОЙ КЛЕТЧАТКИ И ПОДЛЕЖАЩИХ ТКАНЕЙ ВПЛОТЬ ДО КОСТЕЙ.
                </Text>
            </View>
        </ScrollView>
    )
}

export default Index