import React from 'react';
import {Image, ScrollView, Text, View} from "react-native";
import img1 from './../assets/1.png'
import img2 from './../assets/2.jpg'
import img3 from './../assets/3.jpg'
import img4 from './../assets/4.png'

const Index = ({darkMode}) => {
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-red-500 text-2xl text-center font-bold"}>
                    ГАЗИДАНИ МОР
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Ҳангоми газидани морҳои заҳрнок дар пӯсти одам ду доғи хурди сурх аз ворид шудани дандонҳои захрнок
                    мебошад.
                    Ҳолати ҷабрдида аз бисёр сабабҳо вобаста аст: ҷои газидан, вақти сол, миқдори заҳр дар мор ва ғайра.
                    Ҳодисаҳои марги одамон аз газидан хеле кам мушоҳида мешаванд, аммо заҳролудшавӣ аз заҳри он вазнин
                    аст. Дарди шадид дар ҷои газидашуда ва варам, ки метавонад ба тамоми узвҳои зарардида паҳн шавад.
                    Ихтилоли равонӣ: тарс ва изтироб. Минбаъд ва хеле зуд метавонад дарди шикам, қайкунӣ, дарунравӣ ва
                    варами дар рӯй вуҷуд дошта бошад. Аломатҳои вазнинтарин дар дақиқаҳои аввал пастшавии фишори хун ва
                    аз даст додани ҳуш мебошад. Дар ҳолатҳои вазнин, марг метавонад аз боздоштани роҳи нафас аз 12 соат
                    то 7-8 рӯз пас аз газидан ба амал ояд. Нобиноӣ яке аз оқибатҳои вазнини заҳролудшавӣ мебошад.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    <Text className={"text-red-500 font-bold"}>ЁРИИ ТАЪҶИЛӢ ДАР ҶОИ ҲОДИСА.</Text>
                    • Дар давоми 10-15 дақиқаи аввал аз захм фишурдани қатраҳои аввалини хун ё макидан аз захм (ба
                    шарте, ки дандонҳои солим дошта бошад, пардаи луобии холигоҳи даҳон осеб надошта бошад ва чизе барои
                    шустан мавҷуд бошад) ва туф кардан.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Дар дакикахои аввали баъди газидан дар ин чо дарди сабук ва сузиш ба амал меояд, пуст сурх
                    мешавад, варам меафзояд. Заифӣ, чарх задани сар, дилбеҳузурӣ пайдо мешавад, фишори хун паст мешавад.
                    Ин падидаҳо пас аз газидан ҳадди аксар 8-36 соат мерасад.
                </Text>
                <View className={"mx-auto mb-2"}>
                    <Image source={img1} className={"w-96 h-72 rounded-lg"}/>
                </View>
                <View className={"mx-auto mb-2"}>
                    <Image source={img2} className={"w-96 h-72 rounded-lg"}/>
                </View>
                <View className={"mx-auto mb-2"}>
                    <Image source={img3} className={"w-96 h-72 rounded-lg"}/>
                </View>
                <View className={"mx-auto mb-5"}>
                    <Image source={img4} className={"w-96 h-56 rounded-lg"}/>
                </View>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Дарҳол пас аз нешзанӣ, ба ҷабрдида оромӣ таъмин кардан лозим аст, ки ин ҳадди ақали интиқоли
                    заҳрро
                    бо хун таъмин мекунад. Ҷабрдидаро ором кунед. Онро ба ҷои бехатар ва аз обу ҳаво муҳофизатшаванда
                    интиқол диҳед.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Дарҳол ба макидан аз захм шурӯъ кунед. Барои ин дарҳол пас аз газидан захмро бо пахш кардани
                    ангуштон кушоед ва баъд бо даҳони худ заҳрро 15-20 дақиқа макед. Моеъи хунолудро туф кунед. Ин
                    амалҳо барои нигоҳубинкунанда безараранд. Дар сурати дуруст ва сари вақт ҷабидан аз захм 50% заҳрро
                    макидан мумкин аст.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Барои кам кардани гардиши хун ба ҷои газида хунук гузоред (халтаи пластикӣ бо оби хунук). Захмро
                    бо йод ё маҳлули зелёнка тоза кунед ва бо бинт бандед, ки ҳангоми зиёд шудани варам бояд кушоем.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Ба минтақаи зарардидаи бадан мавқеи баланд диҳед, онро ислоҳ кунед, бинт ё шинаро ба кор баред. Ба
                    ҷабрдида нӯшокии зиёд диҳед. Нӯшидани қаҳва мумкин нест. Ба муассисаи тиббӣ интиқол додани
                    ҷабрдидаро ташкил кунед.
                </Text>
                <Text className={"text-xl text-red-500 font-bold"}>
                    ҲАНГОМИ ГАЗИДАНИ МОР МАНЪ АСТ:
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • дар ҷои газидан буридан кунед;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • газидани газро сузондан;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • аз газидан боло турникет гузоред;
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • ба ҷабрдида иҷозат диҳед, ки ҳама гуна фаъолияти ҷисмониро анҷом диҳад.
                </Text>
            </View>
        </ScrollView>
    );
};

export default Index;