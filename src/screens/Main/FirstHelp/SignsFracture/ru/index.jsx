import React from 'react';
import {ScrollView, View, Text, Image} from "react-native";
import img1 from './../assets/1.jpg';
import img2 from './../assets/2.jpg';
import img3 from './../assets/3.jpg';
import img4 from './../assets/4.jpg';
import img5 from './../assets/5.jpg';
import img6 from './../assets/6.jpg';
import img7 from './../assets/7.jpg';
import img8 from './../assets/8.jpg';

const Index = ({darkMode}) => {
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={`text-red-500 font-bold text-2xl text-center`}>
                    ПЕРЕЛОМЫ
                </Text>
                <Text className={`text-red-500 font-bold text-xl text-center`}>
                    Перелом – нарушение целости кости.
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    Перелом сопровождается сильной болью, иногда – обмороком или шоком, кровотечением.
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    Различают открытые и закрытые переломы. Первый сопровождается ранением мягких тканей, в ране иногда
                    заметны отломки кости.
                </Text>
                <Text className={`text-red-500 font-bold text-xl text-center`}>
                    ПЕРВАЯ ПОМОЩЬ ПРИ ПЕРЕЛОМЕ:
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    1. Оцените тяжесть состояния пострадавшего, определите локализацию перелома.
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    2. При наличии кровотечения, остановите его.
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    3. Определите, возможно ли перемещение пострадавшего до прибытия специалистов. Не переносите
                    пострадавшего и не меняйте его положения при травмах позвоночника!
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    4. Обеспечьте неподвижность кости в области перелома – иммобилизация. Для этого необходимо
                    обездвижить суставы, расположенные выше и ниже перелома.
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    5. Наложите шину. В качестве шины можно использовать плоские палки, доски, линейки, прутья и прочее.
                    Шину необходимо плотно, но не туго, зафиксировать бинтами или пластырем. При закрытом переломе
                    иммобилизация производится поверх одежды; при открытом нельзя прикладывать шину к местам, где кость
                    выступает наружу.
                </Text>
                <Text className={`text-red-500 font-bold text-xl text-center`}>
                    ПЕРВАЯ ПОМОЩЬ ПРИ ПЕРЕЛОМЕ
                </Text>
                <View className={"mx-auto"}>
                    <Image source={img5} className={"w-64 h-72 rounded-xl"}/>
                </View>
                <View className={"mx-auto"}>
                    <Image source={img6} className={"w-72 h-44 rounded-xl"}/>
                </View>
                <View className={"mx-auto"}>
                    <Image source={img7} className={"w-72 h-44 rounded-xl"}/>
                </View>
                <View className={"mx-auto"}>
                    <Image source={img8} className={"w-72 h-44 rounded-xl"}/>
                </View>
                {/*<Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>*/}
                {/*    - Болезненные ощущения в месте перелома при обездвиженном состоянии или во время движений. Также,*/}
                {/*    если сделать осевую нагрузку, то боль усиливается*/}
                {/*</Text>*/}
                {/*<Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>*/}
                {/*    - Отечность в месте перелома может возникнуть быстро (в течение 15 минут после травмы) или*/}
                {/*    развиваться в течение нескольких часов.*/}
                {/*</Text>*/}
                {/*<Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>*/}
                {/*    - Гематома. Она может и отсутствовать, но зачастую все же возникает на месте перелома, при чем не*/}
                {/*    всегда сразу. Если она пульсирует, значит, кровотечение продолжается.*/}
                {/*</Text>*/}
                {/*<Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>*/}
                {/*    - Ограничение подвижности. Как правило, поврежденная часть не может функционировать либо вовсе, либо*/}
                {/*    частично.*/}
                {/*</Text>*/}
                {/*<Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>*/}
                {/*    - может наблюдаться движение кости не в области сустава*/}
                {/*</Text>*/}
                {/*<Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>*/}
                {/*    - Деформация конечности или неестественная подвижность сустава.*/}
                {/*</Text>*/}
                {/*<Text className={"text-blue-600 text-center text-xl"}>*/}
                {/*    ПОРЯДОК ДЕЙСТВИЙ ПРИ НАЛИЧИИ РАНЫ:*/}
                {/*</Text>*/}
                {/*<Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>*/}
                {/*    - ОСТАНОВИТЬ КРОВОТЕЧЕНИЕ;*/}
                {/*</Text>*/}
                {/*<Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>*/}
                {/*    - ОСВОБОДИТЬ ОТ ОДЕЖДЫ;*/}
                {/*</Text>*/}
                {/*<Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>*/}
                {/*    - ЗАКРЫТЬ СТЕРИЛЬНОЙ ПОВЯЗКОЙ;*/}
                {/*</Text>*/}
                {/*<Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>*/}
                {/*    - ВВЕСТИ ОБЕЗБОЛИВАЮЩЕЕ СРЕДСТВО (если пострадавший в сознании);*/}
                {/*</Text>*/}
                {/*<Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>*/}
                {/*    - ПРИСТУПИТЬ К ИММОБИЛИЗАЦИИ.*/}
                {/*</Text>*/}
                {/*<ScrollView horizontal={true} className={"mb-5"}>*/}
                {/*    <Image source={img1} classname={"w-56 h-56"}/>*/}
                {/*</ScrollView>*/}
                <Text className={"text-blue-600 text-center text-xl"}>
                    ИММОБИЛИЗАЦИЯ: НИЖНИЕ КОНЕЧНОСТИ.
                </Text>
                <View className={"mx-auto"}>
                    <Image source={img2} className={"w-96 h-48"}/>
                </View>
                <View className={"mx-auto"}>
                    <Image source={img3} className={"w-96 h-36"}/>
                </View>
                <View className={"mx-auto"}>
                    <Image source={img4} className={"w-96 h-28"}/>
                </View>
            </View>
        </ScrollView>
    );
};

export default Index;