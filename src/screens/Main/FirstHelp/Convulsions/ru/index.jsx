import React from 'react';
import {ScrollView, View, Text, Image} from "react-native";
import img1 from './../assets/1.jpg';
import img2 from './../assets/2.png';
import img3 from './../assets/3.jpg';

const Index = ({darkMode}) => {
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-center text-2xl text-red-500 font-bold"}>
                    Судороги
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Судороги могут быть разных видов, но большая часть из них проходит за несколько минут. Самое важное
                    в этот момент — это обеспечить пострадавшему безопасность.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Судороги - непроизвольные мышечные сокращения, проявляющиеся в виде приступов, продолжающиеся
                    различное время и являющиеся клиническими признаками поражения центральной нервной системы. Это
                    патология встречается у 3-5% детей.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    При физическом осмотре ребенка в первую очередь оцениваются витальные функции (дыхание и
                    кровообращение) с последующим переходом к выяснению причин судорожной активности.
                </Text>
                <View className={"mx-auto mb-5"}>
                    <Image source={img1} className={"w-64 h-44"}/>
                </View>
                <Text className={"text-xl text-blue-600 text-center"}>
                    Необходимо обратить внимание на:
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • характер дыхания, экскурсию грудной клетки;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • цвет кожных покровов (цианоз, мраморность, бледность, участки гиперпигментации);
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • признаки травмы;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • проявления септицемии (петехии, геморрагическая сыпь);
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • зрачки: размеры и их реакция на свет;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • состояние родничков и мышечного тонуса.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Анамнез:
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • характер и длительность конвульсий;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • наличие лихорадки, головной боли, раздражительности, гипотрофии;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • наличие травмы;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • возможность острого отравления;
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • болезни нервной системы и судорожный синдром у родственников.
                </Text>
                <Text className={"text-xl text-blue-600 text-center"}>
                    НЕОТЛОЖНАЯ ПОМОЩЬ
                </Text>
                <View>
                    <Image source={img2} className={"w-96 h-60"}/>
                </View>
                <View>
                    <Image source={img3} className={"w-96 h-60"}/>
                </View>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • уложить больного на пол, голову повернуть набок, обеспечить доступ свежего воздуха;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Под голову подложить что-нибудь мягкое (можно свернуть вещи, которые оказались под рукой).
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Осторожно перевернуть на бок. В этом положении ему будет безопасно: свободно дышать и человек не
                    подавится, если начнётся рвота.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • восстановить дыхание - очистить ротовую полость от слизи;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • обеспечить проходимость дыхательных путей;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • предупреждение травм головы, конечностей;
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Уложить пациента на плоскую поверхность и уложить на бок – чтобы слюна свободно вытекала из
                    полости рта и не мешала дыханию, и обеспечить аккуратную фиксацию в данном положении.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Вокруг не должно быть острых и твёрдых предметов.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • В случае, если столпились люди, то нужно попросить их отойти в сторону, чтобы обеспечить доступ
                    воздуха. </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Снимите очки, ослабьте воротник или галстук.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Если приступ не прошел через 5 минут или случился снова, травмирована голова, есть другие
                    повреждения, пострадавший не приходит в себя больше 10 минут — вызывайте скорую.
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Если есть возможность, то засеките сколько длится приступ. Можно снять приступ на видео — это очень
                    поможет врачу детскому неврологу поставить диагноз, если приступ случился первый раз.
                    Будьте рядом до того момента, пока пострадавший не придёт в себя.
                    После чего объясните, что случилось. Если это первый приступ, то вызывайте скорую и дождитесь её
                    прибытия. Если приступы уже случались, то может быть, что человек не принял необходимые препараты.
                    Свяжитесь с его родственниками и помогите добраться домой.
                </Text>
                <Text className={"text-center text-2xl text-red-500 font-bold"}>
                    ЗАПОМНИТЕ, ПРИ СУДОРОГАХ ТАК ДЕЛАТЬ НЕЛЬЗЯ!
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Нельзя прижимать человека к земле, из-за этого можно получить дополнительные травмы.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Нельзя засовывать посторонние предметы в рот, чтобы не повредить зубы и челюсти.
                </Text>
                <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Не делайте искусственное дыхание. Когда приступ закончится, то человек практически во всех случаях
                    начинает дышать сам.
                </Text>
                <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    • Не нужно давать какую-либо жидкость, до того момента пока человек не пришел в себя окончательно.
                </Text>

            </View>
        </ScrollView>
    );
};

export default Index;