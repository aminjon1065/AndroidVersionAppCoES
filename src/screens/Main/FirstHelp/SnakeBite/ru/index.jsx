import React from 'react';
import {Image, ScrollView, Text, View} from "react-native";
import img1 from './../assets/1.png'
import img2 from './../assets/2.jpg'
import img3 from './../assets/3.jpg'
import img4 from './../assets/4.png'
import img5 from './../assets/5.jpg'

const Index = ({darkMode}) => {
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-red-500 text-2xl text-center font-bold"}>
                    УКУС ЗМЕИ.
                </Text>
                <View className={"mx-auto mb-2"}>
                    <Image source={img5} className={"w-96 h-64 rounded-lg"}/>
                </View>
                <View className={"mx-auto mb-2"}>
                    <Image source={img1} className={"w-96 h-72 rounded-2xl"}/>
                </View>
                <View className={"mx-auto mb-2"}>
                    <Image source={img2} className={"w-96 h-72 rounded-2xl"}/>
                </View>
                <View className={"mx-auto mb-2"}>
                    <Image source={img3} className={"w-96 h-72 rounded-2xl"}/>
                </View>
                <View className={"mx-auto mb-5"}>
                    <Image source={img4} className={"w-96 h-52 rounded-2xl"}/>
                </View>
                <Text className={"text-red-500 text-xl text-center font-bold"}>
                    НЕОТЛОЖНАЯ ПОМОЩЬ НА МЕСТЕ ПРОИСШЕСТВИЯ.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Сразу после укуса необходимо обеспечить пострадавшему покой и горизонтальное положение, это
                    обеспечит минимальную скорость переноса яда кровью. Успокойте пострадавшего. Транспортируйте его в
                    безопасное, защищенное от непогоды место.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Выдавливание первых капель крови из раны или отсасывание ее из раны в течение первых 10-15 мин
                    (при условии, что у оказывающего первую помощь здоровые зубы, не повреждена слизистая оболочка
                    ротовой полости и есть чем полоскать рот) и сплевывание. Эти действия безвредны для оказывающего
                    помощь. При правильном и своевременном проведении отсасывания яда из ранки удается отсосать 50% яда.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Для уменьшения циркуляции крови на место укуса можно наложить холод (целлофановый пакет с холодной
                    водой). Продезинфицируйте ранку йодом или зеленкой и наложите стерильную повязку, которую следует
                    ослаблять по мере нарастания отека.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Ранку обработать спиртом, йодом или хотя бы зеленкой.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Для уменьшения циркуляции крови на место укуса можно наложить холод (целлофановый пакет с холодной
                    водой). Продезинфицируйте ранку йодом или зеленкой и наложите стерильную повязку, которую следует
                    ослаблять по мере нарастания отека.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Придайте пораженному участку тела возвышенное положение, зафиксируйте его, наложите
                    иммобилизационную повязку или шину. Дайте пострадавшему обильное питье. Употребление кофе
                    противопоказано. Организуйте доставку пострадавшего в лечебное заведение.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Если это невозможно, но у вас есть специфическая сыворотка «антикобра», «антигюрза», введите ее НЕ
                    ПОЗДНЕЕ 30 МИНУТ после укуса.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • мoжнo дaть oбезбoливaющее средствo (aнaльгин), желaтельнo дaть aнтигистaминные препaрaты
                    (aнтиaллергические - димедрoл, супрaстин, и пр.).
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • дaть препaрaты, пoддерживaющие сердечнoсoсудистую систему (вaлидoл, вaлoкaрдин, и.т.п.).
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Основным мероприятием неотложной помощи является введение сыворотки. Противозмеиная сыворотка
                    применяется при укусах змеями и оказывает специфическое и неспецифическое обезвреживающее действие.
                    Поливалентная противозмеиная сыворотка вводится в дозе 50-1000ЕД внутримышечно. Наилучший эффект
                    наблюдается при ее применении в первые сутки после укуса независимо от вида змеи.
                </Text>
                <Text className={"text-xl text-red-500 font-bold"}>
                    При укусе змеи запрещается:
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Позволять пострадавшему двигаться.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Накладывать жгут на укушенную конечность.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Делать надрезы в области укуса.
                </Text>
            </View>
        </ScrollView>
    );
};

export default Index;