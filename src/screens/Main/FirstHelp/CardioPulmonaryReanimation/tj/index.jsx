import React from 'react';
import {View, Text, Image, ScrollView, Linking, TouchableWithoutFeedback} from "react-native";
import image1 from './../assets/1.jpg'
import image2 from './../assets/2.jpg'
import image3 from './../assets/3.jpg'
import image4 from './../assets/4.jpg'
import image5 from './../assets/5.jpg'
import image6 from './../assets/6.jpg'
import image7 from './../assets/7.jpg'
import image8 from './../assets/8.jpg'
import image9 from './../assets/9.jpg'
import image10 from './../assets/10.jpg'
import image11 from './../assets/11.jpg'
import image12 from './../assets/12.jpg'
import image13 from './../assets/13.jpg'
import image14 from './../assets/14.jpg'
import image15 from './../assets/15.jpg'
import CallIcon from "react-native-vector-icons/MaterialIcons";

const Index = () => {
    const call = async (number) => {
        try {
            await Linking.openURL(`tel:${number}`)
        } catch (e) {
            console.log('error')
        }
    }
    return (
        <ScrollView>
            <View className={"px-2"}>
                <Text className={"text-4xl text-center text-red-400 font-bold"}>
                    ЭҲЁИ ДИЛУ ШУШ
                </Text>
                <Text className="text-center text-blue-600 text-xl">
                    Барои худ чи бояд донист?
                </Text>
                <Text className={"ml-1 text-base"}>
                    Барои одами калонсол:
                </Text>
                <Text className={"ml-2 text-base"}>
                    - Нафаскаши дар як дақиқа-<Text className={"text-red-400 font-bold"}>12-18</Text> маротиба
                </Text>
                <Text className={"ml-2 text-base"}>
                    - Таппиши дил дар як дақиқа <Text className={"text-red-400 font-bold"}>69-80</Text> маротиба
                </Text>
                <Text className={"ml-2 text-base"}>
                    - Меъёри фишори хун <Text className={"text-red-400 font-bold"}>120/80</Text> мм.сут.сим.
                </Text>
                <Text className="text-center text-blue-600 text-xl">
                    МАЪЛУМ НАМУДАНИ ҚАТЪ ШУДАНИ ГАРДИШИ ХУН
                </Text>
                <View className={"w-3/6 mx-auto p-5"}>
                    <View className={"mx-auto"}>
                        <Image source={image1}/>
                    </View>
                    <Text className={"text-center text-base "}>
                        Беҳушшавӣ
                    </Text>
                </View>
                <View className={"w-3/6 mx-auto p-5"}>

                    <View className={"mx-auto mt-2"}>
                        <Image source={image2}/>
                    </View>
                    <Text className={"text-center text-base"}>
                        Қатъ шудани нафаскашӣ
                    </Text>
                </View>
                <View className={"w-5/6 mx-auto p-5"}>
                    <View className={"mx-auto"}>
                        <Image source={image3} className={"w-32 h-32"}/>
                    </View>
                    <Text className={"ml-1 text-base text-center"}>
                        Набудани набз дар шараёнҳои хоб:
                    </Text>
                    <Text className={"ml-2 text-base text-center"}>
                        1 Таъғирёбии ранги пуст.
                    </Text>
                    <Text className={"ml-2 text-base text-center"}>
                        2 Кушодшавии гавҳараки чашм.
                    </Text>
                </View>
                <View className={"w-5/6 mx-auto p-5"}>
                    <View className={"mx-auto"}>
                        <Image source={image4} className={"w-32 h-32"}/>
                    </View>
                    <Text className={"text-center text-base"}>
                        Санҷиши ҳолати ҳуш: фарёдкардани ҷабрдида, аз китф афшондани бемор
                    </Text>
                </View>

                <View className={"w-5/6 mx-auto p-5"}>
                    <View className={"mx-auto"}>
                        <Image source={image5} className={"w-32 h-32"}/>
                    </View>
                    <Text className={"text-center text-base"}>
                        Санҷиши нафас ба гуш (бо овоз, бо ёрии оинача).
                    </Text>
                </View>
                <View className={"w-5/6 mx-auto p-5"}>
                    <View className={"mx-auto"}>
                        <Image source={image6} className={"w-32 h-32"}/>
                    </View>
                    <Text className={"text-center text-base"}>
                        Санҷиши набз дар шараёни хоб.
                    </Text>
                </View>

                <View className={"w-5/6 mx-auto p-5"}>
                    <View className={"mx-auto"}>
                        <Image source={image7} className={"w-32 h-32"}/>
                    </View>
                    <Text className={"text-center text-base"}>
                        Санҷиши гавҳараки чашм бо равшании чароғак.
                    </Text>
                </View>
            </View>
            <View className={"px-2"}>
                <Text className="text-center text-blue-600 text-xl">
                    ДАВОМАТИ МАРГИ КЛИНИКӢ: 3-5 ДАҚИҚА.
                </Text>
                <Text className="text-center text-blue-600 text-xl">
                    ҚОИДАҲОИ АСОСИИ ЭҲЁИ ДИЛУ ШУШ
                </Text>
                <Text className={"text-start text-base"}>
                    - Таъмини роҳҳои гузариши нафаскашӣ.
                </Text>
                <Text className={"text-start text-base"}>
                    - нигоҳ доштани нафаскашӣ.
                </Text>
                <Text className={"text-start text-base"}>
                    - нигоҳ доштани гардиши хун.
                </Text>
                <View>
                    <Text className="text-center text-blue-600 text-xl">
                        ИДОРАИ ГУЗАРИШИ РОҲҲОИ НАФАС:
                    </Text>
                    <Text className={"text-start text-base"}>
                        • Сари беморро ба қафо хам кунед.
                    </Text>
                    <Text className={"text-start text-base"}>
                        • Ҷоғашро боло кашед.
                    </Text>
                    <View className={"mx-auto"}>
                        <Image source={image8} className={"w-44 h-44"}/>
                    </View>
                </View>
                <Text className="text-center text-blue-600 text-xl">
                    ГУЗАРОНИДАНИ НАФАСИ СУНЪӢ
                </Text>
                <Text className={"text-start text-base"}>
                    • Сари беморро ба қафо хам кунед.
                </Text>
                <Text className={"text-start text-base"}>
                    • Нафаси ором гиред.
                </Text>
                <Text className={"text-start text-base"}>
                    • Бо ду ангушт қисми нарми бинии ҷабрдидаро махкам доред.
                </Text>
                <Text className={"text-start text-base"}>
                    • Ду нафаси чуқур кашида ба шуши ҷабрдида нафас диҳед, даҳони ӯро бо лабҳои худ сахт махкам
                    кунед.
                </Text>
                <ScrollView horizontal={true} className={"mb-3"}>
                    <Image source={image9} className={"w-44 h-44 mr-2 rounded"}/>
                    <Image source={image10} className={"w-44 h-44 mr-2 rounded"}/>
                    <Image source={image11} className={"w-44 h-44 rounded"}/>
                </ScrollView>
                <View className={"mb-3"}>
                    <Text className="text-center text-blue-600 text-xl">
                        ГУЗАРОНИДАНИ НАФАСИ СУНЪӢ
                    </Text>
                    <Text className={"text-start text-base"}>
                        • Давомнокии нафаскашӣ -1 сония.
                    </Text>
                    <Text className={"text-start text-base"}>
                        • Баланд шудани қафаси синаи ҷабрдидаро нигоҳ кунед.
                    </Text>
                </View>
                <View>
                    <Text className="text-center text-blue-600 text-xl">
                        ФИШОРОВАРДАН БА ҚАФАСИ СИНА
                    </Text>
                    <View className={"mb-2"}>
                        <View className={"mx-auto"}>
                            <Image source={image12} className={"w-44 h-44 rounded mr-1"}/>
                        </View>
                        <Text className={"text-center text-base"}>Дар паҳлӯи ҷабрдида истода</Text>
                    </View>
                    <View className={"mb-2"}>
                        <View className={"mx-auto"}>
                            <Image source={image13} className={"w-44 h-44 rounded mr-1"}/>
                        </View>
                        <Text className={"text-center text-base"}>
                            Иҷрои ҳаводиҳии механикӣ ва масҳи ғаӣримустақими дил аз ҷониби як наҷотдиҳанда: 2 нафас + 15 фишор.
                        </Text>
                    </View>
                    <View className={"mb-2"}>
                        <View className={"mx-auto"}>
                            <Image source={image14} className={"w-44 h-44 rounded mr-1"}/>
                        </View>
                        <Text className={"text-center text-base"}>
                            Иҷрои ҳаводиҳии механикӣ ва масҳи ғайримустақими дил аз ҷониби ду наҷотдиҳанда: 1 нафас + 5 фишор
                        </Text>
                    </View>
                    <View className={"mb-2"}>
                        <View className={"mx-auto"}>
                            <Image source={image15} className={"w-56 h-44 rounded mr-1"}/>
                        </View>
                        <Text className={"text-center text-base"}>
                            Ба ёрии таъҷилӣ занг занед
                        </Text>
                        <View className={"flex flex-row"}>
                            <TouchableWithoutFeedback onPress={() => call('03')}>
                                <View
                                    className="flex flex-row flex-1 mr-1 items-center justify-center rounded-xl py-3 bg-red-500">
                                    <CallIcon name='phone' size={32} color={"white"}/>
                                    <Text className="text-center text-white ml-3 text-2xl font-bold">
                                        03
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => call('03')}>
                                <View
                                    className="flex flex-row flex-1 mr-1 items-center justify-center rounded-xl py-3 bg-red-500">
                                    <CallIcon name='phone' size={32} color={"white"}/>
                                    <Text className="text-center text-white ml-3 text-2xl font-bold">
                                        112
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>

            </View>
        </ScrollView>
    );
};
export default Index;