import React from 'react';
import {View, Text, ScrollView, Image, Share} from "react-native";
import Image1 from './../assets/files/help1.jpg';
import Image2 from './../assets/files/help2.jpg';
import Image3 from './../assets/files/help3.jpg';
import Image4 from './../assets/files/help4.jpg';
import Image5 from './../assets/files/help5.jpg';
import Image6 from './../assets/files/help6.jpg';
import Image7 from './../assets/files/help7.jpg';
import Image8 from './../assets/files/help8.jpg';
import Image9 from './../assets/files/help9.jpg';
import Image10 from './../assets/files/help10.jpg';
import Image11 from './../assets/files/help11.jpg';
import Image12 from './../assets/files/help12.jpg';
import Image13 from './../assets/files/help13.jpg';
import Image14 from './../assets/files/help14.jpg';
import Image15 from './../assets/files/help15.jpg';
import Image16 from './../assets/files/help16.jpg';
import {FAB} from "react-native-paper";
import SOSCALL from "../../../../../components/SOSCALL";
import onShare from "../../../../../components/onShare";

const Index = ({darkMode}) => {
    const shareFn = async ()=>{
        const message = 'ЁРИИ АВВАЛИН.\n' +
            'НИШОНАҲОИ ХАЁТ ВА МАРГИ ИНСОН.\n' +
            'МАЪЛУМ НАМУДАНИ ҚАТЪ ШУДАНИ ГАРДИШИ ХУН\n' +
            'Беҳушшавӣ\n' +
            'Қатъ шудани нафаскашӣ\n' +
            'Набудани набз дар шараёнҳои хоб\n' +
            'Таъғирёбии ранги пуст.\n' +
            'Кушодшавии гавҳараки чашм.\n' +
            'Санҷиши ҳолати ҳуш: фарёдкардани ҷабрдида, аз китф афшондани бемор \n' +
            'Санҷиши нафас ба гуш (бо овоз, бо ёрии оинача).\n' +
            'Санҷиши набз дар шараёни хоб.\n' +
            'Санҷиши гавҳараки чашм бо равшании чароғак.\n' +
            'ДАВОМАТИ МАРГИ КЛИНИКӢ: 3-5 ДАҚИҚА.\n' +
            'ҚОИДАҲОИ АСОСИИ ЭҲЁИ ДИЛУ ШУШ\n' +
            '- Таъмини роҳҳои гузариши нафаскашӣ.\n' +
            '- нигоҳ доштани нафаскашӣ.\n' +
            '- нигоҳ доштани гардиши хун.\n' +
            'ИДОРАИ ГУЗАРИШИ РОҲҲОИ НАФАС:\n' +
            '•\tСари беморро ба қафо хам кунед.\n' +
            '•\tҶоғашро боло кашед.\n' +
            'ГУЗАРОНИДАНИ НАФАСИ СУНЪӢ\n' +
            '•\tСари беморро ба қафо хам кунед.\n' +
            '•\tНафаси ором гиред.\n' +
            '•\tБо ду ангушт қисми нарми бинии ҷабрдидаро махкам доред.\n' +
            '•\tДу нафаси чуқур кашида ба шуши ҷабрдида нафас диҳед, даҳони ӯро бо лабҳои худ сахт махкам кунед.\n' +
            '•\tГУЗАРОНИДАНИ НАФАСИ СУНЪӢ\n' +
            '•\t• Давомнокии нафаскашӣ -1 сония.\n' +
            '•\t• Баланд шудани қафаси синаи ҷабрдидаро нигоҳ кунед.\n' +
            '•\tФИШОРОВАРДАН БА ҚАФАСИ СИНА\n' +
            'Дар паҳлӯи ҷабрдида истода\n' +
            'Иҷрои ҳаводиҳии механикӣ ва масҳи ғаӣримустақими дил аз ҷониби як наҷотдиҳанда: 2 нафас + 15 фишор.\n' +
            'Иҷрои ҳаводиҳии механикӣ ва масҳи ғайримустақими дил аз ҷониби ду наҷотдиҳанда: 1 нафас + 5 фишор\n' +
            '- Ба мошини ёрии таъҷилӣ занг занед (тел. «03» ё «112»)\n' +
            '\n';
        await onShare(message);
    }
    return (
        <ScrollView>
            <View>
                <Text className={"text-2xl text-center font-bold text-red-500"}>
                    ЁРИИ АВВАЛИН.
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center`}>
                    НИШОНАҲОИ ХАЁТ ВА МАРГИ ИНСОН.
                    МАЪЛУМ НАМУДАНИ ҚАТЪ ШУДАНИ ГАРДИШИ ХУН
                </Text>
                <View className={"mt-5"}>
                    <View className={"mx-auto"}>
                        <Image source={Image1} className={"w-72 h-72 rounded-xl"}/>
                    </View>
                    <View>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center text-base`}>
                            Беҳушшавӣ
                        </Text>
                    </View>
                </View>
                <View className={"mt-5"}>
                    <View className={"mx-auto"}>
                        <Image source={Image2} className={"w-72 h-72 rounded-xl"}/>
                    </View>
                    <View>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center text-base`}>
                            Қатъ шудани нафаскашӣ
                        </Text>
                    </View>
                </View>
                <View className={"mt-5"}>
                    <View className={"mx-auto"}>
                        <Image source={Image3} className={"w-72 h-72 rounded-xl"}/>
                    </View>
                    <View className={"mx-auto"}>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center text-base`}>
                            Набудани набз дар шараёнҳои хоб:
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                            - Таъғирёбии ранги пуст.
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                            - Кушодшавии гавҳараки чашм.
                        </Text>

                    </View>
                </View>
                <View className={"mt-5"}>
                    <View className={"mx-auto"}>
                        <Image source={Image4} className={"w-72 h-72 rounded-xl"}/>
                    </View>
                    <View>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center text-base`}>
                            Санҷиши ҳолати ҳуш: фарёдкардани ҷабрдида, аз китф афшондани бемор.
                        </Text>
                    </View>
                </View>
                <View className={"mt-5"}>
                    <View className={"mx-auto"}>
                        <Image source={Image5} className={"w-72 h-72 rounded-xl"}/>
                    </View>
                    <View>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center text-base`}>
                            Санҷиши нафас ба гуш (бо овоз, бо ёрии оинача).
                        </Text>
                    </View>
                </View>
                <View className={"mt-5"}>
                    <View className={"mx-auto"}>
                        <Image source={Image6} className={"w-72 h-72 rounded-xl"}/>
                    </View>
                    <View>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center text-base`}>
                            Санҷиши набз дар шараёни хоб.
                        </Text>
                    </View>
                </View>
                <View className={"mt-5"}>
                    <View className={"mx-auto"}>
                        <Image source={Image7} className={"w-72 h-72 rounded-xl"}/>
                    </View>
                    <View>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center text-base`}>
                            Санҷиши гавҳараки чашм бо равшании чароғак.
                        </Text>
                    </View>
                </View>
                <Text className={"text-xl mt-10 text-center font-bold text-red-500"}>
                    ДАВОМАТИ МАРГИ КЛИНИКӢ: 3-5 ДАҚИҚА.
                </Text>
                <Text className={"text-xl mt-10 text-center font-bold text-red-500"}>
                    ҚОИДАҲОИ АСОСИИ ЭҲЁИ ДИЛУ ШУШ
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - Таъмини роҳҳои гузариши нафаскашӣ.
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - Нигоҳ доштани нафаскашӣ.
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - Нигоҳ доштани гардиши хун.
                </Text>
                <Text className={"text-xl mt-10 text-center font-bold text-red-500"}>
                    ИДОРАИ ГУЗАРИШИ РОҲҲОИ НАФАС:
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    • Сари беморро ба қафо хам кунед.
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    • Ҷоғашро боло кашед.
                </Text>
                <View className={"mx-auto mt-2"}>
                    <Image source={Image8} className={"w-72 h-72 rounded-xl"}/>
                </View>
                <Text className={"text-xl mt-10 text-center font-bold text-red-500"}>
                    • ГУЗАРОНИДАНИ НАФАСИ СУНЪӢ
                </Text>
                <ScrollView horizontal>
                    <View className={"mt-2"}>
                        <View className={""}>
                            <Image source={Image9} className={"w-72 h-72 rounded-xl"}/>
                        </View>
                        <View className={"w-72"}>
                            <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center text-base`}>
                                • Сари беморро ба қафо хам кунед, нафаси ором гиред.
                            </Text>
                        </View>
                    </View>
                    <View className={"mt-2 mx-2"}>
                        <View className={""}>
                            <Image source={Image10} className={"w-72 h-72 rounded-xl"}/>
                        </View>
                        <View className={"w-72"}>
                            <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center text-base`}>
                                • Бо ду ангушт қисми нарми бинии ҷабрдидаро махкам доред.
                            </Text>
                        </View>
                    </View>
                    <View className={"mt-2"}>
                        <View className={""}>
                            <Image source={Image11} className={"w-72 h-72 rounded-xl"}/>
                        </View>
                        <View className={"w-72"}>
                            <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center text-base`}>
                                • Ду нафаси чуқур кашида ба шуши ҷабрдида нафас диҳед, даҳони ӯро бо лабҳои худ сахт
                                махкам кунед.
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <View>
                    <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                        • Давомнокии нафаскашӣ -1 сония.
                    </Text>
                </View>
                <View>
                    <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                        • Баланд шудани қафаси синаи ҷабрдидаро нигоҳ кунед.
                    </Text>
                </View>
                <View>
                    <Text className={"text-xl mt-10 text-center font-bold text-red-500"}>
                        ФИШОРОВАРДАН БА ҚАФАСИ СИНА
                    </Text>
                    <View className={"mt-2"}>
                        <View className={"mx-auto"}>
                            <Image source={Image12} className={"w-72 h-72 rounded-xl"}/>
                        </View>
                        <View>
                            <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center text-base`}>
                                Дар паҳлӯи ҷабрдида истода
                            </Text>
                        </View>
                    </View>
                    <View className={"mt-5"}>
                        <View className={"mx-auto"}>
                            <Image source={Image13} className={"w-72 h-72 rounded-xl"}/>
                        </View>
                        <View>
                            <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center text-base`}>
                                Иҷрои ҳаводиҳии механикӣ ва масҳи ғаӣримустақими дил аз ҷониби як наҷотдиҳанда: 2 нафас + 15 фишор.
                            </Text>
                        </View>
                    </View>
                    <View className={"mt-5"}>
                        <View className={"mx-auto"}>
                            <Image source={Image14} className={"w-72 h-80 rounded-xl"}/>
                        </View>
                        <View>
                            <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center text-base`}>
                                Иҷрои ҳаводиҳии механикӣ ва масҳи ғайримустақими дил аз ҷониби ду наҷотдиҳанда: 1 нафас + 5 фишор
                            </Text>
                        </View>
                    </View>
                    <View className={"mt-5"}>
                        <ScrollView horizontal>
                            <Image source={Image15} className={"w-52 h-40"}/>
                            <Image source={Image16} className={"w-52 h-40"}/>
                        </ScrollView>
                        <View>
                            <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center text-base`}>
                                - Ба мошини ёрии таъҷилӣ занг занед
                            </Text>
                        </View>
                    </View>
                </View>
                <SOSCALL />
                <View className={"items-end mb-5"}>
                    <FAB
                        icon="share"
                        className={" w-36 bg-slate-800 mt-2 text-white"}
                        onPress={shareFn}
                        color={"#fff"}
                        label={"Равон кардан"}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default Index;