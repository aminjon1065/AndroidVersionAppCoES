import React from 'react';
import {View, Text, Image, ScrollView, TouchableWithoutFeedback, Linking} from "react-native";
import img1 from './../assets/1.jpg';
import img1p from '../assets/5.png';
import img2 from './../assets/2.png';
import img3 from './../assets/3.png';
import img4 from './../assets/4.png';
import img03 from '../assets/6.jpg';
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
                    САКТАИ МАЙНАИ САР ЧИСТ?
                </Text>
                <Text className={`ml-1 text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Сактаи майнаи сар – ин вайроншавии шадиди гардиши мағзи сар аст, ки дар натиҷаи он як қисми
                    ҳуҷайраҳои майнаи сар мемиранд.
                    Сактаи майнаи сар яке аз бемориҳои шадиди системаи асаб, буда боиси маъюбӣ ва аз даст додани
                    қобилияти корӣ мегардад.
                </Text>
                <View className="mx-auto">
                    <Image source={img1}/>
                </View>
                <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    НАҶОТИ ҲАЁТИ БЕМОР ДАР ДАСТОНИ ШУМОСТ!
                </Text>
                <Text className={`ml-1 text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Дар аксари ҳолатҳо, Шумо метавонед ҳаёти шахсеро наҷот диҳед ва оқибатҳои вазнини сактаи мағзи сарро
                    пешгирӣ кунед!
                    Барои ин, Шумо бояд нишонаҳои сактаи майнаи сарро муайян карда тавонед ва фавран «Ёрии таъҷилӣ»-ро
                    даъват кунед.
                </Text>
                <TouchableWithoutFeedback onPress={() => call('103')}>
                    <View className="mx-auto mt-2">
                        <Image source={img03} className="w-44 h-32"/>
                    </View>
                </TouchableWithoutFeedback>
                <Text className={"text-center text-xl text-blue-600 mt-2"}>
                    АЛОМАТҲОИ САКТАИ МАЙНАИ САР:
                </Text>
                <View>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - ногаҳон заифӣ ва ё карахтии даст, дасту пойи як тарафи бадан;
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - ногаҳон сиёҳшавии пеши чашмон, ваӣроншавии нутқи муроҷиаткунанда;
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - карахтии ногаҳонии лаб ё нисфи рӯӣ, аксар вақт бо каҷшавии рӯӣ.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - ногаҳон норавшан шудани биноиш дар як ё ҳарду чашмон, паӣдо шудани эҳсоси дубинии чашмҳо;
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - ваӣроншавии роҳравӣ, чарх задани сар, гум шудани мувозинат ё ҳамоҳангсозии ҳаракат;
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - дарди ногаҳонии шадиди сар бо сабаби номаълум.
                    </Text>
                </View>
                <View>
                    <Text className={"text-center text-xl text-blue-600 mt-2"}>
                        САКТАИ МАЙНАИ САРРО ЧӢ ТАВР БОЯД ШИНОХТ?
                    </Text>
                    <View className={"mb-2"}>
                        <View className={"mx-auto"}>
                            <Image source={img1p} className={"h-44 w-44"}/>
                        </View>
                        <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            Аз бемор хоҳиш кунед, ки табассум кунад.
                        </Text>
                        <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            Оё табассум карда метавонад?
                        </Text>
                        <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            Оё кунҷи даҳон поён нест?
                        </Text>
                    </View>
                    <View className={"mb-2"}>
                        <View className={"mx-auto"}>
                            <Image source={img2} className={"h-44 w-44"}/>
                        </View>
                        <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            Аз Ӯ хоҳиш, кунед ки сухан кунад.
                        </Text>
                        <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            Ҷумлаҳои оддиро пурра талаффуз кунад.
                        </Text>
                        <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            Масалан: «Офтоб берун аз тиреза медурахшад».
                        </Text>
                        <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            Оё як ҷумларо равшан талаффуз карда метавонад?
                        </Text>
                    </View>
                    <View className={"mb-2"}>
                        <View className={"mx-auto"}>
                            <Image source={img3} className={"h-44 w-44"}/>
                        </View>
                        <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            Аз Ӯ хоҳиш кунед, ки ҳарду дасташро боло бардорад.
                        </Text>
                        <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            Оё бемор ҳарду дасташро бардошта метавонад?
                        </Text>
                        <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            Оё якеаш заиф нашудааст?
                        </Text>
                    </View>
                    <View className={"my-5"}>
                        <Text className={"text-center text-2xl font-bold text-red-500"}>
                            АГАР АЗ ИН НИШОНАХО ЯГОНТОАШ ВУҶУД ДОШТА БОШАД, ФАВРАН ЗАНГ ЗАНЕД
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
                            ЁРИИ АВВАЛИН.
                        </Text>
                        <Text className={"text-center text-xl text-blue-600 mt-2"}>
                            То омадани духтур, Шумо бояд чораҳои мустақилона андешед:
                        </Text>
                        <Text className={`text-start text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            1. Зарардидаро тавре хобонед, ки сару китфаш баланд бошад.
                        </Text>
                        <Text className={`text-start text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            2. Агар дар дохили иморат ё дар хона бошад, барои ворид шудани ҳавои тоза дару тирезаҳоро
                            кушоед.
                        </Text>
                        <Text className={`text-start text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            3. Гиребонашро кушоед.
                        </Text>
                        <Text className={`text-start text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            4. Ҳангоми қай кардан сари ҷабрдидаро ба паҳлўяш гардонед, то қаӣ ба роҳҳои нафас надарояд.
                        </Text>
                        <Text className={`text-start text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            5. Нагузоред, ки забони бемор фурӯ равад - нафаскашиашро доимо назорат кунед.
                        </Text>
                    </View>
                    <View>
                        <Text className={"text-3xl font-bold text-center text-red-500"}>
                            ДАР ХОТИР ДОРЕД!
                        </Text>
                        <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            Вақти, барои барқарор кардани гардиши хун дар рагҳои маӣна ва қатъ кардани марги ҳуҷайраҳои
                            маӣнаи сар - 4 соат аст.
                            Ҳар қадар зудтар ба ёрии таъҷилӣ занг занед, ҳамон қадар табобат самарабахш ва оқибатҳои он
                            барои бемор камтар мешавад!
                        </Text>
                        <Text className={"text-xl text-red-500 text-center font-bold"}>
                            ФАВРАН ЗАНГ ЗАНЕД!
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
                    label={"Равон кардан"}
                />
            </View>
        </ScrollView>
    );
};

export default Index;