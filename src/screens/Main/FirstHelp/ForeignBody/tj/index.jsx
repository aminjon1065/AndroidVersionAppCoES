import React from 'react';
import {View, Text, ScrollView, Image} from "react-native";
import image1 from './../assets/1.jpg';
import image2 from './../assets/2.jpg';
import image3 from './../assets/3.png';
import image4 from './../assets/4.png';
import image5 from './../assets/5.jpg';
import image6 from './../assets/6.jpg';
import image7 from './../assets/7.jpg';
import image8 from './../assets/8.jpg';
import image9 from './../assets/9.jpg';
import image10 from './../assets/10.jpg';
import image11 from './../assets/11.jpg';
import image12 from './../assets/12.jpg';
import image13 from './../assets/13.jpg';
import image14 from "../assets/14.jpg";
import image15 from "../assets/15.jpg";
import image16 from "../assets/16.png";
import image17 from "../assets/17.jpg";

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

                <Text className={"text-lg text-blue-600 text-center"}>
                    ЁРИИ ТАЪҶИЛӢ:
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • «Зарб ба пушт»;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Манёври Геймлих;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    •Истихроҷ бо ангушт;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Усули «Буратино» (ҷисмҳои бегона дар кӯдакони то 1 сола);
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Трахеотомия ё коникотомияи таъҷилӣ;
                </Text>
                <ScrollView horizontal={true} className={"mb-5"}>
                    <Image source={image9} className={"w-32 h-56 mr-1"}/>
                    <Image source={image10} className={"w-32 h-56 mr-1"}/>
                    <Image source={image11} className={"w-32 h-56 mr-1"}/>
                    <Image source={image12} className={"w-32 h-56"}/>
                </ScrollView>
                <Text className={"text-lg text-blue-600 text-center"}>
                    ШУШТАНИ ГУШ БО ШПРИТСИ ҶАНЕ.
                </Text>
                <View className={"mx-auto"}>
                    <Image source={image13}/>
                </View>
                <Text className={"text-lg text-blue-600 text-center"}>
                    Нақшаи ёрии аввалин ҳангоми ворид шудани ҷисми бегона ба ҳалқ ё трахея.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    1. Кӯдакро (кӯдаки то 5 сола) сарашро ба поён хам карда, аз харду пояш бардоред.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    2. Шахси калонсолро дар болои курсӣ, ё дар рони худ хам кунед.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    3. Бо кафи даст дар байни шонахо чанд маротиба занед.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    4. Дар ҳолати нокомӣ ва ё бо ҳуш будани чабрдида яке аз кисмҳои усули «полиси амрикоӣ»-ро истифода
                    баред.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    5. Хангоми аз хуш рафтан шахси нафасгирандаро ба пахлу гардонед ва бо кафи кушодаи даст ба пушташ
                    чанд маротиба занед.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    6. Агар усулҳои қаблӣ бесамар бошанд ва дар ҳолати нафасгир шудани чабрдида коникотомияи фаврӣ анҷом
                    додан лозим. Гузаронидани чунин корро танҳо табибон ҳақ доранд.
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    7. Ҳатто пас аз бомуваффақият баровардани ҷисми бегона, ҳатман ба духтур муроҷиат кардан лозим аст.
                </Text>
                <Text className={"text-xl text-red-500 text-center font-bold"}>
                    Дар хотир доред!
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    1. Гирифтани ҷисми бегона (бо ангушт ё пинцет).
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    2. бо мушт задан ба сутунмӯҳра.
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    3. Ҳангоми гузаронидани усули «полиси амрикоӣ» (зарба ба ин минтақа метавонад боиси боздошти
                    ногаҳонии дил гардад) фавран дастони худро кушоед.
                </Text>
                <View className={"mx-auto w-full"}>
                    <Image source={image17} className={"w-96 h-60 rounded-xl"}/>
                </View>
            </ScrollView>
        </View>
    );
};

export default Index;