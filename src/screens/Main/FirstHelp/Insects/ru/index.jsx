import React from 'react';
import {ScrollView, View, Text, Image} from "react-native";
import img1 from './../assets/1.png';

const Index = ({darkMode}) => {
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-2xl text-center font-bold text-red-500"}>
                    НАСЕКОМЫЕ
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Кусающие с целью обороны: пчелы, осы, шмели, шершни, красные муравьи.
                    Кровососущие: комары, москиты, блохи, клещи, клопы, слепни, оводы.
                </Text>
                <Text className={"text-xl text-center font-bold text-red-500"}>
                    ОБЩИЕ СИМПТОМЫ УКУСА НАСЕКОМЫХ:
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • зуд на коже и появляется едва заметная ранка.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • боль, головная боль и головокружение.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Припухлость.
                </Text>

                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Покраснение.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Повышение температуры (местно).
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Появляется сыпь по телу;
                </Text>
                <Text className={"text-xl text-center font-bold text-red-500"}>
                    ПЕРВАЯ МЕДИЦИНСКАЯ ПОМОЩЬ
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • удалить жало пинцетом;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Промыть ранку спиртом или марганцовкой;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • На место укуса наложить холод (лед);
                </Text>

                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Дать 1-2 таблетки супрастина;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Обильное питье.
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Если состояние продолжает ухудшаться, надо обратиться к врачу.
                </Text>
                <Text className={"text-xl text-center font-bold text-red-500"}>
                    ПОМНИ
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Если у тебя повышенная чувствительность к укусам, ты должен иметь при себе необходимые
                    лекарственные препараты и соблюдать меры предосторожности.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Удалить жало, желательно в первые 2-3 мин, пока не произошло опорожнение ядовитого мешочка, затем
                    промывают пораженные участки кожи этиловым или нашатырным спиртом.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Новокаиновая блокада.
                </Text>

                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
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