import React from 'react'
import {View, Text, Image, ScrollView} from 'react-native';
import img1 from './../assets/1.jpg'
import img2 from './../assets/2.jpg'
import img3 from './../assets/3.png'

function Index() {
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-4xl text-center text-red-400 font-bold"}>
                    ПЕРВАЯ ПОМОЩЬ УТОПАЮЩЕМУ.
                </Text>
                <Text className="text-base ml-1">
                    Главная проблема, с которой сталкиваются люди спасающие жизнь человека в воде это страх утопающего,
                    который может стоить жизни даже спасателю. Находясь в панике, пострадавший может отправить вас ко
                    дну! Вы должны учитывать это обстоятельство при спасении на воде.
                </Text>
                <View className="mx-auto">
                    <Image source={img1} className=" h-44 w-64"/>
                </View>
                <Text className="text-lg text-blue-600 text-center">
                    ВИДЫ УТОПЛЕНИЙ
                </Text>
                <View className="mb-2">
                    <Text className="text-base">
                        1 - «Сухое» из-за спазма гортани
                    </Text>
                    <Text className="text-base">
                        2 - Утопление в пресной воде
                    </Text>
                    <Text className="text-base">
                        3 - Утопление в солёной воде
                    </Text>
                </View>
                <Text className="text-xl text-blue-600 text-center">
                    - Спасая человека в воде вы должны:
                </Text>
                <View className="mb-2">
                    <Text className="text-base">
                        - Подплывать к пострадавшему сзади.
                    </Text>
                    <Text className="text-base">
                        - Осуществлять захват утопающего за волосы или часть одежды (например, воротник).
                    </Text>
                    <Text className="text-base">
                        - Доставить утопающего на берег на спине, зафиксировав его голову над водой.
                    </Text>
                </View>
                <View className={"mb-2"}>
                    <Text className="text-lg text-blue-600 text-center">
                        ПРИЗНАКИ:
                    </Text>
                    <Text className={"text-base"}>
                        • Потеря сознания, отсутствие дыхания и кровообращения
                    </Text>
                    <Text className={"text-base"}>
                        • Синюшность или бледность кожи. Холодное на ощупь тело
                    </Text>
                    <Text className={"text-base"}>
                        • Выделение изо рта или носа воды или пенистой жидкости
                    </Text>
                    <Text className={"text-base"}>
                        • Отсутствие рефлексов (реакции зрачков на свет)
                    </Text>
                </View>
                <View className={"mb-2"}>
                    <Text className="text-lg text-blue-600 text-center">
                        ПЕРВАЯ ПОМОЩЬ УТОПАЮЩЕМУ
                    </Text>
                    <Text className={"text-base"}>
                        1. Перенести тело от воды на безопасное расстояние.
                    </Text>
                    <Text className={"text-base"}>
                        2. Проверить наличие пульса на сонной артерии.
                    </Text>
                    <Text className={"text-base"}>
                        3. При отсутствии пульса – приступить к реанимации.
                    </Text>
                    <Text className={"text-base"}>
                        4. Если появился пульс и дыхание перенести пострадавшего в теплое помещение.
                    </Text>
                    <Text className={"text-base"}>
                        5. Переодеть в сухую одежду.
                    </Text>
                    <Text className={"text-base mb-2"}>
                        6. Дать теплое питьё.
                    </Text>
                    <ScrollView horizontal={true}>
                        <Image source={img2} />
                        <Image source={img3} />
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    )
}

export default Index