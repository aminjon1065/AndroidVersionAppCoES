import React from 'react';
import {ScrollView, View, Text, Image} from "react-native";
import img2 from './../assets/2.jpg';
import img3 from './../assets/3.jpg';
import img4 from './../assets/4.jpg';
import img5 from './../assets/5.jpg';
import img6 from './../assets/6.jpg';
import img7 from './../assets/7.jpg';
import img8 from './../assets/8.jpg';
import {FAB} from "react-native-paper";
import onShare from "../../../../../components/onShare";

const Index = ({darkMode}) => {
    const handleShare = async () => {
        const message = 'ПЕРЕЛОМЫ \n' +
            'Перелом – нарушение целости кости. \n' +
            'Перелом сопровождается сильной болью, иногда – обмороком или шоком, кровотечением. \n' +
            'Различают открытые и закрытые переломы. Первый сопровождается ранением мягких тканей, в ране иногда заметны отломки кости.\n' +
            'ПЕРВАЯ ПОМОЩЬ ПРИ ПЕРЕЛОМЕ: \n' +
            '1. Оцените тяжесть состояния пострадавшего, определите локализацию перелома. \n' +
            '2. При наличии кровотечения, остановите его. \n' +
            '3. Определите, возможно ли перемещение пострадавшего до прибытия специалистов. Не переносите пострадавшего и не меняйте его положения при травмах позвоночника! \n' +
            '4. Обеспечьте неподвижность кости в области перелома – иммобилизация. Для этого необходимо обездвижить суставы, расположенные выше и ниже перелома. \n' +
            '5. Наложите шину. В качестве шины можно использовать плоские палки, доски, линейки, прутья и прочее. Шину необходимо плотно, но не туго, зафиксировать бинтами или пластырем. При закрытом переломе иммобилизация производится поверх одежды; при открытом нельзя прикладывать шину к местам, где кость выступает наружу.\n'; // Здесь вы можете указать свое сообщение
        await onShare(message);
    };
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