import { Button, Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { styles } from '../theme/appTheme'

interface Props extends NativeStackScreenProps<any, any> { }

export const Pagina3Screen = ({ navigation }: Props) => {

    return (
        <View style={styles.globalMargin}>
            <Text>Pagina3Screen</Text>

            <Button title='Regresar' onPress={() => navigation.pop()} />

            <Button title='Ir a la página 1' onPress={() => navigation.popToTop()} />
        </View>
    )
}