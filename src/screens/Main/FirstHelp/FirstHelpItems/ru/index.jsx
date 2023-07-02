import React from 'react';
import {View, Text, ScrollView, Image, Share, Alert} from "react-native";
import Image1 from './../assets/files/help1.jpg';
import Image2 from './../assets/files/help2.jpg';
import Image3 from './../assets/files/help3.jpg';
import Image4 from './../assets/files/help4.jpg';
import Image5 from './../assets/files/help5.jpg';
import Image6 from './../assets/files/help6.jpg';
import Image7 from './../assets/files/help7.jpg';
import Image8 from './../assets/files/help8.jpg';
import Image9 from './../assets/files/help9.jpg';
import Image10 from './../assets/files/help10.jpg';
import Image11 from './../assets/files/help11.jpg';
import Image12 from './../assets/files/help12.jpg';
import Image13 from './../assets/files/help13.jpg';
import Image14 from './../assets/files/help14.jpg';
import Image15 from './../assets/files/help15.jpg';
import Image16 from './../assets/files/help16.jpg';
import {FAB} from "react-native-paper";
import SOSCALL from "../../../../../components/SOSCALL";
import onShare from "../../../../../components/onShare";

const Index = ({darkMode}) => {
    const shareFn = async ()=>{
        const message='ПЕРВАЯ ПОМОЩЬ.\n' +
                '\n' +
                'ПРИЗНАКИ ЖИЗНИ И СМЕРТИ ЧЕЛОВЕКА.\n' +
                'УСТАНОВЛЕНИЕ ФАКТА ОСТАНОВКИ КРОВООБРАЩЕНИЯ\n' +
                '•\tОтсутствие сознания \n' +
                '•\tОтсутствие дыхания \n' +
                '•\tОтсутствие пульса на сонных артериях:\n' +
                '- Изменение цвета кожных покровов\n' +
                '- Расширение зрачка\n' +
                '•\tПроверить наличие сознания (окликнуть пострадавшего, потрясти за плечо.\n' +
                '•\t Проверить наличие дыхания (на слух, при помощи зеркала).\n' +
                '•\t Проверить пульс на сонной артерии.\n' +
                '•\tПроверить реакцию зрачка на свет.\n' +
                'ПРОДОЛЖИТЕЛЬНОСТЬ КЛИНИЧЕСКОЙ СМЕРТИ 3-5 МИНУТ\n' +
                '\n' +
                'ОСНОВНЫЕ ПРАВИЛА ПРОВЕДЕНИЯ СЕРДЕЧНО – ЛЕГОЧНОЙ РЕАНИМАЦИИ\n' +
                '- Обеспечение проходимости верхних дыхательных путей\n' +
                '- Поддержание дыхания\n' +
                '- Поддержание кровообращения\n' +
                '\n' +
                'ОБЕСПЕЧЕНИЕ ПРОХОДИМОСТИ ВЕРХНИХ ДЫХАТЕЛЬНЫХ ПУТЕЙ\n' +
                '•\tОсторожно запрокиньте голову\n' +
                '•\t Подтяните подбородок вверх\n' +
                'ПРОВЕДЕНИЕ ИСКУССТВЕННОГО ДЫХАНИЯ\n' +
                '•\tЗапрокиньте голову\n' +
                '•\tСделайте спокойный вдох\n' +
                '•\tЗажмите мягкую часть носа пострадавшего двумя пальцами \n' +
                '•\tСделайте спокойный выдох в рот пострадавшего, плотно обхватив его рот своими губами\n' +
                'ПРОВЕДЕНИЕ ИСКУССТВЕННОГО ДЫХАНИЯ\n' +
                '•\tПродолжительность вдоха -1 сек\n' +
                '•\tНаблюдайте за подъемом грудной клетки пострадавшего\n' +
                '\n' +
                'КОМПРЕССИЯ ГРУДНОЙ КЛЕТКИ\n' +
                'Встаньте сбоку от пострадавшего\n' +
                'Выполнение ИВЛ и непрямого массажа сердца одним спасателем: 2 вдоха + 15 надавливаний.\n' +
                'Выполнение ИВЛ и непрямого массажа сердца двумя спасателями: 1 вдох + 5 надавливаний\n' +
                '- Вызвать скорую помощь (тел. «03» или «112»)\n' +
                '\n';
        await onShare(message);
    }
    return (
        <ScrollView>
            <View>
                <Text className={"text-2xl text-center font-bold text-red-500"}>
                    ПЕРВАЯ ПОМОЩЬ.
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center`}>
                    ПРИЗНАКИ ЖИЗНИ И СМЕРТИ ЧЕЛОВЕКА.
                    УСТАНОВЛЕНИЕ ФАКТА ОСТАНОВКИ КРОВООБРАЩЕНИЯ
                </Text>
                <View className={"mt-5"}>
                    <View className={"mx-auto"}>
                        <Image source={Image1} className={"w-72 h-72 rounded-xl"}/>
                    </View>
                    <View>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center text-base`}>
                            Отсутствие сознания
                        </Text>
                    </View>
                </View>
                <View className={"mt-5"}>
                    <View className={"mx-auto"}>
                        <Image source={Image2} className={"w-72 h-72 rounded-xl"}/>
                    </View>
                    <View>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center text-base`}>
                            Отсутствие дыхания
                        </Text>
                    </View>
                </View>
                <View className={"mt-5"}>
                    <View className={"mx-auto"}>
                        <Image source={Image3} className={"w-72 h-72 rounded-xl"}/>
                    </View>
                    <View className={"mx-auto"}>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center text-base`}>
                            Отсутствие пульса на сонных артериях:
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                            - Изменение цвета кожных покровов
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                            - Расширение зрачка
                        </Text>
                    </View>
                </View>
                <View className={"mt-5"}>
                    <View className={"mx-auto"}>
                        <Image source={Image4} className={"w-72 h-72 rounded-xl"}/>
                    </View>
                    <View>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center text-base`}>
                            Проверить наличие сознания (окликнуть пострадавшего, потрясти за плечо.
                        </Text>
                    </View>
                </View>
                <View className={"mt-5"}>
                    <View className={"mx-auto"}>
                        <Image source={Image5} className={"w-72 h-72 rounded-xl"}/>
                    </View>
                    <View>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center text-base`}>
                            Проверить наличие дыхания (на слух, при помощи зеркала).
                        </Text>
                    </View>
                </View>
                <View className={"mt-5"}>
                    <View className={"mx-auto"}>
                        <Image source={Image6} className={"w-72 h-72 rounded-xl"}/>
                    </View>
                    <View>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center text-base`}>
                            Проверить пульс на сонной артерии.
                        </Text>
                    </View>
                </View>
                <View className={"mt-5"}>
                    <View className={"mx-auto"}>
                        <Image source={Image7} className={"w-72 h-72 rounded-xl"}/>
                    </View>
                    <View>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center text-base`}>
                            Проверить реакцию зрачка на свет.
                        </Text>
                    </View>
                </View>
                <Text className={"text-xl mt-10 text-center font-bold text-red-500"}>
                    ПРОДОЛЖИТЕЛЬНОСТЬ КЛИНИЧЕСКОЙ СМЕРТИ 3-5 МИНУТ
                </Text>
                <Text className={"text-xl mt-10 text-center font-bold text-red-500"}>
                    ОСНОВНЫЕ ПРАВИЛА ПРОВЕДЕНИЯ СЕРДЕЧНО – ЛЕГОЧНОЙ РЕАНИМАЦИИ
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - Обеспечение проходимости верхних дыхательных путей
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - Поддержание дыхания
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - Поддержание кровообращения
                </Text>
                <Text className={"text-xl mt-10 text-center font-bold text-red-500"}>
                    ОБЕСПЕЧЕНИЕ ПРОХОДИМОСТИ ВЕРХНИХ ДЫХАТЕЛЬНЫХ ПУТЕЙ
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    • Осторожно запрокиньте голову
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    • Подтяните подбородок вверх
                </Text>
                <View className={"mx-auto mt-2"}>
                    <Image source={Image8} className={"w-72 h-72 rounded-xl"}/>
                </View>
                <Text className={"text-xl mt-10 text-center font-bold text-red-500"}>
                    ПРОВЕДЕНИЕ ИСКУССТВЕННОГО ДЫХАНИЯ
                </Text>
                <ScrollView horizontal>
                    <View className={"mt-2"}>
                        <View className={""}>
                            <Image source={Image9} className={"w-72 h-72 rounded-xl"}/>
                        </View>
                        <View className={"w-72"}>
                            <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center text-base`}>
                                • Запрокиньте голову, сделайте спокойный вдох
                            </Text>
                        </View>
                    </View>
                    <View className={"mt-2 mx-2"}>
                        <View className={""}>
                            <Image source={Image10} className={"w-72 h-72 rounded-xl"}/>
                        </View>
                        <View className={"w-72"}>
                            <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center text-base`}>
                                • Зажмите мягкую часть носа пострадавшего двумя пальцами
                            </Text>
                        </View>
                    </View>
                    <View className={"mt-2"}>
                        <View className={""}>
                            <Image source={Image11} className={"w-72 h-72 rounded-xl"}/>
                        </View>
                        <View className={"w-72"}>
                            <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center text-base`}>
                                • Сделайте спокойный выдох в рот пострадавшего, плотно обхватив его рот своими губами
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <View>
                    <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                        • Продолжительность вдоха -1 сек
                    </Text>
                </View>
                <View>
                    <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                        • Наблюдайте за подъемом грудной клетки пострадавшего
                    </Text>
                </View>
                <View>
                    <Text className={"text-xl mt-10 text-center font-bold text-red-500"}>
                        КОМПРЕССИЯ ГРУДНОЙ КЛЕТКИ
                    </Text>
                    <View className={"mt-2"}>
                        <View className={"mx-auto"}>
                            <Image source={Image12} className={"w-72 h-72 rounded-xl"}/>
                        </View>
                        <View>
                            <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center text-base`}>
                                Встаньте сбоку от пострадавшего
                            </Text>
                        </View>
                    </View>
                    <View className={"mt-5"}>
                        <View className={"mx-auto"}>
                            <Image source={Image13} className={"w-72 h-72 rounded-xl"}/>
                        </View>
                        <View>
                            <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center text-base`}>
                                Выполнение ИВЛ и непрямого массажа сердца одним спасателем: 2 вдоха + 15 надавливаний.
                            </Text>
                        </View>
                    </View>
                    <View className={"mt-5"}>
                        <View className={"mx-auto"}>
                            <Image source={Image14} className={"w-72 h-80 rounded-xl"}/>
                        </View>
                        <View>
                            <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center text-base`}>
                                Выполнение ИВЛ и непрямого массажа сердца двумя спасателями: 1 вдох + 5 надавливаний
                            </Text>
                        </View>
                    </View>
                    <View className={"mt-5"}>
                        <ScrollView horizontal>
                            <Image source={Image15} className={"w-52 h-40"}/>
                            <Image source={Image16} className={"w-52 h-40"}/>
                        </ScrollView>
                        <View>
                            <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center text-base`}>
                                - Вызвать скорую помощь
                            </Text>
                        </View>
                    </View>
                </View>
                <SOSCALL/>
                <View className={"items-end mb-5"}>
                    <FAB
                        icon="share"
                        className={" w-36 bg-slate-800 mt-2 text-white"}
                        onPress={shareFn}
                        color={"#fff"}
                        label={"Поделиться"}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default Index;