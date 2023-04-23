import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends NativeStackScreenProps<any, any> {

}

export const Pagina1Screen = ({ navigation }: Props) => {

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina1Screen</Text>

            <Button
                title="Ir a la página 2"
                onPress={() => navigation.navigate('Pagina2Screen')}
            />


            <Text>Navegar con argumentos</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('PersonaScreen', {
                    id: 1,
                    nombre: 'Pedro'
                })}
            >
                <Text>Pedro</Text>
            </TouchableOpacity>
        </View>
    )
}