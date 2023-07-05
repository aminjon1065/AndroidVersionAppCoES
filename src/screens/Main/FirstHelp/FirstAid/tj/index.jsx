import React from 'react'
import {View, Text, Image, ScrollView} from 'react-native';
import img1 from './../assets/1.jpg'
import img2 from './../assets/2.jpg'
import img3 from './../assets/3.png'
import {FAB} from "react-native-paper";
import onShare from "../../../../../components/onShare";

function Index({darkMode}) {
    const handleShare = async () => {
        const message = 'ЁРИИ АВВАЛИН ҲАНГОМИ ҒАРҚШАВӢ.\n' +
            '- Ҳангоми наҷот додани шахс дар об шумо бояд:\n' +
            '- аз қафо ба сӯи ғарқшуда шино кунед.\n' +
            '- барои дастгир кардани шахси ғарқшуда аз мӯй ё як қисми либос (масалан, гиребон) гиред.\n' +
            '- одами ғарқшударо ба пушт ва сарашро болои об рост карда ба соҳил расонед.\n' +
            'ЁРИИ АВВАЛИН:\n' +
            '1. ғарқшударо аз об ба масофаи бехатар баред;\n' +
            '2. набзро санҷед;\n' +
            '3. агар набз набошад, эҳёро сар кунед;\n' +
            '4. агар набз ва нафаскашӣ пайдо шуд, ҷабрдидаро ба хонаи гарм гузаронед.\n' +
            '5. либоси тарро бо либоси хушк иваз кунед;\n' +
            '6. Нӯшокии гарм диҳед.\n'; // Здесь вы можете указать свое сообщение
        await onShare(message);
    };
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-4xl text-center text-red-400 font-bold"}>
                    ЁРИИ АВВАЛИН ҲАНГОМИ ҒАРҚШАВӢ.
                </Text>
                <Text className={`text-base ml-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Мушкили аввалине, ки нафаре, ки ҷони як нафарро дар об наҷот медиҳад, ин тарси ғарқшуда аст, ки
                    ҳатто ҷони як наҷотдиҳандаро гирад. Ҷабрдида дар воҳима буда, метавонад Шуморо ба поён фиристад!
                    Ҳангоми наҷотдиҳӣ Шумо бояд инро ба назар гиред.
                </Text>
                <View className="mx-auto">
                    <Image source={img1} className="h-48 w-72 rounded-xl"/>
                </View>
                <Text className="text-lg text-blue-600 text-center">
                    НАВЪҲОИ ҒАРҚШАВӢ.
                </Text>
                <View className="mb-2">
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        1 «ХУШК» АЗ САБАБИ СПАЗМИ ҲАЛҚ.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        2 - ГАРҚ ШУДАН ДАР ОБИ ТОЗА.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        3 ҒАРҚ ШУДАН ДАР ОБИ ШӮР.
                    </Text>
                </View>
                <Text className="text-xl text-blue-600 text-center">
                    - Ҳангоми наҷот додани шахс дар об шумо бояд:
                </Text>
                <View className="mb-2">
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - аз қафо ба сӯи ғарқшуда шино кунед.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - барои дастгир кардани шахси ғарқшуда аз мӯй ё як қисми либос (масалан, гиребон) гиред.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - одами ғарқшударо ба пушт ва сарашро болои об рост карда ба соҳил расонед.
                    </Text>
                </View>
                <View className={"mb-2"}>
                    <Text className="text-lg text-blue-600 text-center">
                        НИШОНАҲО:
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        • БЕҲУШӢ, НАБУДАНИ НАФАСКАШӢ ВА ГАРДИШИ ХУН.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        • КАБУДӢ Ё САФЕДИИ ПӮСТ. ХУНУК БУДАНИ ТАНА.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        • ХОРИҶ АЗ ДАҲОН Ё БИНИИ ОБ Ё МОЕЪИ КАФК
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        • НОРАСОИИ РЕФЛЕКСҲОИ РӮШНОӢ.
                    </Text>
                </View>
                <View className={"mb-2"}>
                    <Text className="text-lg text-blue-600 text-center">
                        ЁРИИ АВВАЛИН:
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        1. ғарқшударо аз об ба масофаи бехатар баред.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        2. Набзро санҷед.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        3. Агар набз набошад, эҳёро сар кунед.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        4. Агар набз ва нафаскашӣ пайдо шуд, ҷабрдидаро ба хонаи гарм гузаронед.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        5. Либоси тарро бо либоси хушк иваз кунед.
                    </Text>
                    <Text className={`text-base mb-2 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        6. Нӯшокии гарм диҳед.
                    </Text>
                    <ScrollView horizontal={true}>
                        <Image source={img2} className={"rounded-xl"}/>
                        <Image source={img3} className={"rounded-xl"}/>
                    </ScrollView>
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
    )
}

export default Index