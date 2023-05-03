import React from 'react';
import {View, Text, ScrollView, Image} from "react-native";
import image1 from './../assets/1.jpg';
import image2 from './../assets/2.jpg';
import image3 from './../assets/3.png';
import image4 from './../assets/4.png';
import image5 from './../assets/5.jpg';
import image6 from './../assets/6.jpg';
import image7 from './../assets/7.jpg';
import image8 from './../assets/8.jpg';
import image9 from './../assets/9.jpg';
import image10 from './../assets/10.jpg';
import image11 from './../assets/11.jpg';
import image12 from './../assets/12.jpg';
import image13 from './../assets/13.jpg';

const Index = ({darkMode}) => {
    return (
        <View className={"pl-2"}>
            <ScrollView>
                <Text className={"text-center text-xl text-red-500 font-bold"}>
                    ҶИСМИ БЕГОНА
                </Text>
                <Text className={"text-center text-xl text-red-500 font-bold"}>
                    НАМУДИ ҶИСМҲОИ БЕГОНА:
                </Text>
                <Text className={"text-lg text-blue-600 text-center"}>
                    Вобаста аз шакл, ҳама ҷисмҳои бегонаро ба се гурӯҳ тақсим кардан мумкин аст:
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    1. Ҷисмҳои васеъ ва ҳамвор ба тангамонанд гурӯҳбандӣ мешаванд. Инҳо худи тангаҳо ва тугмаҳои ба онҳо
                    монанд, инчунин ҳама гуна пластинаҳои мудавваршудаи ҳамвор мебошанд.

                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    2. Гурўҳи дигар ашёҳои курашакл ё нахӯдшакл - ҳама гуна доначаҳо ва тубчаҳо, инчунин порчаҳои
                    хоиданашудаи картошка, ҳасиб, бодиринг ё себро ба ҳам мепайвандад.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    3. Ба гурўҳи охирин, ки бояд ба он таваҷҷӯҳи махсус дода шавад, ҷисмҳои бегонаеро дар бар мегиранд,
                    ки шаклашон ба пиёла шабоҳат дорад. Аксар вақт, ин пораҳои кабоб мебошанд, ки бо ҳам бо пардаи тунук
                    баста шудаанд, вале хеле қавӣ пайваст мешаванд.
                </Text>
                <Text className={`text-base mb-3 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Чунин тасниф барои муайян кардани тактикаи ёрии аввалин ахамияти муҳим дорад.
                </Text>
                <Text className={"text-center text-xl text-red-500 font-bold"}>
                    ЁРИИ АВВАЛ ҲАНГОМИ ВОРИДШАВИИ ҶИСМҲОИ БЕГОНА
                    ДАР РОҲИ НАФАС.
                </Text>
                <ScrollView horizontal={true} className={"mb-3"}>
                    <Image source={image1} className={"w-56 h-44 mr-1"}/>
                    <Image source={image2} className={"w-56 h-44 mr-1"}/>
                    <Image source={image3} className={"w-56 h-44"}/>
                </ScrollView>
                <Text className={"text-lg text-blue-600 text-center"}>
                    Аломатҳои воридшавии ҷисмҳои бегона ба роҳи нафас:
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    1. Сулфа - ҷисми бегонае, ки ҳаҷман хурд буда, боиси нафастангӣ намегардад.
                </Text>
                <Text className={`text-base mb-3 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    2. Бӯғӣ - кӯшишҳои нафаскашии овоздор, тағйирёбии ранги рӯӣ (сурх, баъд бо ранги кабуд), аз даст
                    додани назорат аз болои рафтори худ аз ҷониби ҷабрдида.
                </Text>
                <Text className={"text-lg text-blue-600 text-center"}>
                    Ҳангоми сулфа:
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Аз ҳама маъмултаринаш бо кафи даст задан ба пушт аст.
                    Зарбаи дастиро хамеша ба майдони байни китфхо, дар мавқеъи роҳҳои нафаскашӣ мезананд. Ҳангоми зарбаи
                    дастӣ, Шумо бояд кафи дастро ба таври зерин нигоҳ доред: ангуштон баста, ба ҳамдигар сахт пахш карда
                    мешаванд ва каме хам карда мешаванд, то кафи даст (дар шакли қаиқ) бошад.
                </Text>
                <Text className={"text-lg text-blue-600 text-center"}>
                    БАРОИ НИШОНАҲОИ НАФАСТАНГӢ:
                </Text>
                <Text className={`text-base mb-3 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Дар ин ҳолат бояд манёври Хеймлих истифода шавад. Ин як тартиби душвор нест, аммо муҳим аст, ки онро
                    дақиқ ва бодиққат иҷро кунед, то хатари осеби минбаъдаро пешгирӣ кунед.
                    Дар паси ҷабрдида истода, қафаси синаи ӯро бо дастони худ дар сатҳи миёна (барои занон - зери сина)
                    маҳкам доред. Дастҳои худро пайваста ранги қулф печонед. Бо фармон, ҷабрдида бояд ба қадри имкон
                    сахт ва кӯтоҳ нафас кашад. Пас аз фармони «нафас» ҷабрдида қафаси синаи ҷабрдидаро сахт фишурда, дар
                    айни замон ба пеш такя мекунад ва шахсро маҷбур мекунад, ки ҳамин корро кунад.
                    <Text className={"text-yellow-600"}>
                        То он даме, ки таъсири дилхоҳ ба даст наояд, ин якчанд маротиба такрор карда мешавад.
                    </Text>
                </Text>
                <Text className={"text-center text-xl text-red-500 font-bold"}>
                    МАҲАЛГИРИИ ҶИСМҲОИ БЕГОНА
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Ҳалқ <Text className={"text-red-500 font-bold"}>2%</Text>
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Бронхи асосии рост <Text className={"text-red-500 font-bold"}>58%</Text>
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Трахея <Text className={"text-red-500 font-bold"}>3%</Text>
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Бронхи асосии чап <Text className={"text-red-500 font-bold"}>37%</Text>
                </Text>
                <ScrollView horizontal={true} className={"mb-3"}>
                    <Image source={image4} className={"w-44 h-56 mr-1"}/>
                    <Image source={image5} className={"w-60 h-52 mr-1"}/>
                    <Image source={image6} className={"w-56 h-52"}/>
                </ScrollView>
                <Text className={"text-center text-xl text-green-500 font-bold"}>
                    ТАБОБАТ.
                </Text>
                <View className={"flex flex-row mx-auto mb-5"}>
                    <Image source={image7} className={"w-44 h-32"}/>
                    <Image source={image8} className={"w-44 h-32"}/>
                </View>
                <Text className={"text-lg text-blue-600 text-center"}>
                    Ҷисмҳои бегонаи ҳалқро бо пинцетҳои нугдор ё пинцетҳои нугашон борик мегиранд.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • «Зарб ба пушт»;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Манёври Ҳеймлих;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    •Истихроҷ бо ангушт;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Усули «Буратино» (ҷисмҳои бегона дар кӯдакони то 1 сола);
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Трахеотомия ё коникотомияи таъҷилӣ;
                </Text>
                <ScrollView horizontal={true} className={"mb-5"}>
                    <Image source={image9} className={"w-32 h-56 mr-1"}/>
                    <Image source={image10} className={"w-32 h-56 mr-1"}/>
                    <Image source={image11} className={"w-32 h-56 mr-1"}/>
                    <Image source={image12} className={"w-32 h-56"}/>
                </ScrollView>
                <Text className={"text-lg text-blue-600 text-center"}>
                    ШУШТАНИ ГУШ БО ШПРИТСИ ҶАНЕ.
                </Text>
                <View className={"mx-auto"}>
                    <Image source={image13}/>
                </View>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Яке аз ҳолатҳои вазнинтарине, ки ҳар кас метавонад рӯ ба рӯ шавад, ҷисми бегона дар роҳҳои нафас
                    мебошад. Ёрии таъҷилӣ дар ин ҳолатҳо бояд фавран дар сонияҳои аввал расонида шавад. Баъзе усулҳое,
                    ки ҳама метавонанд аз худ кунанд, метавонанд ҳаёти калонсолон ва кӯдакро наҷот диҳанд, агар онҳо
                    фавран татбиқ карда шаванд.
                </Text>
                <Text className={"text-lg text-blue-600 text-center"}>
                    ТАРЗИ РАСОНДАНИ ЁРИИ ТАЪҶИЛӢ.
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Баровардани ашёҳои курашакл
                    Агар дар гулуи кӯдак нахӯд, порчаи себ ё ягон чизи дигари курашакл дармонда бошад, он гоҳ аз ҳама
                    оқилона ин аст, ки сари кӯдакро ҳарчи зудтар ба поён гардонед ва бо кафи дастатон ба қафои кудак дар
                    мавқеъи шонаҳо якчанд маротиба зарба занед. Ба ном «эффекти Буратино» кор хоҳад кард.
                    Агар пас аз 2-3 зарбаи байни шонаҳо ҷисми бегона ба фарш наафтад, пас Шумо бояд фавран ба усулҳои
                    дигари баровардани он гузаред.
                    Агар қад ва вазни кӯдак имкон надиҳад, ки ӯро аз пойҳо то дарозии пурраи бадан бардоред, он гоҳ
                    барои хам кардани нисфи болоии бадан ба пушти курсӣ ё тавассути рони поятон кофӣ хоҳад буд то ки
                    сарашро то ҳадди имкон аз сатҳи қисми коси баданаш поёнтар бошад. Дар ин амалҳо ҳеҷ чизи мураккаб
                    нест ва тавре, ки таҷриба нишон медиҳад онҳо хеле самараноканд.
                </Text>
                <Text className={"text-lg text-blue-600 text-center"}>
                    БАРОВАРДАНИ АШЁХОИ ТАНГАМОНАНД АЗ ГУЛУ.
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Ҳангоми зарба задани ҷисмҳои бегонаи тангамонанд, хусусан вақте ки ҷисми бегона дар кисми поёнии
                    гулу (овозпарда) дармондааст, аз усули қаблӣ муваффақият интизор шудан лозим нест: дар ин холат
                    усулхое, ки ба зарбаи қафаси сина нигаронида шудаанд кор мекунад.
                    Зарур аст, ки мавқеи ҷисми бегонаро маҷбуран тағйир диҳед. Аксар вақт, ҷисми бегона дар ин ҳолат дар
                    бронхи рост ҷойгир аст. Ин имкон медиҳад, ки шахс ҳадди аққал бо як шуш нафас гирад ва аз ин рӯ
                    зинда монад.
                </Text>
                <Text className={"text-lg text-blue-600 text-center"}>
                    ЯКЧАНД УСУЛҲО БА ЗАРБАИ ҚАФАСИ СИНА НИГАРОНИДА ШУДА ДАСТРАСАНД.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    1. Аз ҳама маъмултаринаш бо кафи даст задан ба пушт аст. Таъсири аз ҳама бештар бо зарбаҳои кӯтоҳ ва
                    зуд-зуд ба минтақаи байни шонахо ба амал меояд. Зарбаҳоро бо кафи дасти кушода задан зарур аст ва
                    дар ҳеҷ ҳолат бо мушт ё канори кафи даст задан мумкин нест.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    2. Усули дигаре, ки бештар маълум аст, "усули полиси амрикоӣ" ном дорад. Он хеле содда аст ва ду
                    кисм дорад.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Кисми якум: он ба таври зерин амалӣ карда мешавад: паси шахси нафасгиранда истода, ӯро аз китф
                    гирифта ва ба дарозии дастҳои худ дур кардан лозим аст, ки ба синаи худ бо зарба занед. Зарбаро
                    якчанд маротиба такрор кардан мумкин аст.
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Кисми дуюм: аз паси шахси нафасгиранда истода, бо дастонатон ӯро ба бағал гиред, то дастони ба қулф
                    печонидашуда дар зеркабургаи ӯ бошанд ва баъд бо як ҳаракати тез зери диафрагмаро сахт пахш намуда,
                    бо пушт ба синаатон зарба занед. Ин имкон медиҳад, ки на танҳо сахт такон дода шавад, балки
                    боқимондаи ҳаво аз шушҳо бароварда шуда, тағирёбии чои чисми бегонаро дигар мекунад.
                </Text>
                <Text className={"text-lg text-blue-600 text-center"}>
                    Нақшаи ёрии аввалин ҳангоми ворид шудани ҷисми бегона ба ҳалқ ё трахея.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    1. Кӯдакро (кӯдаки то 5 сола) сарашро ба поён хам карда, аз харду пояш бардоред.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    2. Шахси калонсолро дар болои курсӣ, ё дар рони худ хам кунед.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    3. Бо кафи даст дар байни шонахо чанд маротиба занед.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    4. Дар ҳолати нокомӣ ва ё бо ҳуш будани чабрдида яке аз кисмҳои усули «полиси амрикоӣ»-ро истифода
                    баред.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    5. Хангоми аз хуш рафтан шахси нафасгирандаро ба пахлу гардонед ва бо кафи кушодаи даст ба пушташ
                    чанд маротиба занед.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    6. Агар усулҳои қаблӣ бесамар бошанд ва дар ҳолати нафасгир шудани чабрдида коникотомияи фаврӣ анҷом
                    додан лозим. Гузаронидани чунин корро танҳо табибон ҳақ доранд.
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    7. Ҳатто пас аз бомуваффақият баровардани ҷисми бегона, ҳатман ба духтур муроҷиат кардан лозим аст.
                </Text>
                <Text className={"text-xl text-red-500 text-center font-bold"}>
                    Дар хотир доред!
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    1. Гирифтани ҷисми бегона (бо ангушт ё пинцет).
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    2. бо мушт задан ба сутунмӯҳра.
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    3. Ҳангоми гузаронидани усули «полиси амрикоӣ» (зарба ба ин минтақа метавонад боиси боздошти
                    ногаҳонии дил гардад) фавран дастони худро кушоед.
                </Text>
            </ScrollView>
        </View>
    );
};

export default Index;