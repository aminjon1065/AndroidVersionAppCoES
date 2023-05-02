import React from 'react';
import {ScrollView, View, Text} from "react-native";

const Index = ({darkMode}) => {
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-center text-2xl font-bold text-red-500"}>
                    Ртуть
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    Ртуть (лат. Hydrargyrum), Hg, химический элемент II группы периодической системы Менделеева, атомный
                    номер - 80, атомная масса 200,59; серебристо-белый тяжёлый металл, жидкий при комнатной температуре.
                    Тпл. = -38,87°С и Ткип. = 356,56°С.
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    Применение ртути. Ртуть используют в производстве ртутных вентилей, газоразрядных источников света
                    (люминесцентных и ртутных ламп), диффузионных вакуумных насосов, контрольно-измерительных приборов
                    (термометров, барометров, манометров и др.).
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    ПДК ртути. Предельно дпустимая концентрация.
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    -ПДК в населённых пунктах (среднесуточная) — 0,0003 мг/м³
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - ПДК в жилых помещениях (среднесуточная) — 0,0003 мг/м³
                </Text>

                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - ПДК воздуха в рабочей зоне (макс. разовая) — 0,01 мг/м³
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - ПДК воздуха в рабочей зоне (среднесменная) — 0,005 мг/м³
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - ПДК сточных вод (для неорганических соединений в пересчёте на двухвалентную ртуть) — 0,005 мг/мл
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - ПДК водных объектов хозяйственно-питьевого и культурного водопользования, в воде водоёмов — 0,0005
                    мг/л
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - ПДК рыбохозяйственных водоёмов — 0,00001 мг/л
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    - ПДК морских водоёмов — 0,0001 мг/л
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base mb-5`}>
                    - ПДК в почве — 2,1 мг/кг
                </Text>
                <Text className={"text-center text-2xl font-bold text-red-500"}>
                    Опасность ртути.
                </Text>
                <Text className={`${darkMode ? 'text-white' : 'text-slate-950'} text-base`}>
                    Ртуть по степени воздействия на организм человека относится к 1-му классу опасности. Наибольшую
                    опасность представляют ртутные пары, источником которых является открытая поверхность ртути.
                    Металлическая ртуть не оказывает существенного воздействия на организм.
                    Ртуть вызывает острые и хронические отравления, проникая в организм через органы дыхания,
                    пищеварительный тракт, слизистые оболочки и кожу.
                    Хронические формы ртутной интоксикации выражаются в поражении центральной нервной системы.
                </Text>
            </View>
        </ScrollView>
    );
};

export default Index;