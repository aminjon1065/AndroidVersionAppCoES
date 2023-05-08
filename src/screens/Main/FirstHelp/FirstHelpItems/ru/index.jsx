import React from 'react';
import {View, Text, ScrollView, Image, Share} from "react-native";
import {Button, List, FAB} from "react-native-paper";
import Apte4ka from './../assets/img/apte4ka.jpg'
import Image1 from './../assets/img/image1.png'
import Image2 from './../assets/img/image2.jpg'
import Image3 from './../assets/img/image3.jpg'
import Image4 from './../assets/img/image4.jpg'
import Image5 from './../assets/img/image5.png'
import Image6 from './../assets/img/image6.jpg'
import Image7 from './../assets/img/Image7.png'
import Image8 from './../assets/img/image8.jpg'
import Image9 from './../assets/img/image9.jpg'
import Image10 from './../assets/img/image10.jpg'
import Image11 from './../assets/img/image11.jpg'
import Image12 from './../assets/img/image12.jpg'
import Image13 from './../assets/img/image13.png'
import Image14 from './../assets/img/image14.png'
import Image15 from './../assets/img/image15.png'
import Image16 from './../assets/img/image16.jpg'

const Index = ({darkMode}) => {
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <ScrollView>
            <View className={"mb-32"}>
                <Text className={"text-4xl text-center text-red-400 font-bold"}>
                    Первая помощь.
                </Text>

                <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>
                    При авариях, катастрофах и стихийных бедствиях значительное количество людей может нуждаться в
                    первой
                    медицинской помощи, которая должна быть оказана сразу же после получения травмы или отравления. При
                    несчастных случаях и внезапных заболеваниях простейшие мероприятия первой медицинской помощи до
                    прибытия
                    медицинского работника могут спасти жизнь и сохранить здоровье пострадавшему.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>
                    - Прекращение воздействия травмирующих факторов
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>
                    - Проведение простейших медицинских мероприятий
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>
                    - Скорейшая транспортировка пострадавшего в медицинское учреждение.
                </Text>
                <List.AccordionGroup>
                    <List.Accordion
                        title="ПОМОЩЬ, ОКАЗАННАЯ НЕ СПЕЦИАЛИСТОМ, ДОЛЖНА БЫТЬ ТОЛЬКО ПОМОЩЬЮ, ПРОВЕДЕННОЙ ДО ВРАЧА, А НЕ ВМЕСТО ВРАЧА"
                        titleStyle={{color: darkMode ? 'white' : '#1E293B'}}
                        className={`${darkMode ? 'bg-slate-600 text-white' : 'text-slate-950 bg-slate-200'} rounded-lg mt-2`}
                        theme={{colors: {background: darkMode ? '#1E293B' : '#E2E8F0'}}}
                        id="1"
                    >
                        <List.Item
                            title={() => <View>
                                <Text className={"text-base text-red-700"}>ПОМОЩЬ, ОКАЗАННАЯ НЕ
                                    СПЕЦИАЛИСТОМ,
                                    ДОЛЖНА БЫТЬ ТОЛЬКО ПОМОЩЬЮ,
                                    ПРОВЕДЕННОЙ ДО ВРАЧА, А НЕ ВМЕСТО ВРАЧА</Text>
                            </View>}
                            className={darkMode ? 'bg-slate-800' : `bg-slate-100`}
                            description={
                                () =>
                                    <View>
                                        <View className={"text-base"}>
                                            <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                                • 1. временная остановка кровотечения
                                            </Text>
                                            <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                                • 2. перевязка раны (ожога), неподвижная фиксация при тяжелых травмах
                                            </Text>
                                            <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                                • 3. оживляющие мероприятия
                                            </Text>
                                            <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                                • 4. выдача обезболивающих и других средств при общеизвестных
                                                заболеваниях
                                            </Text>
                                            <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                                • 5. перенос и перевозка пострадавших.
                                            </Text>
                                            <View>
                                                <Text
                                                    className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                                    • Каждый работник должен владеть приемами первой помощи
                                                    пострадавшему и
                                                    умело их выполнять до оказания врачебной помощи. Первая доврачебная
                                                    помощь должна проводиться энергично, с применением всех средств,
                                                    которые, как правило, находятся в аптечке.
                                                </Text>
                                                <View className={"flex flex-row justify-center mb-2"}>
                                                    <Image source={Apte4ka} className={"w-10/12 h-56"}/>
                                                </View>
                                                <Text
                                                    className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                                    • Неправильное или неумелое оказание первой медицинской помощи может
                                                    явиться причиной осложнений, затягивающих выздоровление
                                                    пострадавшего или даже ведущих к инвалидности, а в некоторых случаях
                                                    (ранение с большой кровопотерей, поражение электрическим током,
                                                    ожоги) может привести к смерти пострадавшего на месте травмирования.
                                                </Text>
                                                <Text
                                                    className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                                    • Никогда не следует из-за отсутствия дыхания, сердцебиения или
                                                    пульса у пострадавшего считать его умершим и отказываться от
                                                    оказания ему помощи. Дать заключение о смерти пострадавшего и решить
                                                    вопрос о целесообразности действий по оживлению (реанимации) имеет
                                                    право только врач. Известно немало случаев (особенно при поражении
                                                    электрическим током), когда пострадавший, казалось, умер или даже
                                                    находился в состоянии клинической смерти, однако правильные и
                                                    настойчивые действия по оживлению (искусственное дыхание, массаж и
                                                    др.) спасали ему жизнь.
                                                </Text>
                                                <Text
                                                    className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                                    • При несчастном случае необходимо оказать пострадавшему первую
                                                    медицинскую помощь и, в зависимости от состояния пострадавшего,
                                                    вызвать медицинскую помощь по телефону 03.
                                                </Text>
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
                        title="ПРИЗНАКИ ЖИЗНИ И СМЕРТИ ЧЕЛОВЕКА."
                        id="2"
                    >
                        <List.Item
                            title={() =>
                                <View>
                                    <Text className={"text-base text-red-600"}
                                    >
                                        ПРИЗНАКИ ЖИЗНИ И СМЕРТИ ЧЕЛОВЕКА.
                                    </Text>
                                </View>
                            }
                            className={darkMode ? 'bg-slate-800' : `bg-slate-100`}
                            description={
                                () =>
                                    <View>
                                        <View>
                                            <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                                • Признаки жизни: сердцебиение; оказывающий помощь определяет рукой или
                                                прикладывая ухо (на слух) ниже левого соска груди пострадавшего;
                                            </Text>
                                            <View className={"mx-auto"}>
                                                <Image source={Image1}/>
                                            </View>
                                        </View>
                                        <View>
                                            <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                                • пульс определяется на внутренней части предплечья, на шее;
                                            </Text>
                                            <View className={"mx-auto"}>
                                                <Image source={Image2}/>
                                            </View>
                                        </View>
                                        <View>
                                            <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                                • наличие дыхания устанавливается по движениям грудной клетки, по
                                                увлажнению зеркала, приложенного к носу пострадавшего, или же по
                                                движению ваты, поднесенной к носовым отверстиям;
                                            </Text>
                                            <View className={"mx-auto"}>
                                                <Image source={Image3}/>
                                            </View>
                                        </View>
                                        <View>
                                            <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                                • реакция зрачка на свет. При направлении пучка света происходит резкое
                                                сужение зрачка.
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
                        title="ПРИЗНАКИ ЖИЗНИ ЯВЛЯЮТСЯ БЕЗОШИБОЧНЫМ ДОКАЗАТЕЛЬСТВОМ ТОГО, ЧТО НЕМЕДЛЕННОЕ ОКАЗАНИЕ ПОМОЩИ ЕЩЕ МОЖЕТ СПАСТИ ЧЕЛОВЕКА."
                        id="3"
                    >
                        <List.Item
                            title={() =>
                                <View>
                                    <Text className={"text-base text-red-600"}
                                    >
                                        ПРИЗНАКИ ЖИЗНИ ЯВЛЯЮТСЯ БЕЗОШИБОЧНЫМ ДОКАЗАТЕЛЬСТВОМ ТОГО, ЧТО НЕМЕДЛЕННОЕ
                                        ОКАЗАНИЕ ПОМОЩИ ЕЩЕ МОЖЕТ СПАСТИ ЧЕЛОВЕКА.
                                    </Text>
                                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                        • Искусственное дыхание следует производить, если пострадавший не дышит или
                                        дышит с трудом (редко, судорожно) или если дыхание постепенно ухудшается,
                                        независимо от причин (поражение электрическим током, отравление, утопление и
                                        т.п.).
                                    </Text>
                                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                        • Не следует продолжать делать искусственное дыхание после появления
                                        самостоятельного.
                                    </Text>
                                    <Text className={"text-base text-red-600"}>
                                        Приступая к искусственному дыханию, оказывающий помощь обязан:
                                    </Text>
                                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                        • по возможности уложить пострадавшего на спину;
                                    </Text>
                                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                        • освободить пострадавшего от стесняющей дыхание одежды (снять шарф, расстегнуть
                                        ворот, брючный ремень и т.п.);
                                    </Text>
                                    <View className={"mx-auto mt-2"}>
                                        <Image source={Image5}/>
                                    </View>
                                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                        • освободить рот пострадавшего от посторонних предметов;
                                    </Text>
                                    <View className={"mx-auto"}>
                                        <Image source={Image6}/>
                                    </View>
                                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                        • при крепко стиснутом рте, раскрыв его, выдвинуть нижнюю челюсть вперед, делая
                                        это так, чтобы нижние зубы находились впереди верхних.
                                    </Text>
                                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                        • стать сбоку от головы пострадавшего, одну руку подсунуть под шею, а ладонью
                                        другой руки надавить на лоб, максимально запрокидывая голову;
                                    </Text>
                                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                        • наклониться к лицу пострадавшего, сделать глубокий вдох открытым ртом,
                                        полностью плотно охватить губами открытый рот пострадавшего и сделать энергичный
                                        выдох (одновременно закрыв нос пострадавшего щекой или пальцами руки). Вдувание
                                        воздуха можно производить через марлю, платок, специальное приспособление
                                        "воздуховод" и т.п
                                    </Text>
                                    <View className={"mx-auto"}>
                                        <Image source={Image7}/>
                                    </View>
                                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                        • искусственное дыхание способом "изо рта в нос" проводят при открытом рте
                                        пострадавшего;
                                    </Text>
                                    <ScrollView horizontal={true}>
                                        <View className={"flex flex-row"}>
                                            <Image source={Image8}/>
                                            <Image source={Image9}/>
                                            <Image source={Image10}/>
                                        </View>
                                    </ScrollView>
                                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>

                                        • соблюдать секундный интервал между искусственными вдохами (время каждого
                                        вдувания воздуха - 1,5 - 2 с)
                                    </Text>
                                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                        • после восстановления у пострадавшего самостоятельного дыхания (визуально
                                        определяется по расширению грудной клетки) прекратить искусственное дыхание и
                                        уложить пострадавшего в устойчивое боковое положение (поворот головы, туловища и
                                        плеч осуществляется одновременно).
                                    </Text>
                                </View>
                            }>
                        </List.Item>
                    </List.Accordion>
                    <List.Accordion
                        titleStyle={{color: darkMode ? 'white' : '#1E293B'}}
                        className={`${darkMode ? 'bg-slate-600 text-white' : 'text-slate-950 bg-slate-200'} rounded-lg mt-2`}
                        theme={{colors: {background: darkMode ? '#1E293B' : '#E2E8F0'}}}
                        title="НАРУЖНЫЙ МАССАЖ СЕРДЦА."
                        id="4"
                    >
                        <List.Item
                            title={() =>
                                <View>
                                    <Text className={"text-base text-red-600"}>
                                        НАРУЖНЫЙ МАССАЖ СЕРДЦА.
                                    </Text>
                                </View>}
                            description={
                                () =>
                                    <View>
                                        <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                            • производят при остановке сердечной деятельности, характеризующейся:
                                        </Text>
                                        <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                            • бледностью или синюшностью кожных покровов;
                                        </Text>
                                        <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                            • отсутствием пульса на сонных артериях;
                                        </Text>
                                        <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                            • потерей сознания;
                                        </Text>
                                        <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                            • прекращением или нарушением дыхания (судорожные вдохи).
                                        </Text>
                                        <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                            • уложить пострадавшего на ровное жесткое основание (пол, скамья и т.п.);
                                        </Text>
                                        <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                            • расположиться сбоку от пострадавшего и (если помощь оказывает один
                                            человек) сделать два быстрых энергичных вдувания способом "изо рта в рот"
                                            или "изо рта в нос"
                                        </Text>
                                        <View className={"mx-auto mt-2"}>
                                            <Image source={Image11}/>
                                        </View>
                                        <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>

                                            • положить ладонь одной руки (чаще левой) на нижнюю половину грудины
                                            (отступив на 3 поперечных пальца выше ее нижнего края). Ладонь второй руки
                                            наложить поверх первой. Пальцы рук не касаются поверхности тела
                                            пострадавшего
                                        </Text>
                                        <ScrollView horizontal={true}>
                                            <View className={"flex flex-row"}>
                                                <Image source={Image12}/>
                                                <Image source={Image13}/>
                                                <Image source={Image14}/>
                                            </View>
                                        </ScrollView>
                                        <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                            • надавливать быстрыми толчками (руки выпрямлены в локтевых суставах) на
                                            грудину, смещая ее строго вертикально вниз на 4 - 5 см, с продолжительностью
                                            надавливания не более 0,5 сек. и с интервалом надавливания не более 0,5 с;
                                        </Text>
                                        <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                            • на каждые 2 глубоких вдувания воздуха производить 15 надавливаний на
                                            грудину (при оказании помощи одним человеком);
                                        </Text>
                                        <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                            • при участии в реанимации двух человек проводить соотношение "дыхание -
                                            массаж" как 1:5 (т.е. после глубокого вдувания проводить пять надавливаний
                                            на грудную клетку);
                                        </Text>
                                        <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                            • при проведении реанимации одним человеком через каждые 2 минуты прерывать
                                            массаж сердца на 2 - 3 с и проверять пульс на сонной артерии пострадавшего;
                                        </Text>
                                        <ScrollView horizontal={true}>
                                            <View>
                                                <Image source={Image15}/>
                                            </View>
                                        </ScrollView>
                                        <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                            • при появлении пульса прекратить наружный массаж сердца и продолжать
                                            искусственное дыхание до появления самостоятельного дыхания.
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
                <View className={"items-end"}>
                    <FAB
                        icon="share"
                        className={" w-36 bg-blue-700 mt-2"}
                        onPress={onShare}
                        label={"Поделиться"}
                    />
                </View>
            </View>
        </ScrollView>
    );
};
export default Index;