import React from 'react';
import {ScrollView, View, Text, Image} from "react-native";
import img1 from './../assets/1.png';
import onShare from "../../../../../components/onShare";
import {FAB} from "react-native-paper";

const Index = ({darkMode}) => {
    const handleShare = async () => {
        const message = 'НАСЕКОМЫЕ:\n' +
            'Кусающие с целью обороны: пчелы, осы, шмели, шершни, красные муравьи.\n' +
            'Кровососущие: комары, москиты, блохи, клещи, клопы, слепни, оводы.\n' +
            'ОБЩИЕ СИМПТОМЫ УКУСА НАСЕКОМЫХ:\n' +
            '•\tзуд на коже и появляется едва заметная ранка.\n' +
            '•\tболь, головная боль и головокружение.\n' +
            '•\tПрипухлость.\n' +
            '•\tПокраснение.\n' +
            '•\tПовышение температуры (местно).\n' +
            '•\tПоявляется сыпь по телу;\n' +
            '\n' +
            'ПЕРВАЯ МЕДИЦИНСКАЯ ПОМОЩЬ\n' +
            '•\tудалить жало пинцетом;\n' +
            '•\tПромыть ранку спиртом или марганцовкой;\n' +
            '•\tНа место укуса наложить холод (лед);\n' +
            '•\tДать 1-2 таблетки супрастина;\n' +
            '•\tОбильное питье.\n' +
            '•\tЕсли состояние продолжает ухудшаться, надо обратиться к врачу. \n' +
            'ПОМНИ!\n' +
            '•\tЕсли у тебя повышенная чувствительность к укусам, ты должен иметь при себе необходимые лекарственные препараты и соблюдать меры предосторожности.\n' +
            '•\tУдалить жало, желательно в первые 2-3 мин, пока не произошло опорожнение ядовитого мешочка, затем промывают пораженные участки кожи этиловым или нашатырным спиртом.\n' +
            '•\tНовокаиновая блокада.\n' +
            '•\tМножественные ужаленные пчелами наблюдаются вблизи ульев, когда по тем или иным причинам провоцируется инстинкт защиты гнезда. Не последнюю роль могут играть резкие запахи (духи, одеколон, алкоголь), действующие на пчел как аттрактанты (привлекающие вещества).\n'; // Здесь вы можете указать свое сообщение
        await onShare(message);
    };
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
            <View className={"items-end mb-5"}>
                <FAB
                    icon="share"
                    className={" w-36 bg-slate-800 mt-2 text-white"}
                    onPress={handleShare}
                    color={"#fff"}
                    label={"Поделиться"}
                />
            </View>
        </ScrollView>
    );
};

export default Index;