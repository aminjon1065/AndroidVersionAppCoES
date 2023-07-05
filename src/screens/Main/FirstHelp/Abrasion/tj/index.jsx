import React from 'react';
import {ScrollView, View, Text, Image} from "react-native";
import img1 from './../assets/1.jpg';
import img2 from './../assets/2.jpg';
import img3 from './../assets/3.jpg';
import img4 from './../assets/4.jpg';
import {FAB} from "react-native-paper";
import onShare from "../../../../../components/onShare";

const Index = ({darkMode}) => {
    const handleShare = async () => {
        const message = 'ХАРОШҲО:\n' +
            'Харошҳо – ин осеби сатҳӣ пӯст мебошад, ки дар он танҳо қабатҳои болоии пӯст осеб мебинанд.\n' +
            '\tХоришҳо хунравии шадидро ба вуҷуд намеоранд.\n' +
            '\tБемор ҳисси сахти сӯзишро эҳсос мекунад.\n' +
            '\n' +
            'Кӯмаки аввалия барои харошҳо – ин пешгирии воридшавии сироят ба сатҳи захм мебошад.\n' +
            '\t Агар ягон осеби ҷиддӣ ё хунравии шадид вуҷуд надошта бошад, ҷои осебдидаро бо собун ва оби гарм бишӯед.\n' +
            '\t Дар шароити саҳро беҳтар аст, ки бо худ маҳлули тайёри пероксиди гидрогени 3% дошта бошед.\n' +
            '\t Дар хотир доред, ки Шумо захмҳоро бо оби дарё ва чашмаҳо шуста наметавонед.\n' +
            '\t Пас аз тоза кардани сатҳӣ захми харошҳоро аз лоӣу гил, онро бо маҳлули йод ё сабзи дурахшон коркард кардан лозим аст. Маҳлули перманганати калий низ мувофиқ аст.\n' +
            '\t Одатан: харошҳо пас аз ёрии аввалияи дуруст худ аз худ дар давоми 5 то 7 рӯз шифо меёбанд.\n' +
            '\n'; // Здесь вы можете указать свое сообщение
        await onShare(message);
    };
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-2xl text-red-500 font-bold text-center"}>
                    ХАРОШҲО:
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Харошҳо – ин осеби сатҳӣ пӯст мебошад, ки дар он танҳо қабатҳои болоии пӯст осеб мебинанд.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Хоришҳо хунравии шадидро ба вуҷуд намеоранд.
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Бемор ҳисси сахти сӯзишро эҳсос мекунад.
                </Text>
                <Text className={"text-lg text-center text-blue-600"}>
                    Кӯмаки аввалия барои харошҳо – ин пешгирии воридшавии сироят ба сатҳи захм мебошад.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Агар ягон осеби ҷиддӣ ё хунравии шадид вуҷуд надошта бошад, ҷои осебдидаро бо собун ва оби гарм
                    бишӯед.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Дар шароити саҳро беҳтар аст, ки бо худ маҳлули тайёри пероксиди гидрогени 3% дошта бошед.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Дар хотир доред, ки Шумо захмҳоро бо оби дарё ва чашмаҳо шуста наметавонед.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Пас аз тоза кардани сатҳӣ захми харошҳоро аз лоӣу гил, онро бо маҳлули йод ё сабзи дурахшон коркард
                    кардан лозим аст. Маҳлули перманганати калий низ мувофиқ аст.
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
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