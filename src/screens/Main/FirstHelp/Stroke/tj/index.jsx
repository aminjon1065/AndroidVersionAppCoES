import React from 'react';
import {View, Text, Image, ScrollView, TouchableWithoutFeedback, Linking} from "react-native";
import img1 from './../assets/1.jpg';
import img1p from './../assets/1.png';
import img2 from './../assets/2.png';
import img3 from './../assets/3.png';
import img4 from './../assets/4.png';
import img03 from './../assets/03.jpg';
import CallIcon from "react-native-vector-icons/MaterialIcons";

const Index = ({darkMode}) => {
    const call = async (number) => {
        try {
            await Linking.openURL(`tel:${number}`)
        } catch (e) {
            console.log('error')
        }
    }
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
                        {/*<ScrollView horizontal={true} className={"mt-5"}>*/}
                        {/*    <Image source={img1p} className={"h-44 w-44 mr-1"}/>*/}
                        {/*    <Image source={img2} className={"h-44 w-44 mr-1"}/>*/}
                        {/*    <Image source={img3} className={"h-44 w-44"}/>*/}
                        {/*</ScrollView>*/}
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
        </ScrollView>
    );
};

export default Index;