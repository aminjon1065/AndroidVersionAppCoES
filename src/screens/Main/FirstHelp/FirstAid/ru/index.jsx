import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native';
import img1 from './../assets/1.jpg'
function Index() {
    return (
        <ScrollView>
            <View>
                <Text className={"text-4xl text-center text-red-400 font-bold"}>
                    ПЕРВАЯ ПОМОЩЬ УТОПАЮЩЕМУ.
                </Text>
                <Text className="text-base ml-1">
                    Главная проблема, с которой сталкиваются люди спасающие жизнь человека в воде это страх утопающего, который может стоить жизни даже спасателю. Находясь в панике, пострадавший может отправить вас ко дну! Вы должны учитывать это обстоятельство при спасении на воде.
                </Text>
                <View className="mx-auto">
                    <Image source={img1} className=" h-44 w-64" />
                </View>
                <Text className="text-lg text-blue-600 text-center">
                    ВИДЫ УТОПЛЕНИЙ
                </Text>
                <View className="ml-1">
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
                <Text className="text-lg text-blue-600 text-center">
                    - Спасая человека в воде вы должны:
                </Text>
                <View className="ml-1">
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
            </View>
        </ScrollView>
    )
}

export default Index