import React from 'react';
import {ScrollView, View, Text, Image} from "react-native";
import img1 from './../assets/1.jpg';
import img2 from './../assets/2.jpg';
import img3 from './../assets/3.jpg';
import img4 from './../assets/4.jpg';

const Index = () => {
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-2xl text-red-500 font-bold text-center"}>
                    ХАРОШҲО:
                </Text>
                <Text className={"text-base"}>
                    Харошҳо – ин осеби сатҳӣ пӯст мебошад, ки дар он танҳо қабатҳои болоии пӯст осеб мебинанд.
                </Text>
                <Text className={"text-base"}>
                    Хоришҳо хунравии шадидро ба вуҷуд намеоранд.
                </Text>
                <Text className={"text-base mb-5"}>
                    Бемор ҳисси сахти сӯзишро эҳсос мекунад.
                </Text>
                <Text className={"text-lg text-center text-blue-600"}>
                    Кӯмаки аввалия барои харошҳо – ин пешгирии воридшавии сироят ба сатҳи захм мебошад.
                </Text>
                <Text className={"text-base"}>
                    Агар ягон осеби ҷиддӣ ё хунравии шадид вуҷуд надошта бошад, ҷои осебдидаро бо собун ва оби гарм
                    бишӯед.
                </Text>
                <Text className={"text-base"}>
                    Дар шароити саҳро беҳтар аст, ки бо худ маҳлули тайёри пероксиди гидрогени 3% дошта бошед.
                </Text>
                <Text className={"text-base"}>
                    Дар хотир доред, ки Шумо захмҳоро бо оби дарё ва чашмаҳо шуста наметавонед.
                </Text>
                <Text className={"text-base"}>
                    Пас аз тоза кардани сатҳӣ захми харошҳоро аз лоӣу гил, онро бо маҳлули йод ё сабзи дурахшон коркард
                    кардан лозим аст. Маҳлули перманганати калий низ мувофиқ аст.
                </Text>
                <Text className={"text-base mb-5"}>
                    Одатан: харошҳо пас аз ёрии аввалияи дуруст худ аз худ дар давоми 5 то 7 рӯз шифо меёбанд.
                </Text>
                <View className={"mx-auto mb-5"}>
                    <Image source={img1} className={"w-96 rounded-xl h-64"}/>
                </View>
                <ScrollView horizontal={true}>
                    <Image source={img2} className={"w-96 rounded-xl h-64 mr-2"}/>
                    <Image source={img3} className={"w-96 rounded-xl h-64 mr-2"}/>
                    <Image source={img4} className={"w-96 rounded-xl h-64"}/>
                </ScrollView>
            </View>
        </ScrollView>
    );
};

export default Index;