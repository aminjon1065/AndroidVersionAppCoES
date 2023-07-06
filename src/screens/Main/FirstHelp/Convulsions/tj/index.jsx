import React from 'react';
import {ScrollView, View, Text, Image} from "react-native";
import img1 from './../assets/1.jpg';
import img2 from './../assets/2.png';
import img3 from './../assets/3.jpg';
import {FAB} from "react-native-paper";
import onShare from "../../../../../components/onShare";

const Index = ({darkMode}) => {
    const handleShare = async () => {
        const message = 'РАГКАШӢ\n' +
            'Рагкашиҳо метавонанд намудҳои гуногун дошта бошанд, аммо аксарияти онҳо дар давоми чанд дақиқа\n' +
            'мегузарад. Муҳимтарин чиз дар ин лаҳза таъмини бехатарии ҷабрдида мебошад.\n' +
            'Рагкашӣ - ин кашиши мушакҳо ғайриихтиёрӣ буда, дар шакли хурӯҷ зоҳир шуда, вақтҳои гуногун давом\n' +
            'мекунад ва аломатҳои клиникии осеби системаи марказии асаб мебошанд. Ин патология дар 3-5% кӯдакон\n' +
            'рух медиҳад.\n' +
            'Ҳангоми муоинаи кӯдак, пеш аз ҳама, функсияҳои ҳаётан муҳим (нафаскашӣ ва гардиши хун) баҳо дода\n' +
            'шуда, пас аз он гузариш ба муайян кардани сабабҳои фаъолияти рагкашӣ гузаронида мешавад.\n' +
            'БА ШУМО ЛОЗИМ АСТ, КИ ДИҚҚАТ ДИҲЕД:\n' +
            '• хусусияти нафаскашӣ, экскурсияи қафаси сина;\n' +
            '• ранги пӯст (сианоз, мармарӣ, рангпарида, минтақаҳои гиперпигментация);\n' +
            '• нишонаҳои ҷароҳат;\n' +
            '• зуҳуроти септисемия (петехия, доғи геморрагӣ);\n' +
            '• гаҳвараки чашм: андоза ва аксуламали онҳо ба рӯшноӣ;\n' +
            '• ҳолати тонуси мушакҳо.\n' +
            '• хусусият ва давомнокии рагкашӣ;\n' +
            '• мавҷудияти табларза, дарди сар, асабоният, камғизоӣ;\n' +
            '• мавҷудияти ҷароҳат;\n' +
            '• эҳтимолияти заҳролудшавии шадид;\n' +
            '• бемориҳои системаи асаб ва синдроми рагкашӣ дар хешовандон.\n' +
            'ЁРИИ ФАВРӢ\n' +
            '• беморро ба фарш гузоред, сарашро ба як тараф гардонед, ки ҳавои тоза гирад;\n' +
            '• дар зери сар чизи мулоим гузоред (Шумо метавонед чизҳои дар даст бударо монед).\n' +
            '• Боэҳтиёт ба як тараф гардонед. Дар ин ҳолат барои ӯ бехатар хоҳад шуд, барои озод нафас кашидан ва\n' +
            'агар қайкунӣ сар шавад, ҷабрдида нафасгир намешавад.\n' +
            '• нафаскаширо барқарор кунед - даҳонро аз луоб тоза кунед;\n' +
            '• таъмини гузариши роҳҳои нафас;\n' +
            '• пешгирии осеби мағзи сар ва дасту пой;\n' +
            '• Беморро дар ҷойи ҳамвор ва ба паҳлӯ хобонда, то оби даҳон озодона барояд ва ба нафаскашӣ халал\n' +
            'нарасонад ва дар ин мавқеъ ҷойгиршавии дақиқро таъмин кунед.\n' +
            '• Дар гирду атроф ашёҳои тез ва сахт набошад.\n' +
            '• Агар гирди ҷабрдида серодам бошанд, Шумо аз онҳо хоҳиш кунед, ки ба дуртар раванд, то дастрасии\n' +
            'ҳаворо таъмин кунанд.\n' +
            '• Айнакашро кашед, гиребон ё галстукашро кушоед.\n' +
            '• Агар рагкашӣ пас аз 5 дақиқа нагузарад ва ё такрор шавад, сараш захмдор ва дигар захмҳо бошад,\n' +
            'ҷабрдида зиёда аз 10 дақиқа ба худ наояд — ёрии таъчилиро даъват кунед.\n' +
            'Назорат, кунед, ки рагкашӣ чӣ қадар давом мекунад. Агар рагкашӣ бори аввал рух диҳад, Шумо метавонед\n' +
            'рагкаширо дар видео сабт кунед - ин ба асабшиноси кудакона барои муайян кардани ташхис кӯмак\n' +
            'мекунад.\n' +
            'То ба ҳуш омадани ҷабрдида дар наздаш бошед.\n' +
            'Сипас фаҳмонед, ки чӣ рӯӣ дод. Агар ин аввалин хуруҷ бошад, пас ёрии таъҷилӣ даъват кунед ва то\n' +
            'расидани он интизор шавед. Агар рагкашӣ чанд маротиба рух дода бошад, пас эҳтимол дорад, ки шахс\n' +
            'доруҳои заруриро нагирифтааст. Бо хешовандонаш тамос гиред ва то ба хонааш расидан кумак кунед.\n' +
            'ДАР ХОТИР ДОРЕД, КИ ИНРО НАКУНЕД!\n' +
            '• ҷабрдидаро ба замин зер накунед, аз ин сабаб ҷароҳатҳои иловагӣ гирифта метавонанд.\n' +
            '• Ба даҳони ҷабрдида ашёҳои бегона нагузоред, то дандонҳо ва ҷоғаш осеб бинад.\n' +
            '• Нафасдиҳии сунъӣ накунед. Вақте ки хуруҷ ба охир мерасад, ҷабрдида мустақилона нафаскашӣ мекунад.\n' +
            '• То он даме, ки одам пурра бедор нашавад, моеъ додан мумкин нест.\n' +
            '\n'; // Здесь вы можете указать свое сообщение
        await onShare(message);
    };
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-center text-2xl text-red-500 font-bold"}>
                    РАГКАШӢ
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Рагкашиҳо метавонанд намудҳои гуногун дошта бошанд, аммо аксарияти онҳо дар давоми чанд дақиқа
                    мегузарад. Муҳимтарин чиз дар ин лаҳза таъмини бехатарии ҷабрдида мебошад.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Рагкашӣ - ин кашиши мушакҳо ғайриихтиёрӣ буда, дар шакли хурӯҷ зоҳир шуда, вақтҳои гуногун давом
                    мекунад ва аломатҳои клиникии осеби системаи марказии асаб мебошанд. Ин патология дар 3-5% кӯдакон
                    рух медиҳад.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Ҳангоми муоинаи кӯдак, пеш аз ҳама, функсияҳои ҳаётан муҳим (нафаскашӣ ва гардиши хун) баҳо дода
                    шуда, пас аз он гузариш ба муайян кардани сабабҳои фаъолияти рагкашӣ гузаронида мешавад.
                </Text>
                <View className={"mx-auto mb-5"}>
                    <Image source={img1} className={"w-64 h-44"}/>
                </View>
                <Text className={"text-xl text-blue-600 text-center"}>
                    БА ШУМО ЛОЗИМ АСТ, КИ ДИҚҚАТ ДИҲЕД:
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • хусусияти нафаскашӣ, экскурсияи қафаси сина;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • ранги пӯст (сианоз, мармарӣ, рангпарида, минтақаҳои гиперпигментация);
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • нишонаҳои ҷароҳат;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • зуҳуроти септисемия (петехия, доғи геморрагӣ);
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • гаҳвараки чашм: андоза ва аксуламали онҳо ба рӯшноӣ;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • ҳолати тонуси мушакҳо.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • хусусият ва давомнокии рагкашӣ;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • мавҷудияти табларза, дарди сар, асабоният, камғизоӣ;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • мавҷудияти ҷароҳат;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • эҳтимолияти заҳролудшавии шадид;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • бемориҳои системаи асаб ва синдроми рагкашӣ дар хешовандон.
                </Text>
                <Text className={"text-xl text-blue-600 text-center"}>
                    ЁРИИ ФАВРӢ
                </Text>
                <View>
                    <Image source={img2} className={"w-96 h-60"}/>
                </View>
                <View>
                    <Image source={img3} className={"w-96 h-60"}/>
                </View>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • беморро ба фарш гузоред, сарашро ба як тараф гардонед, ки ҳавои тоза гирад;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • дар зери сар чизи мулоим гузоред (Шумо метавонед чизҳои дар даст бударо монед).
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Боэҳтиёт ба як тараф гардонед. Дар ин ҳолат барои ӯ бехатар хоҳад шуд, барои озод нафас кашидан ва
                    агар қайкунӣ сар шавад, ҷабрдида нафасгир намешавад.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • нафаскаширо барқарор кунед - даҳонро аз луоб тоза кунед;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • таъмини гузариши роҳҳои нафас;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • пешгирии осеби мағзи сар ва дасту пой;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Беморро дар ҷойи ҳамвор ва ба паҳлӯ хобонда, то оби даҳон озодона барояд ва ба нафаскашӣ халал
                    нарасонад ва дар ин мавқеъ ҷойгиршавии дақиқро таъмин кунед.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Дар гирду атроф ашёҳои тез ва сахт набошад.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Агар гирди ҷабрдида серодам бошанд, Шумо аз онҳо хоҳиш кунед, ки ба дуртар раванд, то дастрасии
                    ҳаворо таъмин кунанд.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Айнакашро кашед, гиребон ё галстукашро кушоед.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Агар рагкашӣ пас аз 5 дақиқа нагузарад ва ё такрор шавад, сараш захмдор ва дигар захмҳо бошад,
                    ҷабрдида зиёда аз 10 дақиқа ба худ наояд — ёрии таъчилиро даъват кунед.
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Назорат, кунед, ки рагкашӣ чӣ қадар давом мекунад. Агар рагкашӣ бори аввал рух диҳад, Шумо метавонед
                    рагкаширо дар видео сабт кунед - ин ба асабшиноси кудакона барои муайян кардани ташхис кӯмак
                    мекунад.
                    То ба ҳуш омадани ҷабрдида дар наздаш бошед.
                    Сипас фаҳмонед, ки чӣ рӯӣ дод. Агар ин аввалин хуруҷ бошад, пас ёрии таъҷилӣ даъват кунед ва то
                    расидани он интизор шавед. Агар рагкашӣ чанд маротиба рух дода бошад, пас эҳтимол дорад, ки шахс
                    доруҳои заруриро нагирифтааст. Бо хешовандонаш тамос гиред ва то ба хонааш расидан кумак кунед.
                </Text>
                <Text className={"text-center text-2xl text-red-500 font-bold"}>
                    ДАР ХОТИР ДОРЕД, КИ ИНРО НАКУНЕД!
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • ҷабрдидаро ба замин зер накунед, аз ин сабаб ҷароҳатҳои иловагӣ гирифта метавонанд.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Ба даҳони ҷабрдида ашёҳои бегона нагузоред, то дандонҳо ва ҷоғаш осеб бинад.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Нафасдиҳии сунъӣ накунед. Вақте ки хуруҷ ба охир мерасад, ҷабрдида мустақилона нафаскашӣ мекунад.
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • То он даме, ки одам пурра бедор нашавад, моеъ додан мумкин нест.
                </Text>
            </View>
            <View className={"items-end mb-5 mr-2"}>
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