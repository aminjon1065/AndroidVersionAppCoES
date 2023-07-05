import React from 'react';
import {View, Text, Image, ScrollView, TouchableWithoutFeedback, Linking} from "react-native";
import img1 from './../assets/1.jpg';
import img5 from '../assets/5.png';
import img2 from './../assets/2.png';
import img3 from './../assets/3.png';
import img4 from './../assets/4.png';
import img6 from '../assets/6.jpg';
import CallIcon from "react-native-vector-icons/MaterialIcons";
import {FAB} from "react-native-paper";
import onShare from "../../../../../components/onShare";

const Index = ({darkMode}) => {
    const call = async (number) => {
        try {
            await Linking.openURL(`tel:${number}`)
        } catch (e) {
            console.log('error')
        }
    }
    const handleShare = async () => {
        const message = 'ЧТО ТАКОЕ ИНСУЛЬТ?\n' +
            'Инсульт-это острое нарушение мозгового кровообращения, вследствие которого часть клеток головного мозга погибает.\n' +
            'В ТВОИХ РУКАХ СПАСТИ ЖИЗНЬ\n' +
            'В большинстве случаев человеку можно спасти жизнь и предотвратить развитие тяжелых последствий инсульта!\n' +
            'Для этого необходимо уметь выявить признаки инсульта, и своевременно вызвать «Скорую помощь».\n' +
            'ПРИЗНАКИ ИНСУЛЬТА:\n' +
            '- внезапная слабость и онемение в руке или руке и ноге на одной стороне тела;\n' +
            '- внезапное помутнение сознания, нарушение речи или непонимание обращенной речи;\n' +
            '- внезапное онемение губы или половины лица, часто с «перекосом» лица;\n' +
            '- внезапное нарушение зрения в одном или обоих глазах, появление ощущения двоения в глазах;\n' +
            '- внезапное нарушение походки, головокружение, потеря равновесия или координации;\n' +
            '- внезапная сильная головная боль по неизвестной причине.\n' +
            'КАК РАСПОЗНАТЬ ИНСУЛЬТ?\n' +
            'Попросите пострадавшего УЛЫБНУТЬСЯ\n' +
            'Не может улыбнуться?\n' +
            'Уголок рта опущен?\n' +
            'Попросите его ЗАГОВОРИТЬ.\n' +
            'Попросите выговорить простое предложение. \n' +
            'Связно. Например: «За окном светит солнце».\n' +
            'Не может разборчиво произнести предложение?\n' +
            'Попросите его ПОДНЯТЬ ОБЕ РУКИ.\n' +
            'Не может поднять обе руки?\n' +
            'Одна ослабла?\n' +
            '\n' +
            'ПРИ НАЛИЧИИ ЛЮБОГО ИЗ ЭТИХ ПРИЗНАКОВ\n' +
            'СРОЧНО ЗВОНИТЕ\n' +
            'ДОВРАЧЕБНЫЕ МЕРОПРИЯТИЯ\n' +
            'До прибытия врача необходимо принять самостоятельные меры:\n' +
            '1.\tУложите пострадавшего так, чтобы голова и плечи были приподняты;\n' +
            '2.\tОткройте окно, чтобы поступал свежий воздух;\n' +
            '3.\tСнимите или расстегните стесняющую одежду;\n' +
            '4.\tПри рвоте поверните голову пострадавшего на бок, чтобы рвотные массы не попадали в дыхательные пути;\n' +
            '5.\tНе давайте языку пациента западать – постоянно следите за дыханием.\n' +
            'ПОМНИТЕ!\n' +
            'Время, за которое можно успеть восстановить кровоток в артериях мозга и остановить гибель клеток 4 часа.\n' +
            'Чем раньше Вы вызовете «Скорую помощь», тем эффективнее будет лечение и меньше тяжелых последствий у больного после инсульта!\n'; // Здесь вы можете указать свое сообщение
        await onShare(message);
    };
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-4xl text-center text-red-400 font-bold"}>
                    ЧТО ТАКОЕ ИНСУЛЬТ?
                </Text>
                <Text className={`ml-1 text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Инсульт - это острое нарушение мозгового кровообращения, вследствие которого часть клеток головного
                    мозга погибает.
                </Text>
                <View className="mx-auto">
                    <Image source={img1}/>
                </View>
                <Text className={"text-center text-xl text-blue-600 mt-2"}>
                    В ТВОИХ РУКАХ СПАСТИ ЖИЗНЬ
                </Text>
                <Text className={`ml-1 text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    В большинстве случаев человеку можно спасти жизнь и предотвратить развитие тяжелых последствий
                    инсульта!
                    Для этого необходимо уметь выявить признаки инсульта, и своевременно вызвать «Скорую помощь».
                </Text>
                <TouchableWithoutFeedback onPress={() => call('103')}>
                    <View className="mx-auto mt-2">
                        <Image source={img6} className="w-44 h-32"/>
                    </View>
                </TouchableWithoutFeedback>
                <Text className={"text-center text-xl text-blue-600 mt-2"}>
                    ПРИЗНАКИ ИНСУЛЬТА:
                </Text>
                <View>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - внезапная слабость и онемение в руке или руке и ноге на одной стороне тела;
                    </Text>
                    <Text className={`ml-1 text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - внезапное помутнение сознания, нарушение речи или непонимание обращенной речи;
                    </Text>
                    <Text className={`ml-1 text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - внезапное онемение губы или половины лица, часто с «перекосом» лица;
                    </Text>
                    <Text className={`ml-1 text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - внезапное нарушение зрения в одном или обоих глазах, появление ощущения двоения в глазах;
                    </Text>
                    <Text className={`ml-1 text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - внезапное нарушение походки, головокружение, потеря равновесия или координации;
                    </Text>
                    <Text className={`ml-1 text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - внезапная сильная головная боль по неизвестной причине.
                    </Text>
                </View>
                <View>
                    <Text className={"text-center text-xl text-blue-600 mt-2"}>
                        КАК РАСПОЗНАТЬ ИНСУЛЬТ?
                    </Text>
                    <View className={"mb-2"}>
                        <View className={"mx-auto"}>
                            <Image source={img5} className={"h-44 w-44"}/>
                        </View>
                        <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            Попросите пострадавшего УЛЫБНУТЬСЯ
                        </Text>
                        <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            Не может улыбнуться?
                        </Text>
                        <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            Уголок рта опущен?
                        </Text>
                    </View>
                    <View className={"mb-2"}>
                        <View className={"mx-auto"}>
                            <Image source={img2} className={"h-44 w-44"}/>
                        </View>
                        <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            Попросите его ЗАГОВОРИТЬ.
                        </Text>
                        <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            Попросите выговорить простое предложение.
                        </Text>
                        <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            Связно. Например: «За окном светит солнце».
                        </Text>
                        <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            Не может разборчиво произнести предложение?
                        </Text>
                    </View>
                    <View className={"mb-2"}>
                        <View className={"mx-auto"}>
                            <Image source={img3} className={"h-44 w-44"}/>
                        </View>
                        <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            Попросите его ПОДНЯТЬ ОБЕ РУКИ.
                        </Text>
                        <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            Не может поднять обе руки?
                        </Text>
                        <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            Одна ослабла?
                        </Text>
                    </View>
                    <View className={"my-5"}>
                        <Text className={"text-center text-2xl font-bold text-red-500"}>
                            ПРИ НАЛИЧИИ ЛЮБОГО ИЗ ЭТИХ ПРИЗНАКОВ, СРОЧНО ЗВОНИТЕ
                        </Text>
                        <View className={"flex flex-row"}>
                            <TouchableWithoutFeedback onPress={() => call('03')}>
                                <View
                                    className="flex flex-row flex-1 mr-1 items-center justify-center rounded-xl py-3 bg-red-500">
                                    <CallIcon name='phone' size={32} color={"white"}/>
                                    <Text className="text-center text-white ml-3 text-2xl font-bold">
                                        03
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => call('112')}>
                                <View
                                    className="flex flex-row flex-1 mr-1 items-center justify-center rounded-xl py-3 bg-red-500">
                                    <CallIcon name='phone' size={32} color={"white"}/>
                                    <Text className="text-center text-white ml-3 text-2xl font-bold">
                                        112
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <View className={"mb-5"}>
                        <Text className={"text-center text-xl font-bold text-blue-500"}>
                            ДОВРАЧЕБНЫЕ МЕРОПРИЯТИЯ
                        </Text>
                        <Text className={"text-center text-xl text-blue-600 mt-2"}>
                            До прибытия врача необходимо принять самостоятельные меры:
                        </Text>
                        <Text className={`text-start text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            1. Уложите пострадавшего так, чтобы голова и плечи были приподняты.
                        </Text>
                        <Text className={`text-start text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            2. Откройте окно, чтобы поступал свежий воздух.
                        </Text>
                        <Text className={`text-start text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            3. Снимите или расстегните стесняющую одежду.
                        </Text>
                        <Text className={`text-start text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            4. При рвоте поверните голову пострадавшего на бок, чтобы рвотные массы не попадали в
                            дыхательные пути.
                        </Text>
                        <Text className={`text-start text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            5. Не давайте языку пациента западать – постоянно следите за дыханием.
                        </Text>
                    </View>
                    <View>
                        <Text className={"text-3xl font-bold text-center text-red-500"}>
                            ПОМНИТЕ!
                        </Text>
                        <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            Время, за которое можно успеть восстановить кровоток в артериях мозга и остановить гибель
                            клеток – 4 часа.
                            Чем раньше Вы вызовете «Скорую помощь», тем эффективнее будет лечение и меньше тяжелых
                            последствий у больного после инсульта!
                        </Text>
                        <Text className={"text-xl text-red-500 text-center font-bold"}>
                            СРОЧНО ЗВОНИТЕ
                        </Text>
                        <View className={"flex flex-row"}>
                            <TouchableWithoutFeedback onPress={() => call('03')}>
                                <View
                                    className="flex flex-row flex-1 mr-1 items-center justify-center rounded-xl py-3 bg-red-500">
                                    <CallIcon name='phone' size={32} color={"white"}/>
                                    <Text className="text-center text-white ml-3 text-2xl font-bold">
                                        03
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => call('112')}>
                                <View
                                    className="flex flex-row flex-1 mr-1 items-center justify-center rounded-xl py-3 bg-red-500">
                                    <CallIcon name='phone' size={32} color={"white"}/>
                                    <Text className="text-center text-white ml-3 text-2xl font-bold">
                                        112
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
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