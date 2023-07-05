import React from 'react';
import {Image, ScrollView, Text, View} from "react-native";
import imgT from './../assets/11.jpg'
import imgTT from './../assets/12.jpg'
import imgT1 from './../assets/Рисунок1.jpg'
import imgT2 from './../assets/Рисунок2.jpg'
import {FAB} from "react-native-paper";
import onShare from "../../../../../components/onShare";

const Index = ({darkMode}) => {
    const handleShare = async () => {
        const message = 'Истечение крови из поврежденного сосуда называется кровотечением. \n' +
            'Рана - нарушение целостности кожи и слизистых оболочек. \n' +
            'При ранении могут быть также повреждены мышцы, сосуды, нервные волокна, внутренние органы.\n' +
            'Виды кровотечений.\n' +
            '\tАртериальное\n' +
            '•\tКровь ярко-алого цвета.\n' +
            '•\tБьет из раны фонтаном.\n' +
            '\tВенозное\n' +
            '•\tКровь темно-вишневого цвета.\n' +
            '•\tТечет из раны потоком.\n' +
            '\tКапиллярное\n' +
            '•\tПри небольших порезах; кровь медленно сочится из раны.\n' +
            'ОСТАНОВКА АРТЕРИАЛЬНОГО КРОВОТЕЧЕНИЯ.\n' +
            '1. Выполнить пальцевое прижатие сосуда выше раны;\n' +
            '2. Наложить жгут, стерильную повязку или закрутку на поврежденный сосуд;\n' +
            '3. Наложить стерильную давящую повязку и максимально согнуть поврежденную конечность;\n' +
            '4. Дать обезболивающее;\n' +
            '5. Доставить в больницу.\n' +
            'ОСТАНОВКА ВЕНОЗНОГО КРОВОТЕЧЕНИЯ.\n' +
            '1.Обработать края раны йодом;\n' +
            '2.Приготовить и наложить на рану стерильную салфетку;\n' +
            '3.Туго перебинтовать рану;\n' +
            '4.Продезинфицировать кожу вокруг раны;\n' +
            '5.Наложить стерильную, давящую повязку;\n' +
            '6.Дать обезболивающее;\n' +
            '6.Доставить в больницу.\n' +
            'ОСТАНОВКА КАПИЛЛЯРНОГО КРОВОТЕЧЕНИЯ.\n' +
            '1.Промыть рану перекисью водорода или продезинфицировать рану;\n' +
            '2.Смазать пораженное место йодом или раствором зеленки;\n' +
            '3.Зажать рану тампоном;\n' +
            '4.Наложить стерильную повязку.\n'; // Здесь вы можете указать свое сообщение
        await onShare(message);
    };
    return (
        <ScrollView>
            <View>
                <Text className={"text-4xl text-center text-red-400 font-bold"}>
                    Кровотечение
                </Text>
                <Text className={`text-base ml-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Истечение крови из поврежденного сосуда называется кровотечением
                </Text>
                <Text className={`text-base ml-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Рана - нарушение целостности кожи и слизистых оболочек.
                </Text>
                <Text className={`text-base ml-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    При ранении могут быть также повреждены мышцы, сосуды, нервные волокна, внутренние органы.
                </Text>
                <Text className="text-center text-blue-600 text-xl">
                    Виды кровотечений.
                </Text>
                <View className={`ml-2`}>
                    <Text className={darkMode ? "text-white" : "text-slate-950"}>
                        1 Артериальное
                    </Text>
                    <Text className={`ml-5 text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>• Кровь ярко-алого
                        цвета.</Text>
                    <Text className={`ml-5 text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>• Бьет из раны
                        фонтаном.</Text>
                    <Text className={darkMode ? "text-white" : "text-slate-950"}>
                        2 Капиллярное
                    </Text>
                    <Text className={`ml-5 text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>• Кровь
                        темно-вишневого цвета.</Text>
                    <Text className={`ml-5 text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>• Течет из раны
                        потоком.</Text>
                    <Text className={darkMode ? "text-white" : "text-slate-950"}>
                        3 Венозное
                    </Text>
                    <Text className={`ml-5 text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>• При небольших
                        порезах; кровь медленно сочится из раны.</Text>
                </View>
                <Text className="text-center text-blue-600 text-xl">
                    ОСТАНОВКА АРТЕРИАЛЬНОГО КРОВОТЕЧЕНИЯ.
                </Text>
                <View className={'mx-auto'}>
                    <Image source={imgT} className={"w-72 h-64 rounded-xl"}/>
                </View>
                <Text className={`mb-2 text-base ml-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    1. Выполнить пальцевое прижатие сосуда выше раны.
                </Text>
                <Text className={`mb-2 text-base ml-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    2. Наложить жгут, стерильную повязку или закрутку на поврежденный сосуд.
                </Text>
                <Text className={`mb-2 text-base ml-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    3. Наложить стерильную давящую повязку и максимально согнуть поврежденную конечность.
                </Text>
                <Text className={`mb-2 text-base ml-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    4. Дать обезболивающее
                </Text>
                <Text className={`mb-2 text-base ml-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    5. Доставить в больницу
                </Text>
                <Text className="text-center text-blue-600 text-xl">
                    ОСТАНОВКА ВЕНОЗНОГО КРОВОТЕЧЕНИЯ.
                </Text>
                <View className={"mx-auto"}>
                    <Image source={imgTT} className={"w-72 h-64 rounded-xl"}/>
                </View>
                <View className={"ml-1"}>
                    <Text className={"text-base"}>
                        1.Обработать края раны йодом.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        2.Приготовить и наложить на рану стерильную салфетку.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        3.Туго перебинтовать рану.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        4.Продезинфицировать кожу вокруг раны.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        5.Наложить стерильную, давящую повязку.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        6.Дать обезболивающее
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        6.Доставить в больницу
                    </Text>
                </View>

                <Text className="text-center text-blue-600 text-xl">
                    ОСТАНОВКА КАПИЛЛЯРНОГО КРОВОТЕЧЕНИЯ.
                </Text>
                <View className={"mx-auto"}>
                    <Image source={imgT2} className={"w-72 h-64 rounded-xl"}/>
                </View>
                {/*<ScrollView horizontal={true} className={"flex flex-row"}>*/}
                {/*    <Image source={imgT1} className={"w-72 h-64 mr-2 rounded-xl"}/>*/}
                {/*    <Image source={imgT2} className={"w-72 h-64 rounded-xl"}/>*/}
                {/*</ScrollView>*/}
                <View className={"ml-1"}>
                    <Text className={`text-base ml-1 ${darkMode ? "text-white" : 'text-slate-950'}`}>
                        1.Промыть рану перекисью водорода или продезинфицировать рану
                    </Text>
                    <Text className={`text-base ml-1 ${darkMode ? "text-white" : 'text-slate-950'}`}>
                        2.Смазать пораженное место йодом или раствором зеленки.
                    </Text>
                    <Text className={`text-base ml-1 ${darkMode ? "text-white" : 'text-slate-950'}`}>
                        3.Зажать рану тампоном
                    </Text>
                    <Text className={`text-base ml-1 ${darkMode ? "text-white" : 'text-slate-950'}`}>
                        4.Наложить стерильную повязку
                    </Text>
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