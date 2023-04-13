import React from 'react';
import { View, Text, Image, ScrollView } from "react-native";
import img1 from './../assets/1.jpg';
import img03 from './../assets/03.jpg';
const Index = () => {
    return (
        <ScrollView>
            <View>
                <Text className={"text-4xl text-center text-red-400 font-bold"}>
                    ЧТО ТАКОЕ ИНСУЛЬТ?
                </Text>
                <Text className={"ml-1 text-base"}>
                    Инсульт - это острое нарушение мозгового кровообращения, вследствие которого часть клеток головного мозга погибает.
                </Text>
                <View className="mx-auto">
                    <Image source={img1} />
                </View>
                <Text className={"text-center text-xl text-blue-600 mt-2"}>
                    В ТВОИХ РУКАХ СПАСТИ ЖИЗНЬ
                </Text>
                <Text className="ml-1 text-base">
                    В большинстве случаев человеку можно спасти жизнь и предотвратить развитие тяжелых последствий инсульта!
                    Для этого необходимо уметь выявить признаки инсульта, и своевременно вызвать «Скорую помощь».
                </Text>
                <View className="mx-auto">
                    <Image source={img03} className="w-32 h-32" />
                </View>
                <Text className={"text-center text-xl text-blue-600 mt-2"}>
                    ПРИЗНАКИ ИНСУЛЬТА:
                </Text>
                <View className="ml-1">
                    <Text className="text-base">
                        - внезапная слабость и онемение в руке или руке и ноге на одной стороне тела;
                    </Text>
                    <Text className="text-base">
                        - внезапное помутнение сознания, нарушение речи или непонимание обращенной речи;
                    </Text>
                    <Text className="text-base">
                        - внезапное онемение губы или половины лица, часто с «перекосом» лица;
                    </Text>
                    <Text className="text-base">
                        - внезапное нарушение зрения в одном или обоих глазах, появление ощущения двоения в глазах;
                    </Text>
                    <Text className="text-base">
                        - внезапное нарушение походки, головокружение, потеря равновесия или координации;
                    </Text>
                    <Text className="text-base">
                        - внезапная сильная головная боль по неизвестной причине.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default Index;