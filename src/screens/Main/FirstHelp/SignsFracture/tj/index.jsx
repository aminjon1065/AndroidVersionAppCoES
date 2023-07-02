import React from 'react';
import {ScrollView, View, Text, Image} from "react-native";
import img1 from './../assets/1.jpg';
import img2 from './../assets/2.jpg';
import img3 from './../assets/3.jpg';
import img4 from './../assets/4.jpg';
import img5 from './../assets/5.jpg';
import img6 from './../assets/6.jpg';
import img7 from './../assets/7.jpg';
import img8 from './../assets/8.jpg';

const Index = ({darkMode}) => {
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={`text-red-500 font-bold text-2xl text-center`}>
                    Шикасти устухонҳо
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    Ҳангоми шикасти устухонҳо дарди сахт, беҳуши ва хунравӣ дида мешавад.
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    Шикасти устухон ду намуд мешавад шикасти кушода ва махкам. Дар аввал вайроншавии бофтаҳои пуст бо
                    устухонпораҳо дида мешавад.
                </Text>
                <Text className={`text-red-500 font-bold text-xl text-center`}>
                    Ёрии аввалин ҳангоми шикастани устухонҳо:
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    1. Баҳо додани ҳолати заррадида ва муайян намудани мавқеи шикасти устухон;
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    2. Ҳангоми хунравӣ дар ҷойи шикасти устухон манъ намудани хунравӣ;
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    3. Интиқоли зарардида ба дигар мавқеъ, аммо муайян намудан зарур аст, ки агар шикаст ё латхурии
                    сутунмуҳра бошад то омадани мутахассисони тиббӣ зарардидаро дар ҳолати аввала нигоҳ медорем;
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    4. Манъ кардани ҷунбишии устухонҳо дар мавзеъи шикаст иммобилизация;
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    5. Мондани шинаҳо. Ҳангоми набудани шинаҳо мо метавонем аз чубҳо, картони сахт ва дигар ашёҳо
                    истифода бурда, тахтача ё чубро ба дасту пой бо дока, сачок ва ғайра махкам мебанданд. Агар тахтача
                    набошад, дасти шикастаро ба тан ва пойи шикастаро бо пойи сиҳат докапеч кардан мумкин аст. Дар
                    ҳолати шикасти кушода шинаҳо гузошта намешаванд.
                </Text>
                <Text className={`text-red-500 font-bold text-xl text-center`}>
                    ЁРИИ АВВАЛИН ҲАНГОМИ ШИКАТИ УСТУХОНҲО
                </Text>
                <View className={"mx-auto"}>
                    <Image source={img5} className={"w-64 h-72 rounded-xl"}/>
                </View>
                <View className={"mx-auto"}>
                    <Image source={img6} className={"w-72 h-44 rounded-xl"}/>
                </View>
                <View className={"mx-auto"}>
                    <Image source={img7} className={"w-72 h-44 rounded-xl"}/>
                </View>
                <View className={"mx-auto"}>
                    <Image source={img8} className={"w-72 h-44 rounded-xl"}/>
                </View>
                {/*<Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>*/}
                {/*    - Дард дар ҷои шикаста ҳангоми ҳаракат. ҷунбонда натавонистани дасту пой. ихтилоли шакл ва дарозии*/}
                {/*    он мебошанд.*/}

                {/*</Text>*/}
                {/*<Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>*/}
                {/*    - Варам дар ҷои шикаста метавонад зуд (дар давоми 15 дақиқа пас аз ҷароҳат) ё дар тӯли якчанд соат*/}
                {/*    пайдо мешавад.*/}
                {/*</Text>*/}
                {/*<Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>*/}
                {/*    - Хуномос (гематома) ҷамшавии маҳдуди хун - метавонад вуҷуд надошта бошад, аммо аксар вақт дар ҷойи*/}
                {/*    шикаст на ҳамеша рух диҳад. Агар набз дошта бошад, пас хунравӣ идома меёбад.*/}
                {/*</Text>*/}
                {/*<Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>*/}
                {/*    - Маҳдудияти ҳаракат.*/}
                {/*</Text>*/}
                {/*<Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>*/}
                {/*    - Ҳаракати устухон метавонад аз минтақаи буғум дур бошад.*/}
                {/*</Text>*/}
                {/*<Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>*/}
                {/*    - Тазйиқ хурдан (Деформатсия) дар натиҷаи таъсир овардани қувваи ин ё он дараҷа, яъне андоза ё шакли*/}
                {/*    дасту пойҳо ё ҳаракати ғайритабиии буғумҳо. </Text>*/}
                {/*<Text className={"text-blue-600 text-center text-xl"}>*/}
                {/*    ЁРИИ АВВАЛИН ҲАНГОМИ ШИКАСТИ УСТУХОНҲО:*/}
                {/*</Text>*/}
                {/*<Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>*/}
                {/*    - манъ намудани хунравӣ;*/}
                {/*</Text>*/}
                {/*<Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>*/}
                {/*    - кашидани либоси ҷабрдида дар ҷойи захм;*/}
                {/*</Text>*/}
                {/*<Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>*/}
                {/*    - бо бандинаи тоза пушидани захм;*/}
                {/*</Text>*/}
                {/*<Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>*/}
                {/*    - доруҳои дардкамкунанда диҳед, агар ҷабрдида ҳуш дошта бошад;*/}
                {/*</Text>*/}
                {/*<Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>*/}
                {/*    - интиқоли ҷабрдида.*/}
                {/*</Text>*/}
                <ScrollView horizontal={true} className={"mb-5"}>
                    <Image source={img1} classname={"w-56 h-56"}/>
                </ScrollView>
                <Text className={"text-blue-600 text-center text-xl"}>
                    ИНТИҚОЛ (ИММОБИЛИЗАЦИЯ) – И ПОЙҲО.
                </Text>
                <View className={"mx-auto"}>
                    <Image source={img2} className={"w-96 h-48"}/>
                </View>
                <View className={"mx-auto"}>
                    <Image source={img3} className={"w-96 h-36"}/>
                </View>
                <View className={"mx-auto"}>
                    <Image source={img4} className={"w-96 h-28"}/>
                </View>
            </View>
        </ScrollView>
    );
};

export default Index;