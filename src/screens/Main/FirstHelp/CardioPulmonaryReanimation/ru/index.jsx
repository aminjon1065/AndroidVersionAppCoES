import React from 'react';
import {View, Text, Image, ScrollView} from "react-native";
import image1 from './../assets/1.jpg'
import image2 from './../assets/2.jpg'
import image3 from './../assets/3.jpg'
import image4 from './../assets/4.jpg'

const Index = () => {
    return (
        <ScrollView>
            <View>
                <Text className={"text-4xl text-center text-red-400 font-bold"}>
                    СЕРДЕЧНО-ЛЕГОЧНАЯ РЕАНИМАЦИЯ
                </Text>
                <Text className="text-center text-blue-600 text-xl">
                    ЧТО НЕОБХОДИМО ЗНАТЬ О СЕБЕ?
                </Text>
                <Text className={"ml-1 text-base"}>
                    Для взрослого человека:
                </Text>
                <Text className={"ml-2 text-base"}>
                    - Частота дыхания в норме – 12-18 вдохов в 1 мин
                </Text>
                <Text className={"ml-2 text-base"}>
                    - Частота сердечных сокращений 69-80 в 1 мин
                </Text>
                <Text className={"ml-2 text-base"}>
                    - Величина артериального давления 120/80мм.рт.ст.
                </Text>
                <Text className="text-center text-blue-600 text-xl">
                    УСТАНОВЛЕНИЕ ФАКТА ОСТАНОВКИ КРОВООБРАЩЕНИЯ
                </Text>
                <View className={"mx-auto"}>
                    <Image source={image1}/>
                </View>
                <Text className={"text-center text-base"}>
                    Отсутствие сознания
                </Text>
                <View className={"mx-auto"}>
                    <Image source={image2}/>
                </View>
                <Text className={"text-center text-base"}>
                    Отсутствие дыхания
                </Text>
                <View className={"mx-auto"}>
                    <Image source={image3} className={"w-32 h-32"}/>
                </View>
                <Text className={"ml-1 text-base text-center"}>
                    Отсутствие пульса на сонных артериях:
                </Text>
                <Text className={"ml-2 text-base text-center"}>
                    1 Изменение цвета кожных покровов
                </Text>
                <Text className={"ml-2 text-base text-center"}>
                    2 Расширение зрачка
                </Text>
                <View className={"mx-auto"}>
                    <Image source={image4} className={"w-32 h-32"}/>
                </View>
                <Text className={"text-center"}>
                    Проверить наличие сознания (окликнуть пострадавшего, потрясти за плечо.
                </Text>
            </View>
        </ScrollView>
    );
};
export default Index;