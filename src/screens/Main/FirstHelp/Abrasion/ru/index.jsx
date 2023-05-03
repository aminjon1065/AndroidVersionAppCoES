import React from 'react';
import {ScrollView, View, Text, Image} from "react-native";
import img1 from './../assets/1.jpg';
import img2 from './../assets/2.jpg';
import img3 from './../assets/3.jpg';
import img4 from './../assets/4.jpg';

const Index = ({darkMode}) => {
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-2xl text-red-500 font-bold text-center"}>
                    ССАДИНЫ
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Ссадины – это поверхностное повреждение кожных покровов, при котором повреждаются только верхние
                    слои кожи.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Ссадины не вызывают сильного кровотечения.
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Больной испытывает чувство сильного жжения.
                </Text>
                <Text className={"text-lg text-center text-blue-600"}>
                    Первая медицинская помощь при ссадинах заключается в том, чтобы предотвратить попадание инфекции на
                    раневую поверхность.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Если нет серьезных повреждений и сильного кровотечения, осторожно промойте травмированное место
                    теплой водой с мылом.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    В походных условиях лучше всего для этого иметь при себе готовый раствор 3% перекиси водорода.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Помните о том, что нельзя промывать раны водой из открытых водоемов.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    После того как раневая поверхность ссадины очищена от грязи, нужно обработать её раствором йода или
                    бриллиантового зеленого. Также подойдет крепкий раствор марганцовки.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Обычно ссадины после того, как оказана правильная первая медицинская помощь при ссадинах, заживаю
                    самостоятельно в течение 5 – 7 дней.
                </Text>
                <View className={"mx-auto mb-5"}>
                    <Image source={img1} className={"w-96 rounded-xl h-64"}/>
                </View>
                <ScrollView horizontal={true} className={"mb-5"} >
                    <Image source={img2} className={"w-96 rounded-xl h-64 mr-2"}/>
                    <Image source={img3} className={"w-96 rounded-xl h-64 mr-2"}/>
                    <Image source={img4} className={"w-96 rounded-xl h-64"}/>
                </ScrollView>
            </View>
        </ScrollView>
    );
};

export default Index;