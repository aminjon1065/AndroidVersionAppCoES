import React from 'react';
import {Image, ScrollView, Text, View} from "react-native";
import img1 from './../assets/1.png';
import img2 from './../assets/2.jpg';
import onShare from "../../../../../components/onShare";
import {FAB} from "react-native-paper";

const Index = ({darkMode}) => {
    const handleShare = async () => {
        const message = 'Привет, мир!'; // Здесь вы можете указать свое сообщение
        await onShare(message);
    };
    return (
        <View>
            <ScrollView>
                <View>
                    <Text className={"text-2xl text-center font-bold text-red-500"}>
                        Эпилепсия
                    </Text>
                    <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-center`}>
                        Эпилепсия-хроническое неврологическое заболевание, вызванное нарушениями работы головного мозга
                        из-за чрезмерной электрической активности нейронов и сопровождающееся периодически возникающими
                        припадками.
                    </Text>
                </View>
                <View className={"mx-auto"}>
                    <Image source={img1} className={"w-80 h-44 rounded-lg mb-3"}/>
                </View>
                <View className={"mx-auto"}>
                    <Image source={img2} className={"w-80 h-52 rounded-lg mb-3"}/>
                </View>
                <View>
                    <View className={"pl-2"}>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • уложить больного на пол, голову повернуть набок, обеспечить доступ свежего воздуха;
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • Под голову подложить что-нибудь мягкое (можно свернуть вещи, которые оказались под рукой);
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • Осторожно перевернуть на бок, в этом положении ему будет безопасно свободно дышать и
                            человек
                            не подавится, если начнётся рвота;
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • восстановить дыхание - очистить ротовую полость от слизи;
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • обеспечить проходимость дыхательных путей;
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • предупреждение травм головы, конечностей;
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • Уложить пациента на плоскую поверхность и уложить на бок-чтобы слюна свободно вытекала из
                            полости рта и не мешала дыханию, и обеспечить аккуратную фиксацию в данном положении;
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • Вокруг не должно быть острых и твёрдых предметов;
                        </Text>

                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • В случае, если столпились люди, то нужно попросить их отойти в сторону, чтобы обеспечить
                            доступ воздуха;
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • Снимите очки, ослабьте воротник или галстук;
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • Если приступ не прошел через 5 минут или случился снова, травмирована голова, есть другие
                            повреждения, пострадавший не приходит в себя больше 10 минут-вызывайте скорую;
                        </Text>

                    </View>
                    <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        Если есть возможность, то засеките сколько длится приступ. Можно снять приступ на видео-это
                        очень поможет врачу неврологу поставить диагноз, если приступ случился первый раз.
                    </Text>
                    <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        Будьте рядом до того момента, пока пострадавший не придёт в себя.
                        После чего объясните, что случилось. Если это первый приступ, то вызывайте скорую и дождитесь её
                        прибытия. Если приступы уже случались, то может быть, что человек не принял необходимые
                        препараты. Свяжитесь с его родственниками и помогите добраться домой.
                    </Text>
                    <View>
                        <Text className={"text-2xl text-center font-bold text-red-500"}>
                            ЗАПОМНИТЕ, ПРИ СУДОРОГАХ ТАК ДЕЛАТЬ НЕЛЬЗЯ!
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • Нельзя прижимать человека к земле, из-за этого можно получить дополнительные травмы;
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • Нельзя засовывать посторонние предметы в рот, чтобы не повредить зубы и челюсти;
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • Не делайте искусственное дыхание. Когда приступ закончится, то человек практически во всех
                            случаях начинает дышать сам;
                        </Text>
                        <Text className={`${darkMode ? 'text-white' : 'text-slate-950'}`}>
                            • Не нужно давать какую-либо жидкость, до того момента пока человек не пришел в себя
                            окончательно;
                        </Text>
                    </View>
                </View>
                <View className={"items-end mb-5"}>
                    <FAB
                        icon="share"
                        className={" w-36 bg-slate-800 mt-2 text-white"}
                        onPress={handleShare}
                        color={"#fff"}
                        label={"Поделиться"}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default Index;