import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';

/* interface RouterParams {
    id: number,
    nombre: string
} */

interface Props extends NativeStackScreenProps<any, any> { };

export const PersonaScreen = ({ navigation, route }: Props) => {
    const params = route.params as RouterParams;

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
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