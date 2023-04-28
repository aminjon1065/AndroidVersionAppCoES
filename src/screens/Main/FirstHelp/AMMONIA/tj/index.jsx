import React from 'react'
import {View, Text, ScrollView, Image} from 'react-native';
import img1 from './../assets/1.jpg'
import img2 from './../assets/2.jpg'
import img3 from './../assets/3.jpg'

function index() {
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
                    <Text className="text-base">
                        - роҳҳои нафасгирӣ;
                    </Text>
                    <Text className="text-base">
                        - тамос (заҳролудшавии пӯст);
                    </Text>
                    <Text className="text-base">
                        - тавассути осеб ба чашм.
                    </Text>
                </View>
                <View className="mx-auto mb-2">
                    <Image source={img1} className="w-40 h-40"/>
                </View>
                <Text className="text-center text-blue-600 text-xl font-bold">
                    АЛОМАТҲОИ ЗАҲРОЛУДШАВИИ ШАДИД ИНҲОЯНД:
                </Text>
                <View className={"mb-2"}>
                    <Text className="text-base">
                        - ринорея (обравӣ аз бинӣ);
                    </Text>
                    <Text className="text-base">
                        - хастагии овоз;
                    </Text>
                    <Text className="text-base">
                        - гиперемияи луобпардаҳо (бо намоёнии хун);
                    </Text>
                    <Text className="text-base">
                        - обравӣ ва зарарёбии чашмҳо;
                    </Text>
                    <Text className="text-base">
                        - зиёд шудани оби даҳон;
                    </Text><Text className="text-base">
                    - хориш ва дарди гулӯ;
                </Text><Text className="text-base">
                    - эҳсоси фишор дар қафаси сина;
                </Text>
                    <Text className="text-base">
                        - сулфаи хушки пароксизмӣ;
                    </Text>
                    <Text className="text-base">
                        -дарди сар;
                    </Text>
                    <Text className="text-base">
                        - нишонаҳои нафастангӣ;
                    </Text>
                    <Text className="text-base">
                        - ихтилоли диспепстикӣ (дарди шикам, дилбеҳузурӣ, қайкунӣ, зардаҷӯш).
                    </Text>
                </View>
                <View>
                    <Text className="text-center text-blue-600 text-xl font-bold">
                        Дар ҳолатҳои вазнин, вақте ки заҳролудшавӣ аз маҳлули баланди консентратсияи аммиак ба вуҷуд
                        омадааст, инҳо мушоҳида мешаванд:
                    </Text>
                    <Text className="text-base">
                        - сӯхтани роҳҳои болоии нафаскашӣ, ки боиси ихтилоли гардиши нафас ва гардиши хун, варами шуш ё
                        пневмония мегардад;
                    </Text>
                    <Text className="text-base">
                        - ҳангоми сӯхтани пӯст.
                    </Text>
                    <Text className="text-base">
                        - дар сурати осеб дидани чашм, дар аксари мавридҳо, пешгӯӣ номусоид аст, аз даст додани биноиш
                        мумкин аст.
                    </Text>
                    <View className={"mx-auto"}>
                        <Image source={img2}/>
                    </View>
                </View>
                <View>
                    <Text className="text-center text-blue-600 text-xl font-bold">
                        ЁРИИ АВВАЛ ҲАНГОМИ ЗАҲРОЛУДШАВИИ АММИАК.
                    </Text>
                    <Text className={"text-base"}>
                        Барои пешгирии окибатҳои вазнин ҳангоми заҳролудшавии аммиак бояд фавран ёрии аввалин расонида
                        шавад. Бо пай дар пай амал кардан лозим аст.
                    </Text>
                    <View className={"mx-auto"}>
                        <Image source={img3}/>
                    </View>
                    <Text className={"text-base"}>
                        - Ёрии таъҷилиро даъват кунед.
                    </Text>
                    <Text className={"text-base"}>
                        - Ҷабрдидаро барои ҳавои тоза ба берун бароред.
                    </Text>
                    <Text className={"text-base"}>
                        - Бинӣ, холигии бинӣ ва даҳонро бо консентратсияи ками кислотаи лиму бишӯед.
                    </Text>
                    <Text className={"text-base"}>
                        - Маҳлули Дикаинро барои чаконидани чашм истифода баред, айнаки офтобӣ пӯшед. </Text>
                    <Text className={"text-base"}>
                        - Агар узвҳои болоии ҳозима осеб бинад, меъдаро бо маҳлули заифи намакоб шустан лозим аст;
                    </Text>
                    <Text className={"text-base"}>
                        - Дар ҳолати осеб дидани пӯст ва луобпардаҳои намоён бо оби равон хуб шӯянд ва бо бинти тоза
                        банданд;
                    </Text>
                    <Text className={"text-base"}>
                        - Агар дар ҳуҷра бӯи хос пайдо шавад, роҳи нафасро муҳофизат кардан лозим аст. Аммо танҳо бо
                        бинт пӯшонидани рӯӣ кӯмак намекунад - онро тар истифода бурдан лозим аст. Ҳангоми заҳролудшавӣ
                        аз аммиак, Шумо бояд бидонед, ки чӣ гуна бинт тар кардан лозим аст - барои ин маҳлули 2% лимуи ё
                        кислотаи уксус мувофиқ аст.
                    </Text>
                    <Text className={"text-base"}>
                        - Ингаляцияи буғҳо тавассути асбоби нафаскашӣ, метавонад ҳолати ҷабрдидаро сабук кунад.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default index