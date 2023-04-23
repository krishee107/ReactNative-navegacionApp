import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';

interface Props extends NativeStackScreenProps<any, any> { };
export const PersonaScreen = ({ navigation, route }: Props) => {
    const params = route.params;
    useEffect(() => {
        navigation.setOptions({
            title: params!.nombre
        })
    }, [])


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                {
                    JSON.stringify(params, null, 3)
                }
            </Text>
        </View>
    )
}