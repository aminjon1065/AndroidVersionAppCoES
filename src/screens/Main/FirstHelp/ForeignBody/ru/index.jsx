import React from 'react';
import {View, Text, ScrollView, Image} from "react-native";
import image9 from './../assets/9.jpg';
import image10 from './../assets/10.jpg';
import image11 from './../assets/11.jpg';
import image12 from './../assets/12.jpg';
import image13 from './../assets/13.jpg';
import image14 from './../assets/14.jpg';
import image15 from './../assets/15.jpg';
import image16 from './../assets/16.png';
import image17 from './../assets/17.jpg';

const Index = ({darkMode}) => {
    return (
        <View className={"pl-2"}>
            <ScrollView>
                <Text className={"text-center text-xl text-red-500 font-bold"}>
                    ПЕРВАЯ ПОМОЩЬ ПРИ ПОПАДАНИИ ИНОРОДНОГО ТЕЛА В ВЕРХНИЕ ДЫХАТЕЛЬНЫЕ ПУТИ.
                </Text>
                <ScrollView horizontal>
                    <Image source={image14} className={"w-72 h-48 rounded-xl"}/>
                    <Image source={image15} className={"w-72 h-48 mx-2 rounded-xl"}/>
                    <Image source={image16} className={"w-72 h-48 rounded-xl"}/>
                </ScrollView>
                <View className={"mt-5"}>
                    <Text className={"text-lg text-blue-600 text-center"}>
                        Неотложная помощь:
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        • «Удары по спине»;
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        • Прием Геймлиха;
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        • Пальцевое извлечение;
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        • Метод «Буратино» (инородные тела у детей до 1 года)
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        • Экстренная трахеотомия или коникотомия
                    </Text>
                </View>
                <ScrollView horizontal={true} className={"mb-5"}>
                    <Image source={image9} className={"w-32 h-56 mr-1"}/>
                    <Image source={image10} className={"w-32 h-56 mr-1"}/>
                    <Image source={image11} className={"w-32 h-56 mr-1"}/>
                    <Image source={image12} className={"w-32 h-56"}/>
                </ScrollView>
                <Text className={"text-lg text-blue-600 text-center"}>
                    ПРОМЫВАНИЕ УХА С ПОМОЩЬЮ ШПРИЦА ЖАНЕ
                </Text>
                <View className={"mx-auto"}>
                    <Image source={image13}/>
                </View>

                <Text className={"text-lg text-blue-600 text-center"}>
                    Схема оказания первой медицинской помощи при попадании инородного тела в гортань или трахею.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    1. Младенца (ребенка до 5 лет) перевернуть вниз головой и поднять за ноги.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    2. Взрослого перегнуть через спинку кресла, скамейки или собственное бедро.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    3. Ударить несколько раз ладонью между лопатками.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    4. В случае неудачи и при сохраненном сознании - воспользоваться одним из вариантов способа
                    «американских полицейских».
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    5. При потере сознания повернуть подавившегося на бок и несколько раз ударить раскрытой ладонью по
                    спине.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    6. Эту рекомендацию имеют право выполнять только медики. Если предыдущие методы оказались
                    неэффективными и в случае удавления шашлыком - произвести экстренную коникотомию.
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    7. Даже после удачного извлечения инородного тела необходимо обязательно обратиться к врачу.
                </Text>
                <Text className={"text-xl text-red-500 text-center font-bold"}>
                    Запомните! Недопустимо!
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    1. Доставать инородное тело (пальцами или пинцетом).
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    2. Наносить удары кулаком по позвоночнику.
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    3. Сразу разомкнуть руки при проведении способа «американских полицейских» (удар в эту область может
                    спровоцировать внезапную остановку сердца).
                </Text>
                <View className={"mx-auto w-full"}>
                    <Image source={image17} className={"w-96 h-60 rounded-xl"}/>
                </View>
            </ScrollView>
        </View>
    );
};

export default Index;