import React from 'react';
import {ScrollView, Text, View} from "react-native";
import {FAB} from "react-native-paper";

const Index = ({darkMode}) => {
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-red-500 font-bold text-2xl text-center"}>
                    Удар молнии
                </Text>
                <Text className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Удар молнии может быть очень опасным и требует мгновенной медицинской помощи. Если вы или кто-то
                    вокруг вас были поражены молнией, следуйте этим рекомендациям:
                </Text>
                <Text className={` text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    1. Проверьте наличие сознания: проверьте, дышит ли пострадавший и есть ли у него пульс. Если у него
                    нет пульса, начните проводить сердечно-легочную реанимацию (СЛР).
                </Text>
                <Text className={` text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    2. Вызовите скорую помощь: как можно скорее позвоните в службу скорой помощи или вызовите
                    специализированный медицинский вертолет. Не пытайтесь сами доставить пострадавшего в больницу.
                </Text>
                <Text className={` text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    3. Переместите пострадавшего: если возможно, переместите пострадавшего на безопасное место, где нет
                    угрозы дальнейшего поражения молнией или других опасностей.
                </Text>
                <Text className={` text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    4. Удалите металлические предметы: снимите с пострадавшего металлические предметы, такие как часы,
                    украшения, очки или браслеты. Металл может усилить эффект удара молнии.
                </Text>
                <Text className={` text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    5.Оказывайте первую помощь: если вы обучены оказанию первой помощи, начните ее оказывать, пока не
                    прибудет медицинская помощь. Важно обратить внимание на признаки обморожения, ожогов или других
                    повреждений.
                </Text>
                <Text className={` text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    6.Наблюдайте за пострадавшим: продолжайте следить за состоянием пострадавшего до прибытия
                    медицинской помощи. Если пострадавший перестал дышать или у него остановилось сердце, продолжайте
                    проводить СЛР, пока не прибудет медицинская помощь.
                </Text>
                <Text className={` font-bold text-base text-red-500 mb-5`}>
                    Важно помнить, что удар молнии может вызвать серьезные повреждения внутренних органов и систем, а
                    также ожоги и другие травмы, поэтому пострадавший должен быть доставлен в медицинское учреждение для
                    дополнительного обследования и лечения.
                </Text>
            </View>
            <View className={"items-end mb-5"}>
                <FAB
                    icon="share"
                    className={" w-36 bg-slate-800 mt-2 text-white"}
                    onPress={handleShare}
                    color={"#fff"}
                    label={"Поделиться"}
                />
            </View>
        </ScrollView>
    );
};

export default Index;