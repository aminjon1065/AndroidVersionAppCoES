import React from 'react'
import {View, Text, ScrollView, Image} from 'react-native';
import img1 from './../assets/1.jpg'
import img2 from './../assets/2.jpg'
import img3 from './../assets/3.jpg'
import {FAB} from "react-native-paper";
import onShare from "../../../../../components/onShare";

function index({darkMode}) {
    const handleShare = async () => {
        const message = 'НИШОНАҲОИ ЗАҲРОЛУДШАВӢ АЗ АММИАК.\n' +
            'Роҳҳои асосии воридшавии аммиак ба бадан:\n' +
            '- роҳҳои нафасгирӣ;\n' +
            '- тамос (заҳролудшавии пӯст);\n' +
            '- тавассути осеб ба чашм.\n' +
            'ЁРИИ АВВАЛ ҲАНГОМИ ЗАҲРОЛУДШАВИИ АММИАК.\n' +
            'Барои пешгирии окибатҳои вазнин ҳангоми заҳролудшавии аммиак бояд фавран ёрии аввалин расонида шавад. Бо пай дар пай амал кардан лозим аст.\n' +
            '- Ёрии таъҷилиро даъват кунед.\n' +
            '- Ҷабрдидаро барои ҳавои тоза ба берун бароред.\n' +
            '- бинӣ, холигии бинӣ ва даҳонро бо консентратсияи ками кислотаи лиму бишӯед.\n' +
            '- Маҳлули Дикаинро барои чаконидани чашм истифода баред, айнаки офтобӣ пӯшед.\n' +
            '- Агар узвҳои болоии ҳозима осеб бинад, меъдаро бо маҳлули заифи намакоб шустан лозим аст;\n' +
            '- Дар ҳолати осеб дидани пӯст ва луобпардаҳои намоён бо оби равон хуб шӯянд ва бо бинти тоза банданд;\n' +
            '- Агар дар ҳуҷра бӯи хос пайдо шавад, роҳи нафасро муҳофизат кардан лозим аст. Аммо танҳо бо бинт пӯшонидани рӯӣ кӯмак намекунад - онро тар истифода бурдан лозим аст. Ҳангоми заҳролудшавӣ аз аммиак, Шумо бояд бидонед, ки чӣ гуна бинт тар кардан лозим аст - барои ин маҳлули 2% лимуи ё кислотаи уксус мувофиқ аст.\n' +
            '- Ингаляцияи буғҳо тавассути асбоби нафаскашӣ, метавонад ҳолати ҷабрдидаро сабук кунад.\n'; // Здесь вы можете указать свое сообщение
        await onShare(message);
    };
    return (
        <ScrollView>
            <View className={"pl-2 mb-2"}>
                <Text className={"text-4xl text-center text-red-400 font-bold"}>
                    НИШОНАҲОИ ЗАҲРОЛУДШАВӢ АЗ АММИАК.
                </Text>
                <Text className="text-center text-blue-600 text-xl font-bold">
                    Роҳҳои асосии воридшавии аммиак ба бадан:
                </Text>
                <View className="ml-1">
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - роҳҳои нафасгирӣ;
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - тамос (заҳролудшавии пӯст);
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - тавассути осеб ба чашм.
                    </Text>
                </View>
                <View className="mx-auto mb-2">
                    <Image source={img1} className={"w-72 h-52 rounded-xl"}/>
                </View>
                <Text className="text-center text-blue-600 text-xl font-bold">
                    АЛОМАТҲОИ ЗАҲРОЛУДШАВИИ ШАДИД ИНҲОЯНД:
                </Text>
                <View className={"mb-2"}>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - ринорея (обравӣ аз бинӣ);
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - хастагии овоз;
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - гиперемияи луобпардаҳо (бо намоёнии хун);
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - обравӣ ва зарарёбии чашмҳо;
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - зиёд шудани оби даҳон;
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - хориш ва дарди гулӯ;
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - эҳсоси фишор дар қафаси сина;
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - сулфаи хушки пароксизмӣ;
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        -дарди сар;
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - нишонаҳои нафастангӣ;
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - ихтилоли диспепстикӣ (дарди шикам, дилбеҳузурӣ, қайкунӣ, зардаҷӯш).
                    </Text>
                </View>
                <View>
                    <Text className="text-center text-blue-600 text-xl font-bold">
                        Дар ҳолатҳои вазнин, вақте ки заҳролудшавӣ аз маҳлули баланди консентратсияи аммиак ба вуҷуд
                        омадааст, инҳо мушоҳида мешаванд:
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - сӯхтани роҳҳои болоии нафаскашӣ, ки боиси ихтилоли гардиши нафас ва гардиши хун, варами шуш ё
                        пневмония мегардад;
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - ҳангоми сӯхтани пӯст.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - дар сурати осеб дидани чашм, дар аксари мавридҳо, пешгӯӣ номусоид аст, аз даст додани биноиш
                        мумкин аст.
                    </Text>
                    <View className={"mx-auto"}>
                        <Image source={img2} className={"w-72 h-52 rounded-xl"}/>
                    </View>
                </View>
                <View>
                    <Text className="text-center text-blue-600 text-xl font-bold">
                        ЁРИИ АВВАЛ ҲАНГОМИ ЗАҲРОЛУДШАВИИ АММИАК.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        Барои пешгирии окибатҳои вазнин ҳангоми заҳролудшавии аммиак бояд фавран ёрии аввалин расонида
                        шавад. Бо пай дар пай амал кардан лозим аст.
                    </Text>
                    <View className={"mx-auto"}>
                        <Image source={img3} className={"w-72 h-52 rounded-xl"}/>
                    </View>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - Ёрии таъҷилиро даъват кунед.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - Ҷабрдидаро барои ҳавои тоза ба берун бароред.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - Бинӣ, холигии бинӣ ва даҳонро бо консентратсияи ками кислотаи лиму бишӯед.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - Маҳлули Дикаинро барои чаконидани чашм истифода баред, айнаки офтобӣ пӯшед. </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - Агар узвҳои болоии ҳозима осеб бинад, меъдаро бо маҳлули заифи намакоб шустан лозим аст;
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - Дар ҳолати осеб дидани пӯст ва луобпардаҳои намоён бо оби равон хуб шӯянд ва бо бинти тоза
                        банданд;
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - Агар дар ҳуҷра бӯи хос пайдо шавад, роҳи нафасро муҳофизат кардан лозим аст. Аммо танҳо бо
                        бинт пӯшонидани рӯӣ кӯмак намекунад - онро тар истифода бурдан лозим аст. Ҳангоми заҳролудшавӣ
                        аз аммиак, Шумо бояд бидонед, ки чӣ гуна бинт тар кардан лозим аст - барои ин маҳлули 2% лимуи ё
                        кислотаи уксус мувофиқ аст.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - Ингаляцияи буғҳо тавассути асбоби нафаскашӣ, метавонад ҳолати ҷабрдидаро сабук кунад.
                    </Text>
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

export default index