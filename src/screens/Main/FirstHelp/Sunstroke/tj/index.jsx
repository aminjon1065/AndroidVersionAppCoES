import React from 'react';
import {ScrollView, View, Text, Image} from "react-native";
import img1 from './../assets/1.jpg';
import img2 from './../assets/2.jpg';

const Index = () => {
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-2xl text-center font-bold text-red-500"}>
                    ОФТОБЗАНӢ
                </Text>
                <Text className={"text-base mb-5"}>
                    Офтобзанӣ– ин як намуди гармозанӣ мебошад, ки бо таъсири нурҳои ултробунафши офтоб ба организми
                    инсон, хусусан ба мағзи сар ва системаи хунгарди он таъсири манфӣ мерасонад.
                </Text>
                <Text className={"text-xl text-center font-bold text-red-500"}>
                    Нишонаҳои офтобзанӣ:
                </Text>
                <Text className={"text-base"}>
                    • Сурхшавии рўй ва умуман тамоми бадан
                </Text>
                <Text className={"text-base"}>
                    • Дарди сар
                </Text>
                <Text className={"text-base"}>
                    • Сарчархзанӣ
                </Text>
                <Text className={"text-base"}>
                    • Беҳолӣ
                </Text>
                <Text className={"text-base"}>
                    • Дилбеҳузарӣ ва қайкунӣ
                </Text>
                <Text className={"text-base"}>
                    • Тез шудани тапиши дил
                </Text>
                <Text className={"text-base"}>
                    • Араққунии бадан
                </Text>
                <Text className={"text-base"}>
                    • Баланд шудани ҳарорат
                </Text>
                <Text className={"text-base"}>
                    • Нафасгирии зуд-зуд
                </Text>
                <Text className={"text-base"}>
                    • Хушкшавии пўст
                </Text>
                <Text className={"text-base"}>
                    • Хунравӣ аз бинӣ
                </Text>
                <Text className={"text-base mb-5"}>
                    • Дар базе ҳолатҳо беҳушави ба назар мерасад
                </Text>
                <Text className={"text-xl text-center font-bold text-red-500"}>
                    ПЕШГИРИИ АЗ ОФТОБЗАНӢ:
                </Text>
                <Text className={"text-base"}>
                    • Сару либос бояд пахтагину равшан бошад.
                </Text>
                <Text className={"text-base"}>
                    • Бисёр об нушидан
                </Text>
                <Text className={"text-base"}>
                    • Ҳангоми бисёр нушидани об аз бадан арақи зиёд хориҷ мешавад ва ин ҳолат Шуморо аз нурҳои офтоб андозае эмин нигоҳ медорад.
                </Text>
                <Text className={"text-base"}>
                    • Тақрибан аз соати 11 то 16 ба ҳавои гарм набароед, дар сурати зарур аст кулоҳ пушед ё чатр бигиред.
                </Text>
                <Text className={"text-base"}>
                    • Дар айёми гармо обро бисёр нўшед на камтар аз 2-2,5 л дар як шабонарўз.
                </Text>

                <Text className={"text-base"}>
                    • Ҳангоми саёҳат дар рўзи офтоби хўроки серавған ва серғизо истеъмол накунед.
                </Text>
                <View className={"mx-auto"}>
                    <Image source={img1} className={"w-96 h-60"}/>
                </View>
                <View className={"mx-auto"}>
                    <Image source={img2} className={"w-96 h-56"}/>
                </View>
            </View>
        </ScrollView>
    );
};

export default Index;