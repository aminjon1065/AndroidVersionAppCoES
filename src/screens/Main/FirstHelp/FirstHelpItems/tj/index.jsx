import React from 'react';
import {Image, ScrollView, Text, View} from "react-native";
import {List} from "react-native-paper";
import Apte4ka from "../assets/img/apte4ka.jpg";
import Image1 from "../assets/img/image1.png";
import Image2 from "../assets/img/image2.jpg";
import Image3 from "../assets/img/image3.jpg";
import Image4 from "../assets/img/image4.jpg";
import Image5 from "../assets/img/image5.png";
import Image6 from "../assets/img/image6.jpg";
import Image7 from "../assets/img/Image7.png";
import Image8 from "../assets/img/image8.jpg";
import Image9 from "../assets/img/image9.jpg";
import Image10 from "../assets/img/image10.jpg";
import Image11 from "../assets/img/image11.jpg";
import Image12 from "../assets/img/image12.jpg";
import Image13 from "../assets/img/image13.png";
import Image14 from "../assets/img/image14.png";
import Image15 from "../assets/img/image15.png";
import Image16 from "../assets/img/image16.jpg";

const Index = ({darkMode}) => {
    return (
        <ScrollView>
            <View className={"mb-14"}>
                <Text className={"text-4xl text-center text-red-400 font-bold"}>
                    ЁРИИ АВВАЛИН.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>
                    Дар сурати руӣ додани фалокат, ва офатҳои табии шумораи зиёди одамон ба ёрии аввалин эҳтиёҷ доранд,
                    ки он бояд фавран баъди захмдоршудагон ё захролудшудагон расонида шавад. Дар сурати руӣ додани
                    ҳодисаҳои ногаҳонӣ ва бемориҳо то омадани корманди тиб оддитарин тадбирҳои ёрии аввалини тиббӣ
                    метавонад ҳаёт ва саломатии ҷабрдидаро наҷот диҳад.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>
                    - қатъи таъсири омилҳои осебпазир;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>
                    - гузаронидани чорабиниҳои оддии тиббӣ;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>
                    - сари вақт интиқол додани ҷабрдида ба муассисаи тиббӣ.
                </Text>
                <List.AccordionGroup>
                    <List.Accordion
                        title="ЁРИИ ҒАӢРИМУТАХАССИС ФАҚАТ ПЕШ АЗ ДУХТУР РАСОНИДА ШАВАД, НА БА ҶОИ ДУХТУР."
                        titleStyle={{color: darkMode ? 'white' : '#1E293B'}}
                        className={`${darkMode ? 'bg-slate-600 text-white' : 'text-slate-950 bg-slate-200'} rounded-lg mt-2`}
                        theme={{colors: {background: darkMode ? '#1E293B' : '#E2E8F0'}}}
                        id="1"
                    >
                        <List.Item
                            title={() => <View>
                                <Text className={"text-base text-red-700"}>
                                    ЁРИИ ҒАӢРИМУТАХАССИС ФАҚАТ ПЕШ АЗ ДУХТУР
                                    РАСОНИДА ШАВАД, НА БА ҶОИ ДУХТУР.
                                </Text>
                            </View>}
                            className={darkMode ? 'bg-slate-800' : `bg-slate-100`}
                            description={
                                () =>
                                    <View>
                                        <Text className={`text-base ${darkMode ? 'text-white' : 'bg-slate-950'}`}>
                                            • 1. боздоштани муваққатии хунравӣ; </Text>
                                        <Text className={`text-base ${darkMode ? 'text-white' : 'bg-slate-950'}`}>
                                            • 2. гузоштани банди асептикӣ ба захм ё ҷои сўхта, бо усули оддитарин ва
                                            истифодаи тахтачуб ва дигар воситаи дастрас шинафартабанди кардан
                                            ҳангоми захмҳои вазнин; </Text>
                                        <Text className={`text-base ${darkMode ? 'text-white' : 'bg-slate-950'}`}>
                                            • 3. фаъолиятҳои эҳёсозӣ; </Text>
                                        <Text className={`text-base ${darkMode ? 'text-white' : 'bg-slate-950'}`}>
                                            • 4. додани доруҳои дарднок ва дигар доруҳо барои бемориҳои маълум;
                                        </Text>
                                        <Text className={`text-base ${darkMode ? 'text-white' : 'bg-slate-950'}`}>
                                            • 5. интиқоли ҷабрдидаҳо; </Text>
                                        <View>
                                            <Text
                                                className={`text-base ${darkMode ? 'text-white' : 'bg-slate-950'}`}>
                                                Ҳар як нафар бояд пеш аз расондани ёрии тиббӣ ба зарардида ёрии
                                                аввалинро донад ва онро моҳирона иҷро намояд. Кӯмаки аввалия бояд бо
                                                истифода аз тамоми воситаҳое, ки одатан дар доруқуттӣ мавҷуд аст,
                                                тезтар анҷом дода шавад.
                                            </Text>
                                            <View className={"flex flex-row justify-center mb-2"}>
                                                <Image source={Apte4ka} className={"w-10/12 h-56 rounded-xl"}/>
                                            </View>
                                            <Text
                                                className={`text-base ${darkMode ? 'text-white' : 'bg-slate-950'}`}>
                                                • Кӯмаки аввалияи нодуруст ё бетаҷриба метавонад боиси мушкилоте
                                                шавад, ки барқароршавии ҷабрдидаро ба таъхир меандозад ё ҳатто боиси
                                                маъюбӣ мегардад ва дар баъзе мавридҳо (ҷароҳат бо талафоти зиёди
                                                хун, зарбаи барқ, сӯхтагӣ) боиси марги ҷабрдида дар ҷои ҳодиса
                                                мегардад.
                                            </Text>
                                            <Text
                                                className={`text-base ${darkMode ? 'text-white' : 'bg-slate-950'}`}>
                                                • Шумо набояд ҳеҷ гоҳ ҷабрдидаро вафотшуда ҳисоб кунед ва аз сабаби
                                                набудани нафаскашӣ, кори дил ва набз аз кӯмак ба ӯ даст кашед. Танҳо
                                                духтур ҳуқуқ дорад дар бораи марги ҷабрдида хулоса барорад ва дар
                                                бораи ба мақсад мувофиқ будани амалиёти эҳёгарӣ қарор қабул намояд.
                                                Ҳодисаҳои зиёд (махсусан бо зарбаи барқ) вуҷуд доранд, ки ҷабрдида
                                                гӯё фавтида ё ҳатто дар ҳолати марги клиникӣ қарор дошт, аммо
                                                амалҳои дуруст ва устуворона барои эҳё кардан (нафасгирии сунъӣ,
                                                масҳ ва ғ.) ҳаёти ӯро наҷот доданд.
                                            </Text>
                                            <Text
                                                className={`text-base ${darkMode ? 'text-white' : 'bg-slate-950'}`}>
                                                • Дар сурати руӣ додани ҳодиса ба зарардида ёрии аввалин расонида,
                                                вобаста ба ҳолати зарардида ба воситаи телефони 03 ёрии тиббиро
                                                даъват кардан лозим аст.
                                            </Text>
                                        </View>
                                    </View>
                            }
                        />
                    </List.Accordion>
                    <List.Accordion
                        titleStyle={{color: darkMode ? 'white' : '#1E293B'}}
                        className={`${darkMode ? 'bg-slate-600 text-white' : 'text-slate-950 bg-slate-200'} rounded-lg mt-2`}
                        theme={{colors: {background: darkMode ? '#1E293B' : '#E2E8F0'}}}
                        title="НИШОНАҲОИ ХАЁТ ВА МАРГИ ИНСОН."
                        id="2"
                    >
                        <List.Item
                            title={() =>
                                <View>
                                    <Text className={"text-base text-red-600"}
                                    >
                                        НИШОНАҲОИ ХАЁТ ВА МАРГИ ИНСОН.
                                    </Text>
                                </View>
                            }
                            className={darkMode ? 'bg-slate-800' : `bg-slate-100`}
                            description={
                                () =>
                                    <View>
                                        <View>
                                            <Text className={`text-base ${darkMode ? 'text-white' : 'bg-slate-950'}`}>
                                                • Аломатҳои ҳаёт: тапиши дил; шахси ёрирасон бо даст ё гуши худро поён
                                                аз чапи синаи ҷабрдида гузошта муайян мекунад;
                                            </Text>
                                            <View className={"mx-auto"}>
                                                <Image source={Image1}/>
                                            </View>
                                        </View>
                                        <View>
                                            <Text className={`text-base ${darkMode ? 'text-white' : 'bg-slate-950'}`}>
                                                • набз дар даруни бозу, дар гардан муайян карда мешавад; </Text>
                                            <View className={"mx-auto"}>
                                                <Image source={Image2}/>
                                            </View>
                                        </View>
                                        <View>
                                            <Text className={`text-base ${darkMode ? 'text-white' : 'bg-slate-950'}`}>
                                                • мавҷудияти нафаскашӣ бо ҳаракати қафаси сина, бо тар шудани оинаи ба
                                                бинии ҷабрдида часпидашуда ё ҳаракати пахтаи ба сўрохҳои бинӣ овардашуда
                                                муқаррар карда мешавад;
                                            </Text>
                                            <View className={"mx-auto"}>
                                                <Image source={Image3}/>
                                            </View>
                                        </View>
                                        <View>
                                            <Text className={`text-base ${darkMode ? 'text-white' : 'bg-slate-950'}`}>
                                                • вокуниши чашм ба рӯшноӣ. Вақте ки шуои рӯшноӣ равона карда мешавад,
                                                якбора танг шудани чашмак ба амал меояд.
                                            </Text>
                                            <View className={"mx-auto"}>
                                                <Image source={Image4}/>
                                            </View>
                                        </View>
                                    </View>
                            }
                        />
                    </List.Accordion>
                    <List.Accordion
                        titleStyle={{color: darkMode ? 'white' : '#1E293B'}}
                        className={`${darkMode ? 'bg-slate-600 text-white' : 'text-slate-950 bg-slate-200'} rounded-lg mt-2`}
                        theme={{colors: {background: darkMode ? '#1E293B' : '#E2E8F0'}}}
                        title="НИШОНАҲОИ ХАЁТ ДАЛЕЛИ БЕШУБҲАЕСТ, ИСЛОҲИ ИСБОТИ БЕХАТО МЕБОШАНД, КИ ЁРИИ ФАВРӢ МЕТАВОНАД ОДАМРО НАҶОТ ДИҲАД."
                        id="3"
                    >
                        <List.Item
                            title={() =>
                                <View>
                                    <Text className={"text-base text-red-600"}
                                    >
                                        НИШОНАҲОИ ХАЁТ ДАЛЕЛИ БЕШУБҲАЕСТ, ИСЛОҲИ ИСБОТИ БЕХАТО МЕБОШАНД, КИ ЁРИИ ФАВРӢ
                                        МЕТАВОНАД ОДАМРО НАҶОТ ДИҲАД.
                                    </Text>
                                    <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>
                                        Признаки жизни являются безошибочным доказательством того, что немедленное
                                        оказание помощи еще может спасти человека.
                                    </Text>
                                    <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>
                                        • Нафаскашии сунъиро дар сурате гузаронидан лозим аст, ки агар ҷабрдида бо
                                        душворӣ нафас мекашад ё нафас намекашад (аҳёнан, рагкашӣ) ё нафаскашӣ, сарфи
                                        назар аз сабабҳо (зарбаи барқ, заҳролудшавӣ, ғарқшавӣ ва ғ.) тадриҷан бад
                                        мешавад.
                                    </Text>
                                    <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>
                                        • Пас аз пайдоиши нафаскашӣ идома додан лозим нест.
                                    </Text>
                                    <Text className={"text-base text-red-600"}>
                                        Ҳангоми оғоз намудани нафаскашии сунъӣ, наҷотдиҳанда бояд: </Text>
                                    <Text
                                        className={"text-base"}
                                    >
                                        • агар имконпазир бошад, ҷабрдидаро ба пушт хобонед; </Text>
                                    <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>

                                        • ҷабрдидаро аз либосе, ки нафаскаширо маҳдуд мекунад, озод кунед (рӯймолро
                                        кушоед, гиребонашро кушоед, камарбанди шим ва ғ.);
                                    </Text>
                                    <View className={"mx-auto mt-2"}>
                                        <Image source={Image5}/>
                                    </View>
                                    <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>

                                        • даҳони ҷабрдидаро аз ашёи бегона озод кунед;
                                    </Text>
                                    <View className={"mx-auto"}>
                                        <Image source={Image6}/>
                                    </View>
                                    <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>

                                        • даҳони сахт бастаро кушода, ҷоғи поёнро ба пеш тела диҳед, то ки дандонҳои
                                        поёнӣ дар пеши дандонҳои болои бошанд.
                                    </Text>
                                    <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>

                                        • дар паҳлӯи сари ҷабрдида истода, як дасташро ба зери гардан гузоред ва бо кафи
                                        дасти дигар ба пешонӣ зер кунед, сарро то ҳадди имкон хам шавад;
                                    </Text>
                                    <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>

                                        • ба назди ҷабрдида такя кунед, бо даҳони кушода нафаси чуқур кашед, даҳони
                                        кушодаи ҷабрдидаро бо лабҳо пурра пӯшонед ва бошиддат нафас кашед (дар айни
                                        замон бинии чабрдидаро бо рухсора ё ангуштони худ пӯшонед). Ба воситаи дока,
                                        руймол, асбоби махсуси «ҳаво канал» ва ғайра ҳаво дохил кардан мумкин аст.
                                    </Text>
                                    <View className={"mx-auto"}>
                                        <Image source={Image7}/>
                                    </View>
                                    <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>

                                        • нафаскашии сунъӣ бо усули даҳон ба бинӣ бо даҳони ҷабрдида кушода гузаронида
                                        мешавад;
                                    </Text>
                                    <ScrollView horizontal={true}>
                                        <View className={"flex flex-row"}>
                                            <Image source={Image8}/>
                                            <Image source={Image9}/>
                                            <Image source={Image10}/>
                                        </View>
                                    </ScrollView>
                                    <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>

                                        • фосилаи дуюми байни нафасгирии сунъиро риоя кунед (вақти ҳар як сӯзандоруи
                                        ҳаво 1,5 - 2 сония аст)
                                    </Text>
                                    <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>

                                        • пас аз барқарор кардани нафаскашии мустақил дар ҷабрдида (бо васеъшавии қафаси
                                        сина ба таври визуалӣ муайян карда мешавад), нафаскашии сунъиро қатъ намуда,
                                        ҷабрдидаро ба ҳолати устувори паҳлуӣ гузоред (гардон кардани сар, тан ва китф
                                        дар як вақт ба амал бароварда мешавад).
                                    </Text>
                                </View>
                            }>
                        </List.Item>
                    </List.Accordion>
                    <List.Accordion
                        titleStyle={{color: darkMode ? 'white' : '#1E293B'}}
                        className={`${darkMode ? 'bg-slate-600 text-white' : 'text-slate-950 bg-slate-200'} rounded-lg mt-2`}
                        theme={{colors: {background: darkMode ? '#1E293B' : '#E2E8F0'}}}
                        title="МАСҲИ БЕРУНИИ ДИЛ."
                        id="4"
                    >
                        <List.Item
                            title={() =>
                                <View>
                                    <Text className={"text-base text-red-600"}>
                                        МАСҲИ БЕРУНИИ ДИЛ.
                                    </Text>
                                </View>}
                            description={
                                () =>
                                    <View>
                                        <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>
                                            Ҳангоми боздошти дил пайдо мешавад, ки инҳо хос аст:
                                        </Text>
                                        <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>
                                            • ранги сурх ё кабудшавии пӯст;
                                        </Text>
                                        <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>
                                            • аз даст додани ҳуш;
                                        </Text>
                                        <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>
                                            • аз даст додани ҳуш;
                                        </Text>
                                        <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>
                                            • қатъ ё вайрон шудани нафаскашӣ (нафасҳои ларзиш).
                                        </Text>
                                        <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>
                                            • чабрдидаро ба тахкурсии сахти хамвор (фарш, скамейка ва г.) хобонед;
                                        </Text>
                                        <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>
                                            • худро ба паҳлӯи ҷабрдида гузоред ва (агар як шахс кӯмак кунад) бо роҳи
                                            даҳон ба даҳон ё даҳон ба бинӣ ду нафаси тезу пурқувват кунед.
                                        </Text>
                                        <View className={"mx-auto mt-2"}>
                                            <Image source={Image11}/>
                                        </View>
                                        <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>

                                            • кафи як дастро (одатан чап) ба нимаи поёни устухон гузоред (3 ангушти
                                            кундаланг аз канори поёни он ба қафо қадам занед). кафи дасти дуюмро ба
                                            болои кафи якум гузоред.
                                        </Text>
                                        <ScrollView horizontal={true}>
                                            <View className={"flex flex-row"}>
                                                <Image source={Image12}/>
                                                <Image source={Image13}/>
                                                <Image source={Image14}/>
                                            </View>
                                        </ScrollView>
                                        <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>
                                            • бо зарбаҳои зуд (дастҳо дар буғумҳои оринҷ рост карда мешаванд) пахш
                                            карда, онро ба таври амудӣ ба поён 4 - 5 см, бо давомнокии фишор на бештар
                                            аз 0,5 сония гузаронед. ва бо фосилаи пахшкунии на бештар аз 0,5 с;
                                        </Text>
                                        <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>
                                            • барои ҳар 2 нафаскашии чуқури ҳаво ба устухони сина 15 маротиба фишор
                                            диҳед (ҳангоми кумаки як нафар);
                                        </Text>
                                        <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>
                                            • бо иштироки ду нафар дар реаниматсия таносуби «нафаскашӣ - масҳ»-ро ба
                                            андозаи 1:5 гузаронед (яъне баъди илҳоми амиқ ба қафаси сина 5 маротиба
                                            фишор оваред);
                                        </Text>
                                        <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>
                                            • ҳангоми гузаронидани реаниматсия аз тарафи як нафар дар ҳар 2 дақиқа масҳи
                                            дилро ба муддати 2—3 сония қатъ намуда, набзи раги каротиди ҷабрдидаро
                                            санҷед;
                                        </Text>
                                        <ScrollView horizontal={true}>
                                            <View>
                                                <Image source={Image15}/>
                                            </View>
                                        </ScrollView>
                                        <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>
                                            • ҳангоми пайдо шудани набз масҳи берунии дилро бас кунед ва нафаскашии
                                            сунъиро то пайдо шудани нафаскаши давом дихед.
                                        </Text>
                                        <View className={"mx-auto"}>
                                            <Image source={Image16}/>
                                        </View>
                                    </View>
                            }
                        >
                        </List.Item>
                    </List.Accordion>
                </List.AccordionGroup>
            </View>
        </ScrollView>
    );
};

export default Index;