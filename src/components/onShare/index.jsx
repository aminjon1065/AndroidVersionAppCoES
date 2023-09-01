import {Share, ToastAndroid} from 'react-native';
const Index = async (message) => {
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
                ToastAndroid.show('Интихоб кунед бо чи равон мекунед', ToastAndroid.BOTTOM);
            }
        } else if (result.action === Share.dismissedAction) {
            console.log("dismiss")
        }
    } catch (error) {
        console.log(error.message);
    }
};
export default Index;