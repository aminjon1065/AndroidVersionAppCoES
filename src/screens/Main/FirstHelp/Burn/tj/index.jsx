import React from 'react'
import {View, Text, Image, ScrollView} from 'react-native';
import img1 from './../assets/1.jpg';
import img2 from './../assets/2.jpg';
import img3 from './../assets/3.jpg';
import img4 from './../assets/4.png';
import img5 from './../assets/5.png';
import img6 from './../assets/6.png';
import img7 from './../assets/7.png';
import img8 from './../assets/8.png';

function Index({darkMode}) {
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-4xl text-center text-red-400 font-bold"}>
                    ДАРАҶАИ СӮХТАН.
                </Text>
                <View className="mx-auto">
                    <Image source={img1} className="w-56 h-56"/>
                </View>
                <Text className={`text-center text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    I дараҷа – сурхшавии пӯст.
                </Text>
                {/*<Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>*/}
                {/*    Сурхшавии ҷои сӯхта ва пайдоиши варамҳо, дарди сӯзишнок.*/}
                {/*</Text>*/}
                <View className="mx-auto">
                    <Image source={img2} className="w-56 h-56"/>
                </View>
                <Text className={`text-center text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    II дараҷа –дар пуст пайдошавии обилаҳо (блистерҳои пур аз моеъи шаффоф) ва зиёдшавии дард.
                </Text>
                {/*<Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>*/}
                {/*    Сухтани пуст – рангаш сурх буда, бо обилаҳои аз моеъи шаффоф пур буда ва дарди сахт.*/}
                {/*</Text>*/}
                <View className="mx-auto">
                    <Image source={img3} className="w-56 h-44"/>
                </View>
                <Text className={`text-center text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    III – IV дараҷа – пурра нобуд шудани пӯст ва қабати мушакҳо.
                </Text>
                {/*<Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>*/}
                {/*    Ранги зардтоби сурхшудаи пуст (мурдани асабҳои пуст, некроз) зиёдшавии дард, саршавии аломатҳои*/}
                {/*    беҳушшавӣ.*/}
                {/*    Пурра сӯхта сиёҳшавии пуст ва устухони зери он.*/}
                {/*</Text>*/}
                <Text className={`text-2xl text-center font-bold ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    ЁРИИ ТАЪҶИЛӢ ҲАНГОМИ СӮХТАН.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    1. Ҳангоми сӯхтагии дараҷаи якум: ҷойи сухтарои дар зери оби ҷории хунук 5-10 дақиқа гузоред. Сатҳи
                    сӯхтаро бо спирт, одеколон ё арақ коркард кунед.

                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    2. Ҳангоми сӯхтагии дараҷаи II - IV бо осеб дидани пӯст, сатҳи сӯхтаро бо аэрозолҳои кафккунанда
                    коркард кунед ё бо рӯймол ё рӯймолчаи тоза пӯшонед.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    3. Бастаҳои ях, бастаҳои барф ё оби хунукро болои матои тоза гузоред.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    4. Ба ҷабрдида 2 - 3 ҳаб анальгин диҳед.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    5. Пеш аз омадан ва муддати дароз интизори мошини ёрии таъҷилӣ нӯшокии гарми фаровон диҳед.
                </Text>
                <View className={"mx-auto mb-5"}>
                    <Image source={img4} className={"w-64 h-44 mb-3 rounded-xl"}/>
                    <Image source={img5} className={"w-64 h-44 rounded-xl"}/>
                </View>
                <Text className={`text-2xl text-center font-bold ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    ҶОЙИ СУХТАГИРО БО ЯХ ХУНУК КУНЕД
                </Text>
                <ScrollView horizontal={true} className={"mb-5"}>
                    <Image source={img6} className={"w-64 h-56 mr-1 rounded-xl"}/>
                    <Image source={img7} className={"w-64 h-56 mr-1 rounded-xl"}/>
                    <Image source={img8} className={"w-64 h-56 rounded-xl"}/>
                </ScrollView>
                <Text className={"text-2xl text-center font-bold text-red-500"}>
                    ДАР ХОТИР ДОРЕД! МУМКИН НЕСТ!
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    1. Сатҳи сӯхтаро бо равған молидан, крахмал ё орд пошидан;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    2. Боқимондаҳои либосро аз сатҳи осебдида кашида гиред;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    3. обилаҳои сӯхтаро кафондан;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    4. Сатҳи сӯхтаро сахт бастан;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    5. аз пӯсти осебдида чирк ва хокро шустан;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    6. Сатҳи пӯсти осебдидаро бо спирт, йод ва дигар маҳлулҳои спиртдор табобат кардан;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    7. Бе тавсияи духтур ба истифодаи доруҳои аналгетикӣ ва наркотикӣ додан.
                </Text>
            </View>
        </ScrollView>
    )
}

export default Index