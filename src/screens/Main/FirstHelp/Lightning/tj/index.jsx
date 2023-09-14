import React from 'react';
import {ScrollView, Text, View} from "react-native";
import {FAB} from "react-native-paper";
import onShare from "../../../../../components/onShare";

const Index = ({darkMode}) => {
    const handleShare = async () => {
        const message =
            'Раъду барқ' +
            'Раъду барқ метавонад хеле хатарнок бошад ва ёрии таъҷилии тиббиро талаб мекунад. Агар шумо ё касе\n' +
            '                    Ба гирду атрофатон барқ занад, ин дастурҳоро риоя кунед:\n' +
            '                    1. Ҳушашро тафтиш кунед: санҷед, ки ҷабрдида нафас мекашад ва набз дорад. Агар вай набз надошта\n' +
            '                    бошад, ба реаниматсияи дилу шуш (РПР) шурӯъ кунед.\n' +
            '                    2. Ба ёрии таъҷилӣ занг занед: Ҳарчи зудтар мошини ёрии таъҷилӣ ё чархболи махсуси тиббиро даъват\n' +
            '                    кунед. Худатон кӯшиш накунед, ки ҷабрдидаро ба беморхона интиқол диҳед.\n' +
            '                    3. Ҷабрдидаро ба ҷои дигар гузоред: агар имконпазир бошад, зарардидаро ба ҷои бехатар интиқол диҳед,\n' +
            '                    ки дар он ҷо хатари зарбаи барқ ва дигар хатарҳо вуҷуд надошта бошад.\n' +
            '                    4. Чизҳои металлиро дур кунед: аз ҷабрдида ашёҳои металлӣ, аз қабили соат, ҷавоҳирот, айнак ё\n' +
            '                    дастпонаҳоро дур кунед. Металл метавонад таъсири зарбаи барқро афзоиш диҳад.\n' +
            '                    5. Кӯмаки аввалияро расонед: Агар шумо ба ёрии аввал омӯзонида шуда бошед, то расидани ёрии тиббӣ ба\n' +
            '                    додани он шурӯъ кунед. Муҳим аст, ки аломатҳои сармохӯрӣ, сӯхтагӣ ё дигар ҷароҳатҳоро аҳамияти ҷиддӣ\n' +
            '                    диҳед.\n' +
            '                    6. Назорати осебдида: то расидани ёрии тиббӣ осебдидаро назорат кунед. Агар ҷабрдида нафаскаширо\n' +
            '                    қатъ кунад ё боздошти дил дошта бошад, то расидани ёрии тиббӣ реаниматсияи дилу шуш намоед.\n' +
            '                    Дар хотир бояд дошт, ки зарбаи барқ метавонад ба узвҳо ва системаҳои дарунӣ зарари ҷиддӣ расонад,\n' +
            '                    инчунин сӯхтагӣ ва ҷароҳатҳои дигарро ба бор орад, бинобар ин, ҷабрдида бояд барои муоина ва табобати иловагӣ ба муассисаи тиббӣ бурда шавад.\n'
            // Здесь вы можете указать свое сообщение
        await onShare(message);
    };
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-red-500 font-bold text-2xl text-center"}>
                    Раъду барқ
                </Text>
                <Text className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Раъду барқ метавонад хеле хатарнок бошад ва ёрии таъҷилии тиббиро талаб мекунад. Агар шумо ё касе
                    Ба гирду атрофатон барқ занад, ин дастурҳоро риоя кунед:
                </Text>
                <Text className={` text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    1. Ҳушашро тафтиш кунед: санҷед, ки ҷабрдида нафас мекашад ва набз дорад. Агар вай набз надошта
                    бошад, ба реаниматсияи дилу шуш (РПР) шурӯъ кунед.
                </Text>
                <Text className={` text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    2. Ба ёрии таъҷилӣ занг занед: Ҳарчи зудтар мошини ёрии таъҷилӣ ё чархболи махсуси тиббиро даъват
                    кунед. Худатон кӯшиш накунед, ки ҷабрдидаро ба беморхона интиқол диҳед.
                </Text>
                <Text className={` text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    3. Ҷабрдидаро ба ҷои дигар гузоред: агар имконпазир бошад, зарардидаро ба ҷои бехатар интиқол диҳед,
                    ки дар он ҷо хатари зарбаи барқ ва дигар хатарҳо вуҷуд надошта бошад.
                </Text>
                <Text className={` text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    4. Чизҳои металлиро дур кунед: аз ҷабрдида ашёҳои металлӣ, аз қабили соат, ҷавоҳирот, айнак ё
                    дастпонаҳоро дур кунед. Металл метавонад таъсири зарбаи барқро афзоиш диҳад.
                </Text>
                <Text className={` text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    5. Кӯмаки аввалияро расонед: Агар шумо ба ёрии аввал омӯзонида шуда бошед, то расидани ёрии тиббӣ ба
                    додани он шурӯъ кунед. Муҳим аст, ки аломатҳои сармохӯрӣ, сӯхтагӣ ё дигар ҷароҳатҳоро аҳамияти ҷиддӣ
                    диҳед.
                </Text>
                <Text className={` text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    6. Назорати осебдида: то расидани ёрии тиббӣ осебдидаро назорат кунед. Агар ҷабрдида нафаскаширо
                    қатъ кунад ё боздошти дил дошта бошад, то расидани ёрии тиббӣ реаниматсияи дилу шуш намоед.
                </Text>
                <Text className={` font-bold text-base text-red-500 mb-5`}>
                    Дар хотир бояд дошт, ки зарбаи барқ метавонад ба узвҳо ва системаҳои дарунӣ зарари ҷиддӣ расонад,
                    инчунин сӯхтагӣ ва ҷароҳатҳои дигарро ба бор орад, бинобар ин, ҷабрдида бояд барои муоина ва табобати иловагӣ ба муассисаи тиббӣ бурда шавад.
                </Text>
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