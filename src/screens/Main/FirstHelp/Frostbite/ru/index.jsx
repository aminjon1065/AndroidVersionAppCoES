import React from 'react';
import {View, Text, ScrollView, Image} from "react-native";
import image1 from './../assets/1.jpg';
import image2 from './../assets/2.jpg';

const Index = ({darkMode}) => {
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-xl text-red-500 text-center font-bold"}>
                    ОБМОРОЖЕНИЯ
                </Text>
                <View>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        <Text className={"text-red-500 text-base font-bold"}>Обморожения</Text> – повреждение тканей в
                        результате
                        воздействия низкой температуры. Причины отморожения
                        различны, и при соответствующих условиях (длительное воздействие холода, ветра, повышенная
                        влажность, тесная или мокрая обувь, неподвижное положение, плохое общее состояние пострадавшего
                        –
                        болезнь, истощение, алкогольное опьянение, кровопотеря и т.д.)
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - Обмороженный участок тела имеет характерный вид: кожа бледная или синюшная, конечность
                        производит
                        впечатление окаменевшей. После согревания в области обморожения развивается отек, затем
                        постепенно в
                        зависимости от степени обморожения возникают воспалительные изменения, при тяжелых обморожениях
                        -
                        некроз (омертвение).
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        По характеру поражения различают четыре степени обморожения:
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - I степень - наиболее легкая, после согревания на участке обморожения развивается отек, кожа
                        становится синюшной;
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - II степень - более тяжелая, на коже появляются пузыри, наполненные прозрачной жидкостью;
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - III степень - тяжелая, образующиеся на коже пузыри содержат кровянистую жидкость, через
                        несколько
                        суток на их месте появляются участки омертвения, которые затем отторгаются, после чего
                        формируются
                        рубцы;
                    </Text>
                    <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        - IV степень - крайне тяжелая, поражается не только кожа, но и мягкие ткани и даже кость,
                        омертвевшие ткани мумифицируются (высыхают, сморщиваются, окрашиваются в темно-бурый цвет) и
                        постепенно отторгаются, заживление при таком обморожении происходит в течение многих недель и
                        даже
                        месяцев. В дальнейшем, если присоединяется инфекция, развивается сухая или влажная гангрена (вид
                        омертвения ткани, когда омертвевший участок принимает окраску от синеватой до черной).
                    </Text>
                    <Text className={"text-xl text-red-500 text-center font-bold"}>
                        ПРИЗНАКИ ОБМОРОЖЕНИЯ
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        • чувство холода
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        • жжение
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        • побледнение или синюшная окраска кожи
                    </Text>
                    <Text className={`text-base mb-5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        • потеря чувствительности
                    </Text>
                    <Text className={"text-xl text-red-500 text-center font-bold"}>
                        ПРИ ОКАЗАНИИ ПЕРВОЙ МЕДИЦИНСКОЙ ПОМОЩИ ПЕРЕВОДЯТ В ТЕПЛОЕ ПОМЕЩЕНИЕ, КЛАДУТ В ВАННУ С ТЕПЛОЙ
                        ВОДОЙ
                    </Text>
                    <View className={"mx-auto"}>
                        <Image source={image1} className={"w-64 h-56 mb-5"}/>
                    </View>
                    <Text className={"text-xl text-red-500 text-center font-bold"}>
                        МОКРУЮ ОДЕЖДУ И ОБУВЬ ПО ВОЗМОЖНОСТИ ЗАМЕНЯЮТ СУХОЙ.
                    </Text>
                    <View className={"mx-auto"}>
                        <Image source={image2} className={"w-96 h-36 mb-5"}/>
                    </View>
                    <Text className={"text-xl text-red-500 text-center font-bold"}>
                        Что нельзя делать при оказании первой доврачебной помощи!
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        • При переохлаждении запрещается поить человека водкой.
                    </Text>
                    <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        • Нельзя растирать пострадавшего при обморожении.
                    </Text>
                </View>
            </View>
        </ScrollView>

    );
};

export default Index;