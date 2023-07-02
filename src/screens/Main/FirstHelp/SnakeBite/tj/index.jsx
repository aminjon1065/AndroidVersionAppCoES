import React from 'react';
import {Image, ScrollView, Text, View} from "react-native";
import img1 from './../assets/1.png'
import img2 from './../assets/2.jpg'
import img3 from './../assets/3.jpg'
import img4 from './../assets/4.png'

const Index = ({darkMode}) => {
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-red-500 text-2xl text-center font-bold"}>
                    Газидани мор.
                </Text>
                <Text className={"text-red-500 text-xl text-center font-bold"}>
                    Ҳангоми неш задан дарди сахт ва пайдоиши як ё ду нуқтаи сурхи варам монанд дар пусти инсон дида
                    мешавад.
                </Text>
                <View className={"mx-auto mb-2"}>
                    <Image source={img1} className={"w-96 h-72 rounded-lg"}/>
                </View>
                <View className={"mx-auto mb-2"}>
                    <Image source={img2} className={"w-96 h-72 rounded-lg"}/>
                </View>
                <View className={"mx-auto mb-2"}>
                    <Image source={img3} className={"w-96 h-72 rounded-lg"}/>
                </View>
                <View className={"mx-auto mb-5"}>
                    <Image source={img4} className={"w-96 h-56 rounded-lg"}/>
                </View>
                <Text className={"text-red-500 text-xl text-center font-bold"}>
                    ЁРИИ АВВАЛИН
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Аввалан шахси зарардидаро ором намуда бо ҳолати горизонтали мехобонем, ки ин ҳолат суръати бо хун
                    якҷо шавии заҳрро кам менамояд. Шахси зарардидаро ба ҷойи бехатар мекӯчонем.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Дар давоми 10-15 дақиқаи аввал аз захм фишурдани қатраҳои аввалини хун ё макидан аз захм (ба
                    шарте, ки дандонҳои солим дошта бошад, пардаи луобии холигоҳи даҳон осеб надошта бошад ва чизе барои
                    шустан мавҷуд бошад) ва туф кардан. Ин амалҳо барои нигоҳубинкунанда безараранд. Дар сурати дуруст
                    ва сари вақт ҷабидан аз захм 50% заҳрро макидан мумкин аст.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Ҷойи захмро бо маҳлули спирт, ёд ё зелёнка тоза менамоем.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Барои кам кардани гардиши хун ва варамӣ дар мавқеъи зарардида ях (ё ин ки дар ягон зарф гирифтани
                    оби хунук) инчунин гузоштани бандинаи тоза (стерильную повязку) лозим мебошад.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Нушонидани оби бисёр ба шахси зарардида. Интиқоли фаврӣ ба беморхона.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Ҳангоми бо худ доштани зардобаи (сыворотка) махсуси зиддӣ «кобра», «гюрза» гузаронидани он ба
                    шахси зарардида на дертар аз 30 дақиқа баъди газидани мор.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Ба шахси зарардида додани доруҳои дардро камкунанда (aнaльгин), доруҳои зиддӣ эҳсосият
                    (aнтиaллергические-димедрoл, супрaстин ва ғ.) доруҳои ёридиҳандаи системаи дилу рагҳо (вaлидoл,
                    вaлoкaрдин ва ғ.) тавсия дода мешавад.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Расонидани ёрии аввалин ҳангоми газидани мор пеш аз ҳама ин гузаронидани зардоба (сыворотка) ба
                    ҳисоб меравад. Зардобаи зиддӣ газидани мор хусусият ва таъсири хоси худро дошта бо вояи (доза)
                    50-1000 ЕД дохили мушак гузаронида мешавад.
                </Text>

                <Text className={"text-xl text-red-500 font-bold"}>
                    Ҳангоми газидани мор мумкин нест:
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Ҳаракт намудани шахси зарардида.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Бастани бандина (жгут) аз поёни ҷойи неш задаи мор.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Буридани ҷойи неш задаи мор.
                </Text>
            </View>
        </ScrollView>
    );
};

export default Index;