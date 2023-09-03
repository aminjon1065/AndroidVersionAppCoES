import {Share, ToastAndroid} from 'react-native';
import i18n from "../../localization/i18n";

const Index = async (message) => {
    const toastMsg = i18n.language === 'ru' ? 'Выберите приложение для отправки' : 'Интихоб кунед бо чи равон мекунед';
    try {
        const result = await Share.share({
            message: message,
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // Alert.alert("sended")
                console.log("test")
                // ToastAndroid.show('Равон карда шуд', ToastAndroid.BOTTOM);
            } else {
                // Alert.alert("sended123")
                ToastAndroid.show(toastMsg, ToastAndroid.BOTTOM);
            }
        } else if (result.action === Share.dismissedAction) {
            console.log("dismiss")
        }
    } catch (error) {
        console.log(error.message);
    }
};
export default Index;