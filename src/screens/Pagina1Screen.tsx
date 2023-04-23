import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends NativeStackScreenProps<any, any> {

}

export const Pagina1Screen = ({ navigation }: Props) => {

    return (
        <View style={styles.globalMargin}>
            <Text>Pagina1Screen</Text>

            <Button
                title="Ir a la página 2"
                onPress={() => navigation.navigate('Pagina2Screen')}
            />

        </View>
    )
}