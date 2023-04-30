import React from 'react';
import {ScrollView, View, Text, Image} from "react-native";
import img1 from './../assets/1.png';

const Index = () => {
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-2xl text-center font-bold text-red-500"}>
                    НАСЕКОМЫЕ
                </Text>
                <Text className={"text-base mb-5"}>
                    Кусающие с целью обороны: пчелы, осы, шмели, шершни, красные муравьи.
                    Кровососущие: комары, москиты, блохи, клещи, клопы, слепни, оводы.
                </Text>
                <Text className={"text-xl text-center font-bold text-red-500"}>
                    ОБЩИЕ СИМПТОМЫ УКУСА НАСЕКОМЫХ:
                </Text>
                <Text className={"text-base"}>
                    • зуд на коже и появляется едва заметная ранка.
                </Text>
                <Text className={"text-base"}>
                    • боль, головная боль и головокружение.
                </Text>
                <Text className={"text-base"}>
                    • Припухлость.
                </Text>

                <Text className={"text-base"}>
                    • Покраснение.
                </Text>
                <Text className={"text-base"}>
                    • Повышение температуры (местно).
                </Text>
                <Text className={"text-base mb-5"}>
                    • Появляется сыпь по телу;
                </Text>
                <Text className={"text-xl text-center font-bold text-red-500"}>
                    ПЕРВАЯ МЕДИЦИНСКАЯ ПОМОЩЬ
                </Text>
                <Text className={"text-base"}>
                    • удалить жало пинцетом;
                </Text>
                <Text className={"text-base"}>
                    • Промыть ранку спиртом или марганцовкой;
                </Text>
                <Text className={"text-base"}>
                    • На место укуса наложить холод (лед);
                </Text>

                <Text className={"text-base"}>
                    • Дать 1-2 таблетки супрастина;
                </Text>
                <Text className={"text-base"}>
                    • Обильное питье.
                </Text>
                <Text className={"text-base mb-5"}>
                    • Если состояние продолжает ухудшаться, надо обратиться к врачу.
                </Text>
                <Text className={"text-xl text-center font-bold text-red-500"}>
                    ПОМНИ
                </Text>
                <Text className={"text-base"}>
                    • Если у тебя повышенная чувствительность к укусам, ты должен иметь при себе необходимые
                    лекарственные препараты и соблюдать меры предосторожности.
                </Text>
                <Text className={"text-base"}>
                    • Удалить жало, желательно в первые 2-3 мин, пока не произошло опорожнение ядовитого мешочка, затем
                    промывают пораженные участки кожи этиловым или нашатырным спиртом.
                </Text>
                <Text className={"text-base"}>
                    • Новокаиновая блокада.
                </Text>

                <Text className={"text-base"}>
                    • Множественные ужаленные пчелами наблюдаются вблизи ульев, когда по тем или иным причинам
                    провоцируется инстинкт защиты гнезда. Не последнюю роль могут играть резкие запахи (духи, одеколон,
                    алкоголь), действующие на пчел как аттрактанты (привлекающие вещества).
                </Text>
                <View className={"mx-auto mb-5"}>
                    <Image source={img1} className={"w-96 h-72 rounded-xl"}/>
                </View>
            </View>
        </ScrollView>
    );
};

export default Index;