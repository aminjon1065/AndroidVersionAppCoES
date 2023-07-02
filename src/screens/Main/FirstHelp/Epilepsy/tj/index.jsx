import React from 'react';
import {Image, ScrollView, Text, View} from "react-native";
import img1 from './../assets/1.png';
import img2 from './../assets/2.jpg';

const Index = ({darkMode}) => {
    return (
        <View>
            <ScrollView>
                <View>
                    <Text className={"text-2xl text-center font-bold text-red-500"}>
                        Саръ
                    </Text>
                    <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center`}>
                        Саръ (эпилепсия)-бемории музмини системаи асаб буда дар натиҷаи вайроншавии кори мағзи сар яъне
                        бемориҳои аз саргузаронидаи парда ва моддаҳои мағзи сар (сарсом, арахноидит ва арахноэнсефалит)
                        ба амал омада асосан дар шакли хурӯҷӣ такроршаванда зоҳир мегардад.
                    </Text>
                </View>
                <View className={"mx-auto"}>
                    <Image source={img1} className={"w-72 h-44 rounded-lg mb-3"}/>
                </View>
                <View className={"mx-auto"}>
                    <Image source={img2} className={"w-72 h-48 rounded-lg mb-3"}/>
                </View>
                <View>
                    <View className={"pl-2"}>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • беморро ба фарш гузоред, сарашро ба як тараф гардонед, ки ҳавои тоза гирад;
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • дар зери сар чизи мулоим гузоред (шумо метавонед чизҳои дар даст бударо монед);
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • Бо эҳтиёт ба як тараф гардонида ин ҳолат барои ӯ бехатар буда, озод нафас кашидан ва агар
                            қайкунӣ сар шавад, ҷабрдида нафасгир намешавад;
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • нафаскаширо барқарор кунед - даҳонро аз луоб тоза кунед;
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • таъмини гузариши роҳҳои нафас;
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • пешгирии осеби мағзи сар ва дасту пой;
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • Беморро дар ҷойи ҳамвор ва ба паҳлӯ хобонда, то оби даҳон озодона барояд ва ба нафаскашӣ
                            халал нарасонад ва дар ин мавқеъ ҷойгиршавии дақиқро таъмин кунед;
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • Дар гирду атроф ашёҳои тез ва сахт набошад;
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • Агар гирди ҷабрдида серодам бошад, аз онҳо хоҳиш кунед, ки дуртар аз шахси бемор бошанд,
                            ки он бо дастрасии ҳаво таъмин бошад;
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • Айнакашро кашед, гиребон ё галстукашро кушоед;
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • Агар рагкашӣ пас аз 5 дақиқа нагузарад ва ё такрор шавад, сараш захмдор ва дигар захмҳо
                            бошад, ҷабрдида зиёда аз 10 дақиқа ба худ наояд-ёрии таъҷилиро даъват кунед.
                        </Text>
                    </View>
                    <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        Назорат, кунед, ки рагкашӣ чӣ қадар давом мекунад, агар хуруҷӣ рагкашӣ бори аввал рӯх дода
                        бошад, метавонед хуруҷро дар видео сабт кунед - ин ба духтури асабшинос барои муайян кардани
                        ташхис кӯмак намояд;
                    </Text>
                    <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        То ба ҳуш омадани ҷабрдида дар наздаш бошед.
                        Сипас фаҳмонед, ки чӣ рӯӣ дод. Агар ин аввалин хуруҷ бошад, пас ёрии таъҷилӣ даъват кунед ва то
                        расидани он интизор шавед. Агар рагкашӣ чанд маротиба рух дода бошад, пас эҳтимол дорад, ки шахс
                        доруҳои заруриро нагирифтааст. Бо хешовандонаш тамос гиред ва то ба хонааш расидан кумак кунед.
                    </Text>
                    <View>
                        <Text className={"text-2xl text-center font-bold text-red-500"}>
                            ДАР ХОТИР ДОРЕД, КИ ИНРО НАКУНЕД!
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • ҷабрдидаро ба замин зер накунед, аз ин сабаб ҷароҳатҳои иловагӣ гирифта метавонанд;
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • Ба даҳони ҷабрдида ашёҳои бегона нагузоред, то дандонҳо ва ҷоғаш осеб набинанд.
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • Нафасдиҳии сунъӣ накунед, вақте ки хуруҷ ба охир мерасад, ҷабрдида мустақилона нафаскашӣ
                            мекунад.
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • То он даме, ки одам пурра бедор нашавад, моеъ додан мумкин нест.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    );
};

export default Index;