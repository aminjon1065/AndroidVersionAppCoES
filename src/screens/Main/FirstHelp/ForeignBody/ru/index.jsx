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
                    ИНОРОДНЫЕ ТЕЛА.
                </Text>
                <Text className={`text-base mb-3 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Предсказать заранее, какой предмет окажется «не в том горле»,
                    невозможно. Трагедия может разыграться в столовой или на улице, в машине или самолете. Разнообразию
                    инородных тел, попадающих в гортань и трахею, можно только поражаться. Чаще всего такие несчастья
                    случаются с детьми.
                </Text>
                <Text className={"text-center text-xl text-red-500 font-bold"}>
                    ВИДЫ ИНОРОДНЫХ ТЕЛ.
                </Text>
                <Text className={"text-lg text-blue-600 text-center"}>
                    В зависимости от формы все инородные тела можно разделить на три группы:
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    1. Широкие и плоские предметы относят к монетообразным телам. Это и сами монеты, и похожие на них
                    пуговицы, а также любые плоские закругленные пластины.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    2. Другая группа объединяет предметы, имеющие шаровидную форму или форму горошины - драже и
                    монпансье, всевозможные дробинки и шарики, а также непрожеванные куски картофеля, колбасы, огурцов,
                    или яблок.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    3. Последняя группа, на которую следует обратить особое внимание, включает инородные тела, по форме
                    напоминающие коромысло. Чаще всего это куски шашлыка, связанные тонкой, но очень прочной фасциальной
                    пленкой.
                </Text>
                <Text className={`text-base mb-3 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Такая классификация имеет принципиальное значение для определения тактики первой медицинской помощи.
                </Text>
                <Text className={"text-center text-xl text-red-500 font-bold"}>
                    ПЕРВАЯ ПОМОЩЬ ПРИ ПОПАДАНИИ ИНОРОДНОГО ТЕЛА В ВЕРХНИЕ ДЫХАТЕЛЬНЫЕ ПУТИ.
                </Text>
                <ScrollView horizontal={true} className={"mb-3"}>
                    <Image source={image1} className={"w-56 h-44 mr-1"}/>
                    <Image source={image2} className={"w-56 h-44 mr-1"}/>
                    <Image source={image3} className={"w-56 h-44"}/>
                </ScrollView>
                <Text className={"text-lg text-blue-600 text-center"}>
                    Признаки попадания инородных тел в дыхательные пути:
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    1. Кашель - инородное тело небольшого размера и вызывает не ярко выраженное удушье.
                </Text>
                <Text className={`text-base mb-3 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    2. Удушье - шумные попытки вдоха, изменение цвета лица (красный, затем с синюшным оттенком), утрата
                    пострадавшим контроля над своим поведением.
                </Text>
                <Text className={"text-lg text-blue-600 text-center"}>
                    При кашле:
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Хлопок всегда наносится в область между лопаток, в проекцию дыхательных путей. Проводя хлопок, нужно
                    держать ладонь следующим образом: пальцы сомкнуты, тесно прижаты друг к другу и немного согнуты,
                    чтобы ладонь была вогнутой (в форме лодочки).
                </Text>
                <Text className={"text-lg text-blue-600 text-center"}>
                    При признаках удушья:
                </Text>
                <Text className={`text-base mb-3 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Встать позади от пострадавшего, обхватить его грудную клетку руками на уровне середины (у женщин —
                    под грудью). Руки сцепить в замок. По команде пострадавший должен будет выдохнуть как можно сильнее
                    и короче. После команды «выдох» оказывающий помощь резко сдавливает грудную клетку пострадавшего и
                    одновременно наклоняется вперед, вынуждая человека сделать то же самое.
                    <Text className={"text-yellow-600"}>
                        Так повторяют несколько раз до достижения нужного эффекта.
                    </Text>
                </Text>
                <Text className={"text-center text-xl text-red-500 font-bold"}>
                    ЛОКАЛИЗАЦИЯ ИНОРОДНЫХ ТЕЛ
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Гортань <Text className={"text-red-500 font-bold"}>2%</Text>
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Правый главный бронх <Text className={"text-red-500 font-bold"}>58%</Text>
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Трахея <Text className={"text-red-500 font-bold"}>3%</Text>
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Левый главный бронх <Text className={"text-red-500 font-bold"}>37%</Text>
                </Text>
                <ScrollView horizontal={true} className={"mb-3"}>
                    <Image source={image4} className={"w-44 h-56 mr-1"}/>
                    <Image source={image5} className={"w-60 h-52 mr-1"}/>
                    <Image source={image6} className={"w-56 h-52"}/>
                </ScrollView>
                <Text className={"text-center text-xl text-green-500 font-bold"}>
                    Лечение.
                </Text>
                <View className={"flex flex-row mx-auto mb-5"}>
                    <Image source={image7} className={"w-44 h-32"}/>
                    <Image source={image8} className={"w-44 h-32"}/>
                </View>
                <Text className={"text-lg text-blue-600 text-center"}>
                    Неотложная помощь:
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • «Удары по спине»;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Прием Геймлиха;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Пальцевое извлечение;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Метод «Буратино» (инородные тела у детей до 1 года)
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Экстренная трахеотомия или коникотомия
                </Text>
                <ScrollView horizontal={true} className={"mb-5"}>
                    <Image source={image9} className={"w-32 h-56 mr-1"}/>
                    <Image source={image10} className={"w-32 h-56 mr-1"}/>
                    <Image source={image11} className={"w-32 h-56 mr-1"}/>
                    <Image source={image12} className={"w-32 h-56"}/>
                </ScrollView>
                <Text className={"text-lg text-blue-600 text-center"}>
                    ПРОМЫВАНИЕ УХА С ПОМОЩЬЮ ШПРИЦА ЖАНЕ
                </Text>
                <View className={"mx-auto"}>
                    <Image source={image13}/>
                </View>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Одна из самых критических ситуаций, с которыми может столкнуться каждый – инородное тело в
                    дыхательных путях. Неотложная помощь в этих ситуациях должна оказываться мгновенно — в первые
                    секунды. Определенные маневры, которыми способен овладеть каждый, могут спасти жизнь взрослому и
                    ребенку, если их применить немедленно.
                </Text>
                <Text className={"text-lg text-blue-600 text-center"}>
                    СПОСОБЫ ОКАЗАНИЯ НЕОТЛОЖНОЙ ПОМОЩИ.
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Извлечение шарообразных предметов.
                    Если ребенок подавился горошиной, куском яблока или любым другим шарообразным предметом, то самым
                    разумным будет как можно быстрее перевернуть малыша головой вниз и несколько раз постучать ладонью
                    по спине на уровне лопаток. Сработает так называемый «эффект Буратино».
                    Если после 2-3-х ударов между лопаток инородное тело не выпало на пол, то следует немедленно
                    приступить к другим способам его извлечения.
                    Если рост и вес ребенка не позволяют поднять его за ноги во всю длину тела, то будет вполне
                    достаточно перегнуть верхнюю половину туловища через спинку кресла, скамейку или через собственное
                    бедро так, чтобы голова оказалась как можно ниже уровня тазового отдела туловища. В этих действиях
                    нет ничего сложного, и, как показывает практика, они достаточно эффективны.
                </Text>
                <Text className={"text-lg text-blue-600 text-center"}>
                    ИЗВЛЕЧЕНИЕ МОНЕТООБРАЗНЫХ ПРЕДМЕТОВ.
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    При попадании монетообразных инородных тел, особенно когда инородное тело продвинулось ниже
                    голосовой щели, ждать успеха от предыдущего способа не приходится: сработает «эффект копилки».
                    В этой ситуации следует как можно скорее прибегнуть к методам, направленным на сотрясение грудной
                    клетки. Необходимо заставить инородное тело изменить свое положение.
                    Чаще всего инородное тело оказывается при этом в правом бронхе. Это даст возможность человеку дышать
                    хотя бы одним легким, и, следовательно, выжить.
                </Text>
                <Text className={"text-lg text-blue-600 text-center"}>
                    СУЩЕСТВУЕТ НЕСКОЛЬКО СПОСОБОВ СОТРЯСЕНИЯ ГРУДНОЙ КЛЕТКИ.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    1. Самым распространенным из них является постукивание ладонью по спине. Наибольший эффект наступает
                    при коротких, частых ударах по межлопаточной области. Удары по спине можно наносить только раскрытой
                    ладонью и ни в коем случае не кулаком и не ребром ладони.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    2. Другой, более эффективный метод, получил название «способ американских полицейских». Сам по себе
                    он достаточно прост и имеет два варианта.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Первый вариант: проводится следующим образом: необходимо встать позади подавившегося, взять его за
                    плечи и, отстранив от себя на вытянутые руки, резко с силой ударить о собственную грудную клетку.
                    Удар можно повторить несколько раз.
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Второй вариант: встать сзади пациента и обхватить его руками так, чтобы Ваши кисти, сложенные в
                    замок, оказались ниже его мечевидного отростка, а затем резким движением сильно надавить под
                    диафрагму и ударить спиной о свою грудную клетку. Это позволит не только сильно сотрясти, но и за
                    счет резкого смещения диафрагмы выдавить остаток воздуха из легких, т.е. значительно увеличить
                    смещение инородного тела.
                </Text>
                <Text className={"text-lg text-blue-600 text-center"}>
                    Схема оказания первой медицинской помощи при попадании инородного тела в гортань или трахею.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    1. Младенца (ребенка до 5 лет) перевернуть вниз головой и поднять за ноги.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    2. Взрослого перегнуть через спинку кресла, скамейки или собственное бедро.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    3. Ударить несколько раз ладонью между лопатками.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    4. В случае неудачи и при сохраненном сознании - воспользоваться одним из вариантов способа
                    «американских полицейских».
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    5. При потере сознания повернуть подавившегося на бок и несколько раз ударить раскрытой ладонью по
                    спине.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    6. Эту рекомендацию имеют право выполнять только медики. Если предыдущие методы оказались
                    неэффективными и в случае удавления шашлыком - произвести экстренную коникотомию.
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    7. Даже после удачного извлечения инородного тела необходимо обязательно обратиться к врачу.
                </Text>
                <Text className={"text-xl text-red-500 text-center font-bold"}>
                    Запомните! Недопустимо!
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    1. Доставать инородное тело (пальцами или пинцетом).
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    2. Наносить удары кулаком по позвоночнику.
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    3. Сразу разомкнуть руки при проведении способа «американских полицейских» (удар в эту область может
                    спровоцировать внезапную остановку сердца).
                </Text>
            </ScrollView>
        </View>
    );
};

export default Index;