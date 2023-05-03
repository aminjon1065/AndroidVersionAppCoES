import React from 'react';
import {ScrollView, View, Text, Image} from "react-native";
import img from './../assets/1.jpg';

const Index = ({darkMode}) => {
    return (

        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-center font-bold text-red-500 text-2xl"}>
                    ПИЩЕВЫЕ ОТРАВЛЕНИЯ.
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Пищевые отравления – это отравления которые могут быть вызваны микробами различного типа.
                </Text>
                <Text className={"text-xl text-center font-bold text-blue-600"}>
                    Симптомы пищевого отравления:
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Общее недомогание.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Урчание и боль в области живота.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Тошнота.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Рвота.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Частый жидкий стул – в виде рисового отвара, с примесью слизи, иногда с прожилками крови.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Боли, рези в животе. Возможны схваткообразные боли в животе.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Возможно повышение температуры тела.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Головная боль, головокружение и резкая слабость.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Жажда.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Бледность кожных покровов.
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Потеря сознания (в тяжелых случаях).
                </Text>
                <Text className={"text-center font-bold text-red-500 text-2xl"}>
                    ПЕРВАЯ ПОМОЩЬ ПРИ ПИЩЕВОМ ОТРАВЛЕНИИ.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Немедленно промыть пострадавшему желудок путем вызывания рвоты: дать ему выпить около 1 литра воды
                    (а лучше – слаборозового раствора калия перманганата (марганцовки), при подозрении на ботулизм – 2%
                    содового раствора), а затем вызвать рвоту путем раздражения задней стенки глотки и корня языка.
                    После этого дать пострадавшему активированный уголь из расчета 0,5-1г на 10кг его веса.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    1. Принять солевое слабительное (например, сульфат магния).
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    2. Сделать очистительную клизму.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    3. Дать обильное теплое питье.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    4. Исключить любое питание.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    При неэффективности проводимых мероприятий, утяжелении состояния больного и при первых признаках
                    ботулизма немедленно вызвать «Скорую помощь»
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    При потере сознания, но наличии у пострадавшего пульса и дыхания, уложить его в правильное
                    положение, которое позволит свободно дышать и предупредит возможность удушья или вдыхания рвотных
                    масс. Таким положением является положение лежа на животе, голова на бок. Оно необходимо
                    пострадавшему только в том случае, если у него есть пульс и сохранено дыхание.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    При отсутствии у пострадавшего дыхательной и (или) сердечной деятельности приступить к проведению
                    сердечно-легочной реанимации – искусственному дыханию и непрямому массажу сердца.
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Сохранить остатки пищи, которая вызвала пищевое отравление, чтобы передать их врачу.
                </Text>
                <Text className={"text-center font-bold text-red-500 text-2xl"}>
                    Что нельзя делать при пищевом отравлении.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Оставлять пострадавшего без первой помощи, что может привести к усилению интоксикации, быстрому
                    развитию сердечно-сосудистой недостаточности и даже смерти.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Принимать какую-либо пищу в течение 1-2 суток.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Принимать обезболивающие средства.
                </Text>
                <View className={"mx-auto"}>
                    <Image source={img} className={"w-96 h-96"}/>
                </View>
            </View>
        </ScrollView>
    );
};

export default Index;