import React from 'react';
import {View, Text, ScrollView, Image} from "react-native";
import image1 from './../assets/1.jpg';
import image2 from './../assets/2.jpg';

const Index = ({darkMode}) => {
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-xl text-red-500 text-center font-bold"}>
                    Хунукзанӣ
                </Text>
                <View>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        <Text className={"text-red-500 text-base font-bold"}>Хунукзанӣ</Text> –
                        осеби бофтаест, ки дар натиҷаи таъсири ҳарорати паст ба вуҷуд меояд. Сабабҳои
                        сармохӯрӣ гуногун буда, дар шароити мувофиқ (дарозии тӯлонӣ дар сардӣ, шамол, намии баланд,
                        пойафзоли танг ё тар, ҳаракат надоштан, ҳолати бади умумии ҷабрдида – беморӣ, хастагӣ, мастии
                        спиртӣ, талафоти хун ва ғ.)
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - Майдони сармозадаи бадан намуди зоҳирии хос дорад: пӯсташ сафед аст, дасту пояш таассуроти
                        сангшуда мебошад. Пас аз гармшавӣ дар минтақаи сармозада варам ба вуҷуд меояд, пас тадриҷан
                        вобаста ба дараҷаи сармозада тағӣироти илтиҳобӣ бо сармозании шадид ба амал меояд.
                        - некроз (марги ҳуҷайраҳо).
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        Вобаста аз хусусияти осеб, чор дараҷаи хунукзанӣ вуҷуд дорад:
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - Дараҷаи I - сабук, пас аз гармкунии ҷабрдида, варам пайдо шуда, рангаш кабуд мешавад;

                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - Дараҷаи II - шадидтар, дар пуст обилаҳо пайдо мешаванд, ки бо моеъ ва шаффоф пур мешаванд;
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - Дараҷаи III - вазнин, обилаҳо бо моеъи хунин пур мешаванд, пас аз чанд рӯз дар ҷоӣи худ
                        мавзеъҳои некроз пайдо мешавад, баъд аз ӯ доғҳо пайдо мешавад;
                    </Text>
                    <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - дараҷаи IV - вазнинтар, зарарбинии на танҳо пӯст, балки бофтаҳои нарм ва ҳатто устухонҳо
                        мешаванд. Агар сироят ҳамроҳ шавад, гангренаи хушк ё тар мешавад.

                    </Text>
                    <Text className={"text-xl text-red-500 text-center font-bold"}>
                        НИШОНАҲОИ ХУНУКГУЗАРОНӢ.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        • эҳсоси сардӣ;
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        • сӯхтан;
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        • ранги сафед ё кабудранг шудани пӯст;
                    </Text>
                    <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        • кам шудани ҳиссиёт;
                    </Text>
                    <Text className={"text-xl text-red-500 text-center font-bold"}>
                        ҲАНГОМИ ЁРИИ АВВАЛ ҶАБРДИДАРО БА ҲУЧРАИ ГАРМ Ё ДАР ҲАММОМ БО ОБИ ГАРМ ГУЗОРЕД.
                    </Text>
                    <View className={"mx-auto"}>
                        <Image source={image1} className={"w-64 h-56 mb-5"}/>
                    </View>
                    <Text className={"text-xl text-red-500 text-center font-bold"}>
                        ЛИБОСУ ПОЙАФЗОЛҲОИ ТАРРО БО ХУШК ИВАЗ НАМОЕД.
                    </Text>
                    <View className={"mx-auto"}>
                        <Image source={image2} className={"w-96 h-36 mb-5"}/>
                    </View>
                    <Text className={"text-xl text-red-500 text-center font-bold"}>
                        ҲАНГОМИ РАСОНИДАНИ ЁРИИ АВВАЛ ЧӢ МАЪН АСТ!
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        • Дар мавриди хунукзанӣ ба одам додани арақ манъ аст.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        • ҳангоми хунукзанӣ масҳ накунед.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default Index;