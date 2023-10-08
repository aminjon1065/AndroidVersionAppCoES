import React from 'react';
import {ScrollView, View, Text, Image} from "react-native";
import image1 from './../assets/1.png';
import image2 from './../assets/2.png';
import image3 from './../assets/3.jpg';
import image4 from './../assets/4.jpg';
import image5 from './../assets/5.jpg';
import image6 from './../assets/6.png';
import image7 from './../assets/7.png';
import image8 from './../assets/8.jpg';
import image9 from './../assets/9.jpg';
import image10 from './../assets/10.jpg';
import {FAB} from "react-native-paper";
import onShare from "../../../../../components/onShare";

const Index = ({darkMode}) => {
    const handleShare = async () => {
        const message = 'РАСОНДАНИ ЁРИИ АВВАЛИН БЕХАТАРӢ\n' +
            'САНҶИШИ ҲУШ\n' +
            'КУШОДАНИ РОҲҲОИ НАФАС\n' +
            'САНҶИШИ НАФАС\n' +
            'БА ЁРИИ ТАЪҶИЛӢ ЗАНГ ЗАНЕД\n' +
            'ФИШОР БА ҚАФАСИ СИНА\n' +
            'ДОДАНИ НАФАСИ СУНЪӢ\n'; // Здесь вы можете указать свое сообщение
        await onShare(message);
    };
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-xl text-center font-bold text-red-500"}>
                    РАСОНДАНИ ЁРИИ АВВАЛИН
                    БЕХАТАРӢ
                </Text>
                <View className={"flex flex-row mx-auto mb-5"}>
                    <Image source={image1}/>
                    <Image source={image2}/>
                </View>
                <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    САНҶИШИ ҲУШ
                </Text>
                <View className={"mx-auto mb-5"}>
                    <Image source={image3} className={"w-56 h-44"}/>
                </View>
                <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    КУШОДАНИ РОҲҲОИ НАФАС
                </Text>
                <View className={"mx-auto mb-5"}>
                    <Image source={image4} className={"w-56 h-44"}/>
                </View>
                <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    САНҶИШИ НАФАС
                </Text>
                <View className={"mx-auto  mb-5"}>
                    <Image source={image5} className={"w-56 h-44"}/>
                </View>
                <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    БА ЁРИИ ТАЪҶИЛӢ ЗАНГ ЗАНЕД
                </Text>
                <View className={"mx-auto mb-5"}>
                    <Image source={image6} className={"w-56 h-44"}/>
                </View>
                <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    ФИШОР БА ҚАФАСИ СИНА
                </Text>
                <ScrollView horizontal={true} className={"mb-5"}>
                    <Image source={image7} className={"w-56 h-36"}/>
                    <Image source={image8} className={"w-56 h-36"}/>
                    <Image source={image9} className={"w-56 h-36"}/>
                </ScrollView>
                <Text className={`text-center text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    ДОДАНИ НАФАСИ СУНЪӢ
                </Text>
                <View className={"mx-auto mb-5"}>
                    <Image source={image10} className={"w-64 h-56"}/>
                </View>
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